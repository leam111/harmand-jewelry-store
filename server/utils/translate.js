const fetch = require("node-fetch");

async function translateToFrench(text) {
  if (!text) return "";
  try {
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        text: text,
        target_lang: "FR",
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(data);
      return "";
    }
    return data.translations[0].text;
  } catch (error) {
    console.error(error);
    return "";
  }
}

module.exports = translateToFrench;