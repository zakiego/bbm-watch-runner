import { fetchRaw } from "./src/utils/fetch";
import { parseRaw } from "./src/utils/html";

const main = async () => {
  const raw = await fetchRaw();

  const data = parseRaw(raw);

  console.log(data);
};

main();
