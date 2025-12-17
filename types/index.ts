import { z } from "zod";
import {
  insertProductSchema,
  insertcartsSchema,
  cartItemSchema,
} from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  numReviews: number;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertcartsSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
