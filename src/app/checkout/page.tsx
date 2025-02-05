"use client";
import React, { useState } from 'react';
import Image from "next/image";
import shopbg from "../../../public/shopbg.jpeg";
import shopicon from "../../../public/shopicon.png";
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Submit from '../officialAction/Submit';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Page() {
    const { cart } = useCart();

    const [customerInfo, setCustomerInfo] = useState({
        firstname:'',
        lastname:'',
        companyname:'',
        countryname:'',
        streetAddress:'',
        townCity:'',
        Province:'',
        zipCode:'',
        email:'',
        phone:'',
        additionalInfo:'',
        cash:'',
        bank:'',
        })


    if (cart.length === 0) {
        return <div className="text-center">Your cart is empty.</div>;
    }

    const subtotal = cart.reduce((acc: number, item: { price: number; quantity: number; }) => acc + item.price * item.quantity, 0);

    // customer data import from here 
    // ye work bhi sanity me move hoga name or value k throw 
    const handleInputChange = (e:any)=>{
        console.log(e);
        
        const {name, value} = e.target
        setCustomerInfo({...customerInfo,[name]:value})
    }

        const  handleCheckout =()=>{
            Submit(cart, customerInfo)
            // setShowForm(false)
            // setCart([])
          Swal.fire({
            title: "Good job!",
            text: "successfully Order Place In Sanity!",
            icon: "success"
        });
        }

    return (
        <div>
            {/* Navbar */}
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
                            <h1 className="text-3xl lg:text-6xl font-medium">CheckOut</h1>
                            <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
                                <span className="font-bold">Home</span> &gt; CheckOut
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing Section */}
            <div>
                {cart.map((item:any, index:number) => (
                    <div key={index}>
                        <div className='max-w-full'>
                            <div className='max-w-7xl mx-auto py-10 px-5 sm:px-8 md:px-10'>
                                <div className='flex flex-col lg:flex-row justify-between items-start'>
                                    {/* Billing Details */}
                                    <div className='space-y-10 w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-10'>
                                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-5'>Billing Details</h1>
                                        <div className='space-x-0 sm:space-x-5 flex flex-col sm:flex-row'>
                                            <div className='space-y-5 w-full sm:w-1/2'>
                                                <label className='text-lg font-medium block'>First Name</label>
                                                <input type="text" name='firstname' className='border border-gray-400 w-full h-[50px] md:h-[60px] rounded-xl p-5'
                                                value={customerInfo.firstname}
                                                onChange={handleInputChange}
                                                required
                                                />
                                            </div>
                                            <div className='space-y-5 w-full sm:w-1/2'>
                                                <label className='text-lg font-medium block'>Last Name</label>
                                                <input type="text" name='lastname' className='border border-gray-400 w-full h-[50px] md:h-[60px] rounded-xl p-5' 
                                                value={customerInfo.lastname}
                                                onChange={handleInputChange}
                                                required
                                                />
                                            </div>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Company Name (Optional)</label>
                                            <input type="text" name='companyname' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5'
                                            value={customerInfo.companyname}
                                            onChange={handleInputChange} required />
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Country Name</label>
                                            <input type="text" name='countryname' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.countryname}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Street Address</label>
                                            <input type="text" name='streetAddress' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.streetAddress}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Town / City</label>
                                            <input type="text" name='townCity' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.townCity}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Province</label>
                                            <input type="text" name='Province' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.Province}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>ZIP Code</label>
                                            <input type="zipcode" name='zipCode' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.zipCode}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Phone</label>
                                            <input type="phone" name='phone' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.phone}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <label className='block text-lg font-medium'>Email Address</label>
                                            <input type="email" name='email' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5' 
                                            value={customerInfo.email}
                                            onChange={handleInputChange} required/>
                                        </div>
                                        <div className='space-y-5'>
                                            <input type="information" name='additionalInfo' className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl p-5'
                                            placeholder='Additional information'
                                            value={customerInfo.additionalInfo}
                                                onChange={handleInputChange}
                                                required/>
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className='space-y-10 w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-10'>
                                        <div className='flex justify-center items-center'>
                                            <div className='space-x-0 sm:space-x-20 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full'>
                                                <div className='space-y-5'>
                                                    <h1 className='text-lg font-medium'>Product</h1>
                                                    <div className='flex items-center'>
                                                        <span className='border-b hover:bg-gray-50 transition' key={item._id}/>
                                                        <Image src={item.imagePath} alt='Product' width="60" height="60" className="w-[60px] h-auto" />
                                                        <p className='text-lg'><span className='text-gray-400 ml-4'>{item.name}</span> x {item.quantity}</p>
                                                    </div>
                                                    <p className='text-lg'>Subtotal</p>
                                                    <p className='text-lg'>Total</p>
                                                </div>
                                                <div className='text-left sm:text-right space-y-5 w-full sm:w-auto'>
                                                    <p className='text-lg font-medium'>Subtotal</p>
                                                    <p className='text-lg font-medium'>{item.price * item.quantity}.00</p>
                                                    <p className='text-lg font-medium'>{item.price}.00</p>
                                                    <p className='text-2xl font-medium text-yellow-600'>{subtotal}.00</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Payment Methods */}
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <input
                                                    value={customerInfo.cash}
                                                    onChange={handleInputChange}
                                                    id="default-radio-1"
                                                    type="radio"
                                                    // nickname="cash"
                                                    name="default-radio"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                required/>
                                                <label
                                                    htmlFor="default-radio-1"
                                                    className="ms-2 text-lg font-semibold text-gray-900"
                                                >
                                                    Direct Bank Transfer
                                                </label>
                                            </div>
                                            <div className='-mt-2 mb-2 text-gray-400'>
                                                <p>Make your payment directly into our bank account</p>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    required
                                                    value={customerInfo.bank}
                                                    onChange={handleInputChange}
                                                    id="default-radio-2"
                                                    type="radio"
                                                    // nickname="bank"
                                                    name="default-radio"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                />
                                                <label
                                                    htmlFor="default-radio-2"
                                                    className="ms-2 text-lg font-semibold text-gray-900"
                                                >
                                                    Cash on Delivery
                                                </label>
                                            </div>
                                            <button onClick={handleCheckout} className='w-full border-2 border-black rounded-2xl text-2xl mt-5 font-serif hover:bg-gray-50 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                                                <Link href="/">Place Order</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))}
            </div>
            <Footer/>
          </div>
  )
}