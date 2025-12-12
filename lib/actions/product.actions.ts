"use server";
import { prisma } from "@/db/prisma";
// import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  const normalized = data.map((product) => ({
    ...product,
    rating: Number(product.rating),
    price: product.price.toString(),
  }));
  return normalized;

  //  return convertToPlainObject(data);
}

// Get Single product by it's slug from database
//export async function getProductBySlug(slug: string) {
//  return await prisma.product.findFirst({
//    where: { slug: slug },
//  });
//}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findFirst({
    where: { slug },
  });

  if (!product) return null;

  return {
    ...product,
    rating: Number(product.rating),
    price: product.price.toString(),
  };
}
