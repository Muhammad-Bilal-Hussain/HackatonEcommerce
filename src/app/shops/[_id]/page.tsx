"use client"
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import threeseat1 from '../../../../public/Cloud sofa three.png'
import threeseat2 from '../../../../public/Cloud sofa three1.png'
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ShopProduct from "@/app/components/ShopProduct";
import Swal from 'sweetalert2';

interface Product {
  _id: string;
  name: string;
  imagePath: string; // Assume imagePath is a valid URL string
  description: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

export default function Page({ params: { _id } }: { params: { _id: string } }) {
  const [data, setData] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(1); // Explicitly typed state
  const { addToCart } = useCart(); // Access Cart Context
  const [activeTab, setActiveTab] = useState("description"); // State to manage active tab

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'product' && _id == "${_id}"]{
        name, price, imagePath, discountPercentage, stockLevel, description, category
      }[0]`;
      const products: Product[] = await client.fetch(`*[_type == 'product'][0...4]`);
      const result = await client.fetch(query);
      setData(result);
      setProducts(products)
    };

    fetchData();
  }, [_id]);

  if (!data) return <div className="text-center">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(data, count);
    Swal.fire({
    title: "Good job!",
    text: "Product successfully Add To Cart!",
    icon: "success"
  });
  };

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));



  return (
    <div>
      <Header />
      {/* click asgaard sofa  */}
      <div className='max-w-full mt-28'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
            <div className='flex items-center'>
            <span className='mr-5 text-[15px] text-gray-400'><a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt;</span>
            <div className='border-l-2 border-gray-400'>
            <p className='ml-5'>{data.name}</p>
            </div>
          </div>
        </div>
      </div>
      {/* product details  */}
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto py-10">
            {/* product images   */}
            <div className="flex flex-col md:flex-row items-center">
            <div className="2xl:flex flex-col space-y-3 md:mr-10 hidden lg:hidden">
              <Image src={data.imagePath} width={60} height={60} alt={data.name} className="w-20 h-20 object-cover rounded-md" />
              <Image src={data.imagePath} width={60} height={60} alt={data.name} className="w-20 h-20 object-cover rounded-md" />
              <Image src={data.imagePath} width={60} height={60} alt={data.name} className="w-20 h-20 object-cover rounded-md" />
              <Image src={data.imagePath} width={60} height={60} alt={data.name} className="w-20 h-20 object-cover rounded-md" />
            </div>
            <div className="flex-1">
              <Image src={data.imagePath} alt={data.name} width={200} height={200} className="w-full max-w-md h-auto object-cover rounded-md mx-auto" />
            </div>
            {/* details product  */}
            <div className="col-span-1 space-y-6">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-2xl font-semibold text-gray-700">Rs. {data.price}.00</p>
      <div className="flex items-center space-x-2">
        {/* <!-- Stars --> */}
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <div className='border-l-2 border-gray-400'>
        <p className="text-gray-500 ml-5">5 Customer Review</p>
        </div>
      </div>
      <p className="text-gray-600">{data.description}</p>
      
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
         onClick={handleAddToCart}>
           <Link href={"/cart"}>Add To Cart</Link>
        </button> 

        {/* trigger shadcn  */}
        {/* <AddToCartSlider data={data} count={count}/> */}

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
                <p className='text-gray-400'>SKU : {data._id}</p>
                <p className='text-gray-400'>Category : {data.category}</p>
                <p className='text-gray-400'>Tags : Sofa, Chair, Home, Shop</p>
                <p className='text-gray-400 flex space-x-5 items-center'>Share : <FontAwesomeIcon icon={faFacebook} className='ml-2 text-black'/> <FontAwesomeIcon icon={faLinkedin} className='text-black'/>
                <FontAwesomeIcon icon={faTwitter} className='text-black'/></p>
            </div>
        </div>
      </div>
        </div>
        </div>
              </div>
            </div>
        {/* description row  */}
        <p className="border-t-2 border-gray-400"></p>
        <div className=" flex mt-5 justify-center sm:space-x-3 md:space-x-3">
      {/* Tabs */}
      <div className=" max-w-7xl">
        <div className="space-y-5 sm:space-x-3 md:space-x-3">
          <div className="space-x-5 flex text-xl justify-center items-center sm:space-x-3 md:space-x-3">
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
          <div className="space-y-5 sm:space-x-3 md:space-x-3">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-400">
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                  portable active stereo speaker takes the unmistakable look and
                  sound of Marshall, unplugs the chords, and takes the show on the
                  road.
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
              <div className="sm:space-x-3 md:space-x-3">
                <p className="text-gray-400">Weight: 3.0 kg</p>
                <p className="text-gray-400">Dimensions: 30 cm x 15 cm x 20 cm</p>
                <p className="text-gray-400">Color: Black</p>
                <p className="text-gray-400">Power Output: 25 Watts</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="sm:space-x-3 md:space-x-3">
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
            {/* related image  */}
            <p className="border-t-2 border-gray-400 mt-5"></p>
            <div className="max-w-full">
              <div className="max-w-7xl mx-auto py-10 px-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 ">
              <div className="flex justify-center items-center bg-[#fff7e6] rounded-md ">
                <Image
                  src={threeseat1}
                  alt="Sofa 1"
                  className="w-full h-auto object-cover rounded-md"></Image>
              </div>
              <div className="flex justify-center items-center bg-[#fff7e6] rounded-md ">
              <Image
                  src={threeseat2}
                  alt="Sofa 1"
                  className="w-full h-auto object-cover rounded-md"></Image>
              </div>
          </div> 
              </div>
            </div>
            {/* {await RelatedProduct()} */}
            {/* Card Div */}
                                      <div className="max-w-full">
                                <div className="max-w-7xl mx-auto py-10 px-10">
                                  <section>
                                    <div className="text-center mb-8">
                                      <h2 className="text-5xl font-semibold">Related Products</h2>
                                    </div>
                                    {/* Product Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                                      {/* Product Card 1 */}
                                      {products.map((products:productData) => (
                                      <ShopProduct data={products} key={products._id} />
                                        ))
                                        }
                                    </div>
                                    {/* View More Button */}
                                    <div className="text-center mt-8">
                                      <a href="/shop" className="text-black underline text-lg font-medium">
                                        View More
                                      </a>
                                    </div>
                                  </section>
                                </div>
                              </div>
  <Footer/>
    </div>
  )
}