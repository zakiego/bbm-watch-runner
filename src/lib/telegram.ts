import fetch from "cross-fetch";

export const sendMessage = async (text: string) => {
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_BOT_CHAT_ID,
        text,
      }),
    },
  );
  const data = await response.json();
  return data;
};
