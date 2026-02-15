import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Product =
  models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
