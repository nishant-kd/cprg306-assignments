"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useUserAuth } from './_utils/auth-context';

const Page = () => {
    const [isClient, setIsClient] = useState(false);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    if (!isClient) {
        return <div className="flex justify-center items-center h-screen">
                <div>Loading...</div>
                </div>;
    }

    return (
        <div className="flex flex-col justify-center bg-gradient-to-r from-lime-500 to-cyan-500 items-center h-screen bg-gray-900 text-white">
           <div className="text-center">
           <h2 className="text-4xl mb-8 font-bold text-blue-900">Shopping List App</h2>
            {user ? (
                <div>
                    <h1 className="text-3xl text-blue-900 font-bold mb-8">Welcome, {user.displayName}</h1>
                    <p className="mb-4 font-bold text-gray-900">Signed in as ({user.email})</p>
                    <Link href="/week8/shopping-list" className="text-rose-900 m-5 mr-auto font-bold hover:text-white hover:underline hover:scale-110 ">
                        Continue to your Shopping List
                    </Link>
                    <button onClick={handleLogout} className="px-6 m-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-500 ease-in-out mb-4 hover:animate-pulse">
                        Signout
                    </button>
                </div>
            ) : (
                <div>
                    
                    <button onClick={handleLogin} className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-rose-500 transition duration-500 ease-in-out  hover:animate-pulse">
                        Sign in with GitHub
                    </button>
                </div>
            )}
          </div>
        </div>
      );

};

export default Page;