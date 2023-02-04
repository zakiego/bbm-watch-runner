import { PrismaClient } from "@prisma/client";
import { sendMessage } from "./telegram";

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const result = await next(params);

  if (params.model === "Fuels" && params.action === "createMany") {
    if (result.count > 0) {
      await sendMessage(`New fuel data: ${result.count} records`);
    }
  }

  return result;
});

export default prisma;
