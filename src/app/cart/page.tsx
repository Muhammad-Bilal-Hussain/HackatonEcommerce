"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import shopbg from "../../../public/shopbg.jpeg";
import shopicon from "../../../public/shopicon.png";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) =>
      acc + item.price * item.quantity,
    0
  );

  const handleCheckout = ()=>{
    Swal.fire({
      title: "Good job!",
      text: "Your Product has been add to Checkout!",
      icon: "success"
    });
  }
  const handleDelete =(id: string)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id); // Yahan ab id pass ho rahi hai
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been removed from the cart.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div>
      <Header />

      {/* Shop Hero Section */}
      <div className="max-w-full relative">
        <Image
          src={shopbg}
          alt="Shop Background"
          className="w-full h-[400px] lg:h-[700px] object-cover opacity-25"
        />
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-10">
          <div className="flex justify-center items-center absolute inset-0">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <Image src={shopicon} alt="Shop Icon" className="w-16 lg:w-[100px]" />
              </div>
              <h1 className="text-3xl lg:text-6xl font-medium">Cart</h1>
              <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
                <span className="font-bold">Home</span> &gt; Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cart */}
      <div className="max-w-full">
        {cart.map((item: any) => (
          <div key={item._id} className="max-w-7xl mx-auto py-10 px-10">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Product Detail */}
              <div className="w-full md:w-2/3 rounded-lg p-4">
                <table className="w-full border-collapse bg-[#fbf3f3]">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2">Product Name</th>
                      <th className="py-2 text-center">Qty</th>
                      <th className="py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="flex items-center gap-4 max-sm:mr-4">
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width="60"
                          height="60"
                          className="md:w-[60px] max-sm:w-[40px] h-auto "
                        />
                        <span className="md:font-medium max-sm:font-[200px] max-sm:mr-4">{item.name}</span>
                      </td>
                      <td className="text-center py-2 max-sm:px-4">
                        <p className="text-gray-800 md:text-base border border-gray-400 rounded-lg max-sm:rounded-md max-sm:w-[20px] max-sm:h-[20px] flex justify-center items-center max-sm:text-sm">
                          {item.quantity}
                        </p>
                      </td>
                      <td className="text-right md:py-2 max-sm:px-2">Rs. {item.price * item.quantity}.00</td>
                      <td className="text-center py-2">
                      <FontAwesomeIcon
                      icon={faTrash}
                      className="px-4 py-1 text-xl max-sm:text-sm text-red-500 hover:text-red-600 "
                      onClick={() => handleDelete(item._id)}
                      />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cart Summary */}
              <div className="w-full md:w-1/3 bg-[#fbf3f3] shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Cart Total</h2>
                <div className="flex justify-between items-center border-b py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">Rs. {item.price}.00</span>
                </div>
                <div className="flex justify-between items-center border-b py-2">
                  <span className="text-gray-600">Total</span>
                  <span className="text-yellow-600 font-bold">Rs. {subtotal}.00</span>
                </div>
                <button onClick={handleCheckout} className="w-full text-black mt-4 px-4 py-2 border-2 border-black hover:font-bold font-medium rounded-3xl">
                  <Link href="/checkout">Check Out</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
