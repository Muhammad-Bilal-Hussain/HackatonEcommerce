"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
    confirmPasswordReset,
} from 'firebase/auth';
import { auth } from "@/firebase/firebase";

const PasswordChange =()=>{
    const [currentPassword, setCurrentPassword] = useState("");
    const [NewPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setconfirmNewPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handlePasswordChange = async (event: React.FormEvent)=>{
        event.preventDefault();
        setError(null);
        setMessage(null);

        if(NewPassword !== confirmNewPassword){
            setError("New password do not match");
            return;
        }
        try{
            const user = auth.currentUser;
            if(user && user.email){
                const credential = EmailAuthProvider.credential(
                    user.email,
                    currentPassword
                );
                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, NewPassword);
                setMessage("Password change succussfully");
                setCurrentPassword("");
                setNewPassword("");
                setconfirmNewPassword("");
            } else{
                setError("No user is currently signed in");
            }
        }catch(error){
            if(error instanceof Error){
                setError(error.message);
            }else{
                setError("An unknown error occurred")
            }
        }
    };

    return(
        <div>
            <div className="bg-gradient-to-b from-[#f6e6b8] to-block flex justify-center items-center h-screen w-screen">
                <div className="max-w-md w-full p-6 border border-gray-300 rounded">
                <h2 className="text-2xl font-bold text-center text-black mb-6">Change Password</h2>
                <form onSubmit={handlePasswordChange} className="space-y-6">
                        {/* curent pass  */}
                    <div className="mb-15">
                    <label
                    htmlFor="currentPassword"
                    className="text-black text-sm mb-2 block"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentpassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="w-full h-10 sm:h-12 lg:h-12 p-3 border border-gray-300 rounded-md "
                    placeholder="Current Password"
                  />
                    </div>
                        {/* new password  */}
                        <div className=" mb-15">
                        <label
                          htmlFor="newPassword"
                          className="text-black text-sm mb-2 block"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          value={NewPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                          className="w-full h-10 sm:h-12 lg:h-12 p-3 border border-gray-300 rounded-md "
                          placeholder="Enter Password"
                        />
                        </div>
                        {/* Confirm password  */}
                        <div className=" mb-15">
                        <label
                          htmlFor="confirmnewPassword"
                          className="text-black text-sm mb-2 block"
                        >
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmNewPassword"
                          value={confirmNewPassword}
                          onChange={(e) => setconfirmNewPassword(e.target.value)}
                          required
                          className="w-full h-10 sm:h-12 lg:h-12 p-3 border border-gray-300 rounded-md "
                          placeholder="Enter Password"
                        />
                        </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {message && <p className="text-green-500 text-sm">{message}</p>}
                    <button 
                    // onClick={handleChangePassword}
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Change Password
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
};
export default PasswordChange;