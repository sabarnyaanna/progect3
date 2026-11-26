import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: () => Date.now(),
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    category: {
      type: String,
      default: "Букети",
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRVFb_F8p_qjHvlxxsVhS6caGo7-BS_hPzZlIPUfOgyTLcJu43xIV9O2J&s=10",
    },
    description: {
      type: String,
      default: "",
      maxlength: [500, "Description too long"],
    },
  },
  { versionKey: false }
);

export const Product = mongoose.model("Product", productSchema);