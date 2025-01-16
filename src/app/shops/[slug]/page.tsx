"use client";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Header from '@/app/components/Header';
import Link from 'next/link';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
    const [data, setData] = useState<any>(null);
    const [count, setCount] = useState<number>(1); // Explicitly typed state
    const { addToCart } = useCart(); // Access Cart Context
    const [activeTab, setActiveTab] = useState("description"); // State to manage active tab

    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type=='products' && slug.current=="${slug}"]{
                summary, title, image, price,
                "slug": slug.current
            }[0]`;
            const result = await client.fetch(query);
            setData(result);
        };

        fetchData();
    }, [slug]);

    if (!data) return <div className='text-center'>Loading...</div>;

    const handleIncrement = () => setCount((prevCount) => prevCount + 1);
    const handleDecrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  return (
    <div>
      <Header />
      {/* click asgaard sofa  */}
      <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
            <div className='flex items-center'>
            <span className='mr-5 text-[15px] text-gray-400'><a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt;</span>
            <div className='border-l-2 border-gray-400'>
            <p className='ml-5'>{data.title}</p>
            </div>
            </div>
            <div className="flex justify-between items-center py-10 px-10">
        {/* Image Grid */}
            <div className='flex px-10'>
        <div>
                <Image src={urlForImage(data.image).url()} alt='sofa 4' width={250} height={250} className='w-[250px]'></Image>
                <Image src={urlForImage(data.image).url()} alt='sofa 4' width={250} height={250} className='w-[250px]'></Image>
                <Image src={urlForImage(data.image).url()} alt='sofa 4' width={250} height={250} className='w-[250px]'></Image>
                <Image src={urlForImage(data.image).url()} alt='sofa 4' width={250} height={250} className='w-[250px]'></Image>
            </div>
            <div>
            <Image src={urlForImage(data.image).url()} alt='sofa 4' width={400} height={400} className='w-[800px] mx-auto mb-4'></Image>
            </div>
            </div>
            {/* details product  */}
            <div className="col-span-1 space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-2xl font-semibold text-gray-700">Rs. {data.price}.00</p>
      <div className="flex items-center space-x-2">
        {/* <!-- Stars --> */}
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <div className='border-l-2 border-gray-400'>
        <p className="text-gray-500 ml-5">5 Customer Review</p>
        </div>
      </div>
      <p className="text-gray-600">{data.summary}</p>
      
      {/* <!-- Size Options --> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-yellow-100 hover:text-yellow-700">L</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-yellow-100 hover:text-yellow-700">XL</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-yellow-100 hover:text-yellow-700">XS</button>
        </div>
      </div>

      {/* <!-- Color Options --> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <div className="flex space-x-3">
          <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></div>
        </div>
      </div>

      {/* <!-- Quantity and Add to Cart --> */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="px-3 py-2 text-gray-500 hover:bg-yellow-100 hover:text-yellow-700" onClick={handleDecrement}>-</button>
          <span className="px-4 py-2">{count}</span>
          <button className="px-3 py-2 text-gray-500 hover:bg-yellow-100 hover:text-yellow-700" onClick={handleIncrement}>+</button>
        </div>
        <button className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-yellow-100 hover:text-yellow-700 hover:border-yellow-700"
         onClick={() => addToCart(data, count)}>
           <Link href={"/cart"}>Add To Cart</Link>
        </button> 
      </div>
      {/* total amount  */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Amount</h3>
        <div className="flex space-x-2">
          <p className='text-2xl font-bold'>Rs. {data.price * count}</p>
        </div>
      </div>
      <div className='border-t-2 border-gray-400'>
        <div className='flex justify-between items-start mt-5 '>
            <div className='space-y-3'>
                <p className='text-gray-400'>SKU : SS001</p>
                <p className='text-gray-400'>Category : Sofas</p>
                <p className='text-gray-400'>Tags : Sofa, Chair, Home, Shop</p>
                <p className='text-gray-400 flex space-x-5 items-center'>Share : <FontAwesomeIcon icon={faFacebook} className='ml-2 text-black'/> <FontAwesomeIcon icon={faLinkedin} className='text-black'/>
                <FontAwesomeIcon icon={faTwitter} className='text-black'/></p>
            </div>
        </div>
      </div>
        </div>
        </div>
        {/* description row  */}
        <div className="border-t-2 border-gray-400">
      {/* Tabs */}
      <div className="flex mt-5">
        <div className="space-y-5">
          <div className="space-x-5 flex text-xl justify-center items-center">
            <button
              className={`${
                activeTab === "description" ? "text-gray-800" : "text-gray-400"
              } hover:text-gray-800`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "additionalInfo" ? "text-gray-800" : "text-gray-400"
              } hover:text-gray-800`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Information
            </button>
            <button
              className={`${
                activeTab === "reviews" ? "text-gray-800" : "text-gray-400"
              } hover:text-gray-800`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews [5]
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-5">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-400">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                  portable active stereo speaker takes the unmistakable look and
                  sound of Marshall, unplugs the chords, and takes the show on the
                  road.
                </p>
                <p className="text-gray-400">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                  vintage styled engineering. Setting the bar as one of the loudest
                  speakers in its class, the Kilburn is a compact, stout-hearted
                  hero with a well-balanced audio which boasts a clear midrange and
                  extended highs for a sound that is both articulate and pronounced.
                  The analogue knobs allow you to fine tune the controls to your
                  personal preferences while the guitar-influenced leather strap
                  enables easy and stylish travel.
                </p>
              </div>
            )}
            {activeTab === "additionalInfo" && (
              <div>
                <p className="text-gray-400">Weight: 3.0 kg</p>
                <p className="text-gray-400">Dimensions: 30 cm x 15 cm x 20 cm</p>
                <p className="text-gray-400">Color: Black</p>
                <p className="text-gray-400">Power Output: 25 Watts</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="text-gray-400">
                  1. Great product! The sound quality is amazing. - John Doe
                </p>
                <p className="text-gray-400">
                  2. Very portable and stylish. - Jane Smith
                </p>
                <p className="text-gray-400">3. Worth every penny. - Alice</p>
                <p className="text-gray-400">4. The bass is outstanding. - Bob</p>
                <p className="text-gray-400">
                  5. Perfect for outdoor use! - Chris
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
    </div>
  )
}
