import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col items-start px-20 py-11 mt-16 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-start w-full max-w-[1500px] max-md:max-w-full">
                    <div className="flex flex-col ml-10">
                        <h2 className="self-start text-2xl font-bold text-black">Funiro.</h2>
                        <address className="mt-12 text-base text-neutral-400 max-md:mt-10 not-italic">
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </address>
                    </div>
                    <nav className="flex flex-col items-start self-stretch text-base font-medium text-black whitespace-nowrap ml-24">
                        <h3 className="text-neutral-400">Links</h3>
                        <ul className="mt-14 space-y-12 max-md:mt-10">
                            <li className="mt-14"><a href="#" className="hover:text-yellow-600">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-600">Shop</a></li>
                            <li><a href="#" className="hover:text-yellow-600">About</a></li>
                            <li><a href="#" className="hover:text-yellow-600">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex-auto max-md:max-w-full ml-24">
                        <div className="flex gap-5 max-md:flex-col">
                            <nav className="w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow items-start text-base font-medium text-black max-md:mt-10">
                                    <h3 className="text-neutral-400">Help</h3>
                                    <ul className="space-y-12 max-md:mt-10">
                                        <li className="mt-14">
                                            <a href="#" className="hover:text-yellow-600">Payment Options</a>
                                        </li>
                                        <li><a href="#" className="hover:text-yellow-600">Returns</a></li>
                                        <li>
                                            <a href="#" className="hover:text-yellow-600">Privacy Policies</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className=" w-[67%] max-md:ml-0 max-md:w-full ">
                                <div className="flex flex-col w-full max-md:mt-10">
                                    <h3 className="self-start text-base font-medium text-neutral-400">
                                        Newsletter
                                    </h3>
                                    <form className="flex gap-3 mt-14 text-sm max-md:mt-10">
                                        <div className="flex flex-col text-neutral-400">
                                            <input type="email" id="email" className="border-b border-black border-solid bg-transparent pb-1" placeholder="Enter Your Email Address" />
                                        </div>
                                        <button type="submit" className="font-medium text-black whitespace-nowrap border-b border-black border-solid pb-1">
                                            SUBSCRIBE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="shrink-0 self-center mt-12 max-w-full h-px border-black border-solid border-b border-zinc-300 w-[1240px] max-md:mt-10" />
                <p className="mt-9 text-base text-black ml-10">2023 furino. All rights reverved</p>
            </footer>

        </div>
    )
}

export default Footer