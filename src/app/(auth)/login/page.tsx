"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import Link from "next/link";
import type {User} from 'firebase/auth';

function Login(){
     const [loading, setLoading] = useState(true);
      const [user, setUser] = useState<User | null>(null);
      const [userName, setUserName] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null); // Clear any previous errors
    
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;

      if (user.emailVerified) {
        // Retrieve user data from Local storage
        const SignInData = localStorage.getItem("SignInData");
        const {
          firstName = "",
          lastName = "",
          gender = "",
        } = SignInData ? JSON.parse(SignInData) : {};

        // Check if user data exists in Firestore
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          // Save user data to Firestore after email verification
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
        }
        router.push("/Hero");
    } else{
        setError("Please Verify Your Email before loggin in ")
    }
}catch(error){
    if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Email Issue. Please try again.");
      } 
    }
};
// change pass 
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, async(user)=>{
      if(user){
          setUser(user);
          const userDoc = await getDoc(doc(firestore,"users", user.uid));
          if(userDoc.exists()){
              const userData = userDoc.data();
              setUserName(`${userData.firstName} ${userData.lastName}`);
          }
      }else{
          router.push("/login")
      }
      setLoading(false);
});

//cleanup subscription on unamount
return() => unsubscribe();

}, [router]);

const handleChangePassword =()=>{
  router.push("/passwordchange");
};
  if(loading){
      return <p>password chnge Loading...</p>
  }

return(
    <div>
        <div className="bg-gradient-to-b from-[#f6e6b8] to-block justify-center items-center h-screen w-screen flex flex-col relative">
            <h2 className="text-4xl font-medium text-black text-center mb-10">Furniture E-Commerce</h2>
            <div className="p-5 border border-gray-300 rounded">
            <form onSubmit={handleLogin} className="space-y-6 px-6 pb-4">
                        {/* email  */}
                    <div className="mb-15">
                    <label
                    htmlFor="email"
                    className="text-gray-800 text-sm mb-2 block"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-10 sm:h-12 lg:h-12 p-3 border border-gray-300 rounded-md "
                    placeholder="Email Address"
                  />
                    </div>
                        {/* password  */}
                        <div className=" mb-15">
                        <label
                          htmlFor="password"
                          className="text-gray-800 text-sm mb-2 block"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full h-10 sm:h-12 lg:h-12 p-3 border border-gray-300 rounded-md "
                          placeholder="Enter Password"
                        />
                        </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <p 
                    onClick={handleChangePassword}
                    className="px-4  text-blue-700 rounded-md hover:text-red-700">
                    Change Password
                    </p>
                    <button type="submit"
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#f6e6b8] hover:bg-[#f0da97]">
                        Log In
                    </button>
                </form>
            <p className="text-sm font-medium text-black space-y-6 px-6 pb-4">
                Don&apos;t have an account?{" "}
                <Link href={"/signIn"} className="text-blue-700 hover:underline">Register Here
                </Link>
            </p>
            </div>
        </div>
    </div>
);
}; 
export default Login;