import React from 'react'
import Link from "next/link";


export const revalidate = 1;
export default function ShopProduct({data}:{data:productData}) {
  return (
    <div>
<Link href={`/shops/${data._id}`}>
      <div className="text-center w-[300px]">
      <img src={data.imagePath} alt={data.name} width="100"
      height="100" 
      className="mx-auto mb-4 w-[250px]"
      />
        <h3 className="text-xl font-light px-10">
        {data.name}
        </h3>
        <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. {data.price}</p>
      </div>
      </Link>
    </div>
  )
}
