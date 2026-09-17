const express = require("express");
const router = express.Router();
const multer = require("multer");
const supabase = require("../config/supabaseClient");
const protect = require("../middleware/authMiddleware");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

const cleanName = req.file.originalname
  .replace(/[^a-zA-Z0-9.]/g, '-')
  .toLowerCase();
const fileName = `${Date.now()}-${cleanName}`;



    const { error } = await supabase.storage
      .from("product-images")
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
      });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Upload failed" });
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    res.status(201).json({ imageUrl: data.publicUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;