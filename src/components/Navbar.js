import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <nav className="bg-gray-900 border-gray-200">
                <div className="flex flex-wrap  mx-auto max-w-screen-xl p-4">
                    <Link to={"/"} className="flex items-center w-3/5 sm:w-3/4">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-lg pl-2 sm:text-2xl font-semibold whitespace-nowrap text-white">Food Planet</span>
                    </Link>

                    <div className="w-1/5 p-2 sm:w-1/12">
                        <Link to={"/cart"} className="flex text-white flex-row">
                            <img width="28" height="15" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt="shopping-bag" />
                            <span className="pl-2">Cart</span>
                        </Link>
                    </div>
                    <div className="flex w-1/5 pl-4  text-center sm:w-1/12">
                        <SignedIn>
                            <div className="p-2">
                                <UserButton />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <div>
                                    <button className="border p-2 border-white bg-black text-white">SignIn</button>
                                </div>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export { Navbar }
