"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const OrderList = () => {
  interface Order {
    _id: string;
    item: { product_name: string; product_price: number; product_quantity:number }[];
    customer: { _ref: string }; // Add the customer field with _ref property
  }

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const query = "*[_type == 'order']";
        const data = await client.fetch(query);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-10 px-10">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Customer ID</th> {/* Add a new column for Customer ID */}
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="text-center border">
              <td className="border p-2">{order._id}</td>
              <td className="border p-2">
                {order.item && order.item.length > 0 ? order.item[0].product_name : "No product name"}
              </td>
              <td className="border p-2">
              {order.item && order.item.length > 0 && order.item[0].product_quantity !== undefined
              ? order.item[0].product_quantity
              : "Not Selected Quantity"}
              </td>
              <td className="border p-2">
                ${order.item && order.item.length > 0 ? order.item[0].product_price : "No Product Price"}
              </td>
              <td className="border p-2">{order.customer?._ref || "No customer ID"}</td> {/* Display the customer ID */}
              <td className="border p-2">
                <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700">
                  Deliver Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
};

export default OrderList;
