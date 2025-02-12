import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebase";
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {User} from 'firebase/auth';
import React from "react";
import Hero from "./Hero/page";

const Home=()=> {

  return (
<div>
  <Hero/>
  {/* {user ? "Redirecting to Home Page": "Redirecting to Login Page..."} */}
</div>
  );
}
export default Home;
