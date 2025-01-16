import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from '@/sanity/lib/image';


export const revalidate = 1;
export default function ShopProduct({data}:{data:productData}) {
  return (
    <div>
      <Link href={`/shops/${data.slug}`}>
      <div className="text-center w-[300px]">
        <Image
        src={urlForImage(data.image).url()}
        alt="Product 1"
        width={100}
        height={100}
        className="mx-auto mb-4 w-[250px]"
        />
        <h3 className="text-xl font-light px-10">
        {data.title}
        </h3>
        <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. {data.price}</p>
      </div>
      </Link>
    </div>
  )
}
