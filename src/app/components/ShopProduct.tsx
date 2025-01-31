import React from 'react'
import Link from "next/link";
import Image from 'next/image';


export const revalidate = 1;
export default function ShopProduct({data}:{data:productData}) {
  return (
    <div>
<Link href={`/shops/${data._id}`}
className='h-auto bg-white hover:bg-slate-50 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105'>
      <div className="text-center">
      <Image src={data.imagePath} alt={data.name} 
      width={400}
      height={400} 
      className="object-cover bg-cover w-[500px] h-[300px] rounded-t-lg"
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
