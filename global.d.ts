import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

//Untuk typescript mengetahui apa itu prisma db
