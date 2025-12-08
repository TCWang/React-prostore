"use server";
//import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

import sampleData from "@/db/sample-data";

// Get latest products
export async function getLatestProducts() {
  //  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get Single product by it's slug from database
//export async function getProductBySlug(slug: string) {
//  return await prisma.product.findFirst({
//    where: { slug: slug },
//  });
//}

// Get Single product by it's slug from sampleData.ts file

export async function getProductBySlug(slug: string) {
  const product = sampleData.products.find((item) => item.slug === slug);
  return product ?? null; // page.tsx can keep treating this as possibly null
}
