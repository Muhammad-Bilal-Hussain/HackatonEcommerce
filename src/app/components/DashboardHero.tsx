"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, PieChart, Pie } from "recharts";

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

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await client.fetch("*[_type == 'customer']");
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
        const data = await client.fetch("*[_type == 'order']");
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const customerData = customers.map((customer: Customer, index) => ({
    name: `Customer ${index + 1}`,
    TotalCustomers: 1,
  }));

  const orderData = orders.map((order, index) => ({
    name: `Order ${index + 1}`,
    TotalOrders: order.item.length,
  }));

// Calculate total orders and total revenue
const totalOrders = orders.length;
const totalRevenue = orders.reduce((acc, order) => {
  return acc + order.item.reduce((sum, item) => sum + (item.product_price * item.product_quantity), 0);
}, 0);

// Data for the pie chart (only Total Orders and Total Revenue)
const pieChartData = [
  { name: "Total Orders", value: totalOrders, fill: "#82ca9d" },
  { name: "Total Revenue", value: totalRevenue, fill: "#ffc658" },
];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dashboard Graphs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Customer Data</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TotalCustomers" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Data</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TotalOrders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
  <h2 className="text-xl font-bold mb-4">Customer & Order Comparison</h2>
  <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={pieChartData} dataKey="value" nameKey="name" fill="#8884d8" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
