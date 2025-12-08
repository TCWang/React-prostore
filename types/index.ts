import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  numReviews: number;
  createdAt: Date;
};

// Lightweight type for mock data that hasn't been normalized yet
export type SampleProduct = Omit<Product, "id" | "createdAt" | "price"> & {
  price: number;
};
