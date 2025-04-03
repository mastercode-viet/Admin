import React from 'react'
import screenshot from "../../image/Screenshot 2025-04-02 204046.png";
import screenshot_1 from "../../image/Screenshot 2025-04-02 171211.png";
import Category from './hooks/category';
import Products from './hooks/products';
const Home = () => {
    return (
        <div>
            <section className="overflow-hidden relative w-full h-screen font-bold ">
                <div className="relative size-full">
                    <div className="absolute top-0 left-0 size-full">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aadc19d1fb88e7ca826da99d12f826e61f64f69" className="object-cover size-full" alt="Interior design" />
                    </div>
                    <article className="absolute top-2/4 p-5 w-full -translate-y-2/4 max-w-[643px] right-[50px] max-md:max-w-[500px] max-md:right-[30px] max-sm:right-0 max-sm:top-2/4 max-sm:p-5 max-sm:max-w-full max-sm:-translate-y-2/4">
                        <div className="px-10 py-16 bg-yellow-50 rounded-xl max-md:px-8 max-md:py-10 max-sm:px-5 max-sm:py-8">
                            <div className="max-w-[561px]">
                                <p className="mb-7 text-base font-semibold text-zinc-800 tracking-[3px]">
                                    New Arrival
                                </p>
                                <h1 className="mb-4 text-5xl font-bold text-yellow-600 leading-[65px] max-md:text-5xl max-md:leading-[52px] max-sm:text-3xl max-sm:leading-10">
                                    Discover Our New Collection
                                </h1>
                                <p className="mb-12 text-lg font-medium leading-6 text-zinc-800 max-md:text-base max-sm:text-sm max-sm:leading-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                    tellus, luctus nec ullamcorper mattis.
                                </p>
                                <button className="px-20 py-6 text-base font-bold text-white uppercase bg-yellow-600 cursor-pointer max-md:px-12 max-md:py-5 max-sm:px-10 max-sm:py-4 max-sm:w-full hover:bg-yellow-700 transition-colors duration-300" aria-label="Buy Now">
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <Category />
            <Products />
            <section className="self-stretch py-11 pl-0 mt-16 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <img src={screenshot_1} className="w-full object-cover" />
                </div>
            </section>
            <section className="text-center mt-10 max-md:mt-10">
                <h2 className="text-xl font-semibold text-zinc-600">Share your setup with</h2>
                <p className="z-10 self-center mt-2 text-4xl font-bold leading-tight text-center text-neutral-700">
                    #FuniroFurniture
                </p>
            </section>
            <section className="flex z-10 flex-col pt-14 pl-0 pr-0 mt-0 w-full max-md:pl-0 max-md:pr-0 max-md:mt-0 max-md:max-w-full">
                <div className="grid grid-cols-1">
                    <img src={screenshot} className="w-full object-cover" />
                </div>
            </section>
        </div>
    )
}

export default Home