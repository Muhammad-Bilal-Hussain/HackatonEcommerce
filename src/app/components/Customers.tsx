"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface Customer {
  _id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  companyname?: string;
  streetAddress: string;
  townCity: string;
  Province: string;
  countryname: string;
  zipCode: string;
  additionalInfo?: string;
  bank?: string;
  cash?: string;
}

interface Order {
  _id: string;
  item: { product_name: string; product_price: number; product_quantity: number }[];
  customer: { _ref: string };
}

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const query = "*[_type == 'customer']";
        const data = await client.fetch(query);
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const query1 = "*[_type == 'order']";
        const data1 = await client.fetch(query1);
        setOrders(data1);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Customer Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, index) => {
            // Find orders for the current customer
            const customerOrders = orders.filter((order) => order.customer._ref === customer._id);

            return (
              <div  
                key={customer._id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-300"
              >
                <h2 className="text-xl font-semibold text-gray-700">
                  #{index + 1} - {customer.firstname} {customer.lastname}
                </h2>
                <p className="text-gray-600 text-sm">{customer.email}</p>
                <p className="text-gray-600 text-sm">{customer.phone}</p>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800">Address:</h3>
                  <p className="text-gray-600">
                    {customer.streetAddress}, {customer.townCity}, {customer.Province || "N/A"},{" "}
                    {customer.countryname} - {customer.zipCode}
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800">Payment Info:</h3>
                  <p className="text-gray-600">
                    <strong>Customer ID:</strong> {customer._id || "N/A"}
                  </p>
                  <p className="text-gray-600">
                    <strong>Bank:</strong> {customer.bank || "N/A"}
                  </p>
                  <p className="text-gray-600">
                    <strong>Cash:</strong> {customer.cash || "N/A"}
                  </p>
                </div>

                {customer.additionalInfo && (
                  <p className="mt-4 text-gray-700">
                    <strong>Additional Info:</strong> {customer.additionalInfo}
                  </p>
                )}

                {/* Display orders for this customer */}
                <div className="mt-4">
                  <h3 className="text-lg font-black text-gray-800">Order Details:</h3>
                  {customerOrders.length > 0 ? (
                    customerOrders.map((order) => (
                      <div key={order._id} className="mt-2 p-3 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">
                          <strong>Order ID:</strong> {order._id}
                        </p>
                        <p className="text-gray-700">
                          <strong>Product Name:</strong>{" "}
                          {order.item.map((item) => item.product_name).join(", ")}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No orders found</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
