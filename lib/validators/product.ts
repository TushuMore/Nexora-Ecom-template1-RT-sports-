import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description too short"),
  price: z.number().positive("Price must be positive"),
  images: z.array(z.string()).min(1, "At least one image required"),
  category: z.string().min(2, "Category required"),
  stock: z.number().min(0, "Stock cannot be negative"),
});
