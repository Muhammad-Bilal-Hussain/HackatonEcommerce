import { client } from "@/sanity/lib/client";
import React from "react";

interface Customer {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  companyname: string;
  countryname: string;
  streetAddress: string;
  townCity: string;
  Province: string;
  zipCode: string;
  additionalInfo: string;
  cash: string;
  bank: string;
  // bank:string
}

const createCustomerInSanity = async (customerInfo: Customer) => {
  try {
    const customerObject = {
      _type: "customer",
      firstname: customerInfo.firstname,
      lastname: customerInfo.lastname,
      email: customerInfo.email,
      phone: customerInfo.phone,
      companyname: customerInfo.companyname,
      countryname: customerInfo.countryname,
      streetAddress: customerInfo.streetAddress,
      townCity: customerInfo.townCity,
      Province: customerInfo.Province,
      zipCode: customerInfo.zipCode,
      additionalInfo: customerInfo.additionalInfo,
      cash: customerInfo.cash,
      bank: customerInfo.bank,
    };
    const response = await client.create(customerObject);
    console.log("user created in sanity", response);
    return response;
  } catch (error) {
    console.log("error created user in sanity", error);
    throw error;
  }
};
const createOrderInSanity = async (
  cartData: productData[],
  customer_id: string
) => {
  try {
    const orderObject = {
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customer_id,
      },
      item: cartData.map((item: productData) => ({
    _type: "item",
        _id: item._id,
        product_name: item.name,
        product_description: item.description,
        product_quantity: item.quantity,
        product_price: item.price,
        product_category: item.category,
      })),
      order_date: new Date().toISOString(),
    };
    const response = await client.create(orderObject);
    console.log("Order created in sanity", response);
    return response;
  } catch (error) {
    console.log("error created order in sanity", error);
    throw error;
  }
};

export default async function Checkout(
  cartData: productData[],
  customerInformation: Customer
) {
  try {
    const customer = await createCustomerInSanity(customerInformation);
    await createOrderInSanity(cartData, customer._id);
    console.log("checkout complete");
  } catch (error) {
    console.log("error created order and customer in sanity", error);
    throw error;
  }
}
