import axios from 'axios';
import { client } from "@/sanity/lib/client";
export default async function handler(res:any) {
  try {
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');
    for (const product of data) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }
    res.status(200).json({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch or insert data' });
  }
}