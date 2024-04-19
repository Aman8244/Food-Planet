import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food Planet</span>
                    </Link>
                    <div>
                        <Link className="flex flex-row" to={"/search"}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                            </svg>
                            <span className="pl-2">Search</span>
                        </Link>
                    </div>

                    <div>
                        <Link to={"/cart"} className="flex flex-row">
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1" />
                            <span className="pl-2">Cart</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse mr-10">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <div className="flex flex-row">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABw0lEQVR4nO3Wz4uNcRQG8A9ihml+rIil2JCkjLX8AZgRZY87fuywIX8BJSXWs8Hev2DIj5mMjaiJSbamDG6hRm89t97kzr3X3NeMmqfO5vt9znPOPd9zzntZxX+IAVzDFL7EnuACNlQdfDc+YKGJFUltqyr4IN4l0CMcxCb04yhe526yqkpcSYBX6GmSYCOJ81UkMBXxw4twRsIpeqLr+BrxzS0atOB8Xq4EBqtMYKqNJxgN5/FyNOEQ3oRzrooEBkpjOIFD6Mv5aCn4C6xX4SKaXWQRFcG3qhj9uJpg87GJlL2yX75isS72T7AzZb6P6ZS+8fbzObuHs9jRraA9qOFZk6b7GfvTXeFzpsnItoVjv3X8HB5EdDhz38BQzmrhzJX8ZqPVEW6UBF7iJHo78O+Nz3RJ53q7zrU41DGGNf4ea9MT9WiebsdpNuTjuocT0Sw2aUvUQ97YxQT6ovmtHfLTkIvydwtjnfxRGQn5B25h1xIC78ftaC1Euy1cKjkVNoNxXI7IcBbTFmyPHcARXMxCel/y/x7NjrAHd/Fpka9fK/uIm0usomLX78saLp7kIZ7jbQLMxCZzdwensDdjuIqVjV/x+KYIM5RObwAAAABJRU5ErkJggg==" alt="user logo" />
                                    <button className="ml-2">SignIn</button>
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
