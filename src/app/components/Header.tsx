"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import manicon from "../../../public/manicon.png";
import manicon1 from "../../../public/searchicon.png";
import manicon2 from "../../../public/heart icon.png";
import manicon3 from "../../../public/carticon.png";
import imageUrlBuilder from "@sanity/image-url"; // Sanity image URL helper
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebase";
import {doc, getDoc} from 'firebase/firestore';
import type {User} from 'firebase/auth';



// Sanity configuration
const sanityClient = {
  projectId: "rzlgzwqn",
  dataset: "production",
};

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source:any) => builder.image(source);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [user, setUser] = useState<User | null>(null); //user image ke lie 
  // logount kam 
//   const [loading, setLoading] = useState(true);
// const [user, setUser] = useState<User | null>(null);
// const [userName, setUserName] = useState<string | null>(null);
// const router = useRouter();

// useEffect(()=>{
//   const unsubscribe = onAuthStateChanged(auth, async(user)=>{
//       if(user){
//           setUser(user);
//           const userDoc = await getDoc(doc(firestore,"users", user.uid));
//           if(userDoc.exists()){
//               const userData = userDoc.data();
//               setUserName(`${userData.firstName} ${userData.lastName}`);
//           }
//       }else{
//           router.push("/login")
//       }
//       setLoading(false);
// });

// //cleanup subscription on unamount
// return() => unsubscribe();

// }, [router]);
// const handleLogout = async ()=>{
//   try{
//       await signOut(auth);
//       router.push("/login")
//   }catch(error){
//       console.log("logOut Error", error);
      
//   };
// };

  interface Product {
    imagePath: any;
    _id: string;
    name: string;
    image: any; // Image object from Sanity
    description: string;
    price: number;
    category: string;
    stockLevel: number;
    isFeaturedProduct: boolean;
  }

  const [products, setProducts] = useState<Product[]>([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State for filtered products

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = encodeURIComponent(
          `*[_type == "product"] | order(_createdAt desc)`
        );
        const response = await fetch(
          `https://${sanityClient.projectId}.api.sanity.io/v2021-10-21/data/query/${sanityClient.dataset}?query=${query}`
        );

        const data = await response.json();
        console.log("Fetched Products:", data.result);

        if (data.result) {
          setProducts(data.result); // Set products
        } else {
          setProducts([]); // Set an empty array if no result
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products whenever searchInput changes
  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter((product) =>
        product.name?.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchInput, products]);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the search bar
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  // dropdown ka kam 
  const [isOpen, setIsOpen] = useState(false);



  //image ka kam
  // Check if user is logged in
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => unsubscribe();
}, []);

const handleLogout = async () => {
  await signOut(auth);
  setUser(null);
};
//img kam khtm

  return (
<div>
  {/* Navbar */}
  <section>
    <div className="max-w-full bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <nav className="w-full px-4 py-4">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex items-center">
              <button
                className="block md:hidden text-gray-700 text-2xl font-bold focus:outline-none"
                onClick={toggleMenu}
              >
                ☰
              </button>
              <ul
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left px-4 py-6 md:py-0`}
              >
                <li>
                  <a href="/" className="text-lg font-semibold hover:text-black">
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className="hover:text-black text-lg font-semibold"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="hover:text-black text-lg font-semibold"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-black text-lg font-semibold"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Icons */}
            <div className="flex items-center space-x-3 md:space-x-10">
              {/* account icon */}
              <a href="/signIn">
                <Image
                  src={manicon}
                  alt="myaccount"
                  className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                />
              </a>
              {/* Search Icon with Search Bar */}
              <div className="relative flex items-center space-x-2">
                <Image
                  src={manicon1}
                  alt="search"
                  className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                  onClick={toggleSearch}
                />
                {isSearchOpen && (
                  <div className="rounded-md px-4 py-2 ">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-40 px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}>
                    </input>
                      {/* Search Results */}
                      {isSearchOpen && searchInput && (
                      <div className="w-[280px] mx-auto h-[300px] overflow-auto lg:fixed bg-white">
                        {filteredProducts.length > 0 ? (
                          <div className="">
                            {filteredProducts.map((product) => (
                              <Link href={`/shops/${product._id}`} key={product._id}>
                              <div
                                className="border py-2 border-gray-300 shadow-md mb-2 flex items-center rounded-md"
                              >
                                <Image
                                  src={product.imagePath} // Use Sanity image URL helper
                                  alt={product.name}
                                  width={60}
                                  height={60}
                                  className="rounded-md"
                                />
                                <h3 className="text-lg font-bold ml-2">{product.name}</h3>
                              </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-gray-500">No products found.</p>
                        )}
                      </div>
                      )}
                  </div>
                )}
              </div>
                {/* wishlist icon  */}
              <a href="/wishList">
                <Image
                  src={manicon2}
                  alt="blogs"
                  className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                />
              </a>
              {/* cart icon  */}
              <a href="/cart">
                <Image
                  src={manicon3}
                  alt="cart"
                  className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                />
              </a>
              {/* options dropdown  */}
              <div className="relative inline-block text-left">
                {user ? (
                  <div className="flex items-center space-x-2">
                    {/* Profile Picture */}
                    <Image
                      src={user?.photoURL?.replace("=s96-c", "=s400-c") || "/default-profile.png"}
                      alt="Profile"
                      width={100}
                      height={100}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                    {/* <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="inline-flex justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black"
                    >
                      <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </button> */}
                  </div>
                ) : (
                  <a href="/login" className="text-lg font-medium text-gray-700 hover:text-xl hover:font-bold transition-transform transform hover:scale-105">
                    Log In
                  </a>
                )}

                {isOpen && user && (
                  <div className="absolute mt-2 w-36 rounded-md bg-white shadow-lg">
                    <div className="py-1">
                      <a href="/passwordchange" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Account Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</div>

  );
};

export default Header;
