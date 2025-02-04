"use client"
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase/firebase";
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {User} from 'firebase/auth';
import React from "react";

const Home=()=> {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async(user)=>{
      if(user){
        if(user.emailVerified){
          const userDoc = await getDoc(doc(firestore, "users",user.uid));
          if(!userDoc.exists()){
            //retrieve user data from local storage
            const SignInData = localStorage.getItem("SignInData")
            const {
              firstName = "",
              lastName = "",
              gender = "",
            } = SignInData ? JSON.parse(SignInData):{};

            await setDoc(doc(firestore, "users", user.uid),{
              firstName ,
              lastName ,
              gender ,
              email: user.email,
            });

            //clear Sign in data from local storage
            localStorage.removeItem("signInData")
          }
          setUser(user);
          router.push("/Hero");
        }else{
          setUser(null);
          router.push("/login");
        }
      }else{
        setUser(null);
        router.push("/login");
      }
      setLoading(false);
    });

    return()=> unsubscribe();
  },[router]
);
if(loading){
return <p>Loading...</p>
}
  return (
<div>
  {/* <Hero/> */}
  {user ? "Redirecting to Home Page": "Redirecting to Login Page..."}
</div>
  );
}
export default Home;
