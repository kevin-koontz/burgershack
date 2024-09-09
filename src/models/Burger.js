import { Schema } from "mongoose";

export const BurgerSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    price: { type: Number, required: true, maxlength: 10 },
    takeout: { type: Boolean }
  }
)