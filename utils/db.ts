import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;
if (!connectionString) {
  throw new Error("Missing DATABASE_URL in env");
}

// створюємо адаптер з рядком підключення
const adapter = new PrismaPg({ connectionString });

// singleton
declare global {
  // @ts-ignore
  var __prisma: PrismaClient | undefined;
}

const prisma = global.__prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  global.__prisma = prisma;
}

export default prisma;
