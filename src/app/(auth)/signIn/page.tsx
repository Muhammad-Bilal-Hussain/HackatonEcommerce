"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";   
  import { auth } from "@/firebase/firebase";
  import { getFirestore, doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

  const SignIn=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
    const db = getFirestore();

    const handleSignIn = async (event: FormEvent) => {
        event.preventDefault();
        setError(null); 
        setMessage(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
          }

          try {
            //user authentication
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = userCredential.user;
            await sendEmailVerification(user);

          // Store additional user data in Firestore
          await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          email: email,
          uid: user.uid
      });
            // Temporarily store user data in local storage
        localStorage.setItem(
        "registrationData",
        JSON.stringify({ firstName, lastName, gender, email })
      );

      setMessage(
        "Registration successful! Please check your email for verification."
      );

      // Clear form fields
      setFirstName("");
      setLastName("");
      setGender("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Successful: ", user);

      // Store user data locally or redirect
      localStorage.setItem(
        "googleUserData",
        JSON.stringify({ displayName: user.displayName, email: user.email })
      );

      // setMessage("Google Sign-In Successful! Redirecting...");
      router.push("/Hero");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred during Google Sign-In.");
      }
    }
  };

  return(
    <div>
      <div className="flex justify-around items-center">
        {/* register work */}
      <div className="justify-center items-center h-screen w-screen flex flex-col relative">
            <h2 className="text-3xl font-black text-center mb-10 ">Registeration</h2>
            <div className="p-5 border border-gray-300 rounded">
                <form onSubmit={handleSignIn} className="space-y-6 px-6 pb-4">
                    <div className="flex space-x-4">
                        {/* first name  */}
                        <div className="w-1/2">
                        <label htmlFor="firstName" className="text-sm font-medium block mb-2 text-gray-600">First Name</label>
                        <input type="text" id="firstName"
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                        required
                        className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Your First Name"/>
                        </div>
                        {/* last name  */}
                        <div className="w-1/2">
                        <label htmlFor="lastName" className="text-sm font-medium block mb-2 text-gray-600">Last Name</label>
                        <input type="text" id="lastName"
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                        required
                        className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Your Last Name"/>
                        </div>
                    </div>
                    {/* gender  */}
                    <div>
                        <label htmlFor="gender" className="text-sm font-medium block mb-2 text-gray-600">Gender</label>
                        <select
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          required
                          className="w-full h-16 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        </div>
                        {/* email  */}
                    <div>
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
                    className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                    placeholder="Email Address"
                  />
                    </div>
                    <div className="flex space-x-4">
                        {/* password  */}
                        <div className="w-1/2">
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
                          className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                          placeholder="Enter Password"
                        />
                        </div>
                        {/* confirm password  */}
                        <div className="w-1/2">
                        <label
                          htmlFor="confirmPassword"
                          className="text-gray-800 text-sm mb-2 block"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md"
                          placeholder="Confirm Password"
                        />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {message && <p className="text-green-500 text-sm">{message}</p>}
                    <button type="submit"
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#fff4d1] hover:bg-[#f6e6b8]">
                        Register
                    </button>
                    <Link href={"/login"} className="text-blue-700 hover:underline">Already have an Account?
                </Link>
                </form>
                {/* Google Sign-In Button */}
            </div>
        </div>
      </div>
    </div>
  );

  };
export default SignIn;