import axios from "axios";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await axios.get("https://template-0-beta.vercel.app/api/product");
    console.log("API Response:", data); // Debugging ke liye

    if (!Array.isArray(data)) {
      return NextResponse.json({ error: "Invalid data format from API" }, { status: 500 });
    }

    for (const product of data) {
      if (!product.id || !product.name || !product.price) {
        console.warn("Skipping invalid product:", product);
        continue;
      }

      await client.create({
        _type: "product",
        id: String(product.id),
        name: product.name,
        imagePath: product.imagePath || "",
        price: parseFloat(product.price) || 0,
        description: product.description || "",
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: Boolean(product.isFeaturedProduct),
        stockLevel: product.stockLevel || 0,
        category: product.category || "Uncategorized",
      });
    }

    return NextResponse.json({ message: "Data inserted successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch or insert data" }, { status: 500 });
  }
}