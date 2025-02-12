"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { User } from "firebase/auth";
import { Menu, X } from "lucide-react"; // Navbar button hide/unhide
import OrderList from "../components/OrderList"; // Import OrderList component
import Customer from "../components/Customers"; // Import Customer component
import DashboardHero from "../components/DashboardHero"; // Import dashboard component
import Link from "next/link";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true); // Navbar toggle
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState("Home"); // Track which section is active
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(`${userData.firstName} ${userData.lastName}`);
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.log("logOut Error", error);
    }
  };

  const handleChangePassword = () => {
    router.push("/passwordchange");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0"
        } bg-gray-800 text-white transition-all duration-300 overflow-hidden h-full fixed top-0 left-0`}
      >
        <h2 className="text-xl font-bold mb-4 p-4">Dashboard</h2>
        <ul className="p-4">
          <li className="mb-2">
            <button
              onClick={() => setSelectedSection("Home")}
              className="block w-full text-left p-2 hover:bg-gray-700 rounded"
            >
              Home
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setSelectedSection("Orders")}
              className="block w-full text-left p-2 hover:bg-gray-700 rounded"
            >
              Orders
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => setSelectedSection("Customers")}
              className="block w-full text-left p-2 hover:bg-gray-700 rounded"
            >
              Customers
            </button>
          </li>
          <Link href={"/login"}>
          <li className="mb-2">
            <button
              className="block w-full text-left p-2 hover:bg-gray-700 rounded"
            >
              Log Out
            </button>
          </li>
          </Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 sm:ml-64 transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-800 text-white rounded focus:outline-none mb-4"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {userName && <h1 className="text-4xl font-bold mb-6 ml-10">Welcome, {userName}!</h1>}

        {/* Conditional rendering based on selected section */}
        {selectedSection === "Home" && <DashboardHero/>}
        {selectedSection === "Orders" && <OrderList />}
        {selectedSection === "Customers" && <Customer/>}
      </div>
    </div>
  );
};

export default Dashboard;
