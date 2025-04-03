import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ShopPage = () => {
  return (
    <div>
      <header className="text-black whitespace-nowrap">
        <section
          className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[316px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
          role="banner"
          aria-label="Shop Banner"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9884694cd8be3716d8a295439fb7f2bc1a612549?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
            className="object-cover absolute inset-0 size-full"
            alt="Shop Banner Background"
            role="presentation"
          />
          <div className="relative max-w-full w-[124px]">
            <h1 className="text-5xl font-medium max-md:text-4xl">Shop</h1>
            <nav className="flex gap-1.5 text-base" aria-label="Breadcrumb">
              <a href="/" className=" font-medium ">
                Home
              </a>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36abc93143600b92850d17720f87a95defef78f?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
                alt="Breadcrumb Separator"
                role="presentation"
              />
              <span className="font-light" aria-current="page">
                Shop
              </span>
            </nav>
          </div>
        </section>
      </header>

      <div className="text-black">
        <nav
          className="flex flex-wrap gap-10 px-20 py-6 w-full bg-orange-50 max-md:px-5 max-md:max-w-full"
          aria-label="Product filters and sorting"
        >
          <section
            className="flex flex-1 gap-6 my-auto max-md:max-w-full"
            aria-label="Filter controls"
          >
            <div className="flex gap-3 my-auto text-xl ">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a9ab5c22038f7da2cd2079c0811b623c7aab5b?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
                alt="Filter icon"
                className="object-contain shrink-0 my-auto aspect-square w-[25px]"
              />
              <h2>Filter</h2>
            </div>
            <div className="flex flex-auto gap-6 items-center text-base">
              <button type="button" aria-label="Filter option 1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d68a8371f4d7ffa9178c1a0e9bb97468237229?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                />
              </button>
              <button type="button" aria-label="Filter option 2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/060cc1b5ba8bc5ba87b468dbc8ff6dc7ef512839?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </button>
              <div
                className="shrink-0 self-stretch w-0.5 border-2 border-solid border-neutral-400 h-[37px]"
                role="separator"
              ></div>
              <p className="self-stretch my-auto basis-auto">
                Showing 1–16 of 32 results
              </p>
            </div>
          </section>

          <section
            className="flex  gap-4 text-xl max-md:max-w-full"
            aria-label="Display controls"
          >
            <label className="my-auto">Show</label>
            <select
              id="show-items"
              className="px-5 py-3.5 whitespace-nowrap bg-white text-neutral-400 max-md:px-5"
              //   className="px-5 whitespace-nowrap bg-white h-[55px] text-neutral-400 w-[55px]"
              aria-label="Number of items to show"
            >
              <option value="16">16</option>
            </select>

            <label className="my-auto">Short by</label>
            <select
              id="sort-by"
              className="px-8 py-3.5 whitespace-nowrap bg-white text-neutral-300 max-md:px-3"
              aria-label="Sort items by"
            >
              <option value="default">Default</option>
            </select>
          </section>
        </nav>
      </div>
      <main className="flex flex-wrap gap-8 justify-center p-5 max-md:gap-5 max-sm:gap-4">
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd7c60ca1a478722aa5ee46e60df82bdb5d9386"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/941f1e2e73c9afad206902369ff88a2ca0f2c300"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Syltherine
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73021452a887b9993682491c9b1b36e22663d4fb"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b675c945af46a9edaaace4d02afd2f9fe63eadc"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd7c60ca1a478722aa5ee46e60df82bdb5d9386"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/941f1e2e73c9afad206902369ff88a2ca0f2c300"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Syltherine
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73021452a887b9993682491c9b1b36e22663d4fb"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b675c945af46a9edaaace4d02afd2f9fe63eadc"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd7c60ca1a478722aa5ee46e60df82bdb5d9386"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/941f1e2e73c9afad206902369ff88a2ca0f2c300"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Syltherine
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73021452a887b9993682491c9b1b36e22663d4fb"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
        <div className="relative w-[285px] max-md:w-[calc(50%_-_10px)] max-sm:w-full group">
          <div className="relative size-full overflow-hidden">
            <section className="w-full h-[301px]">
              <div className="relative size-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b675c945af46a9edaaace4d02afd2f9fe63eadc"
                  alt="Leviosa chair"
                  className="object-cover size-full"
                />
                <div className="absolute top-6 right-6 w-12 h-12 text-base font-medium bg-red-400 rounded-full text-[white] flex items-center justify-center">
                  -50%
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div className="flex absolute top-0 left-0 flex-col gap-6 justify-center items-center opacity-0 transition-opacity duration-300 size-full group-hover:opacity-100 mt-16">
                  <button className="px-14 py-3 text-base font-semibold text-yellow-600 cursor-pointer bg-white rounded">
                    Add to cart
                  </button>
                  <div className="flex gap-5">
                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white group-hover:text-white">
                      <i className="fa fa-share text-white"></i>
                      <span className="text-white">Share</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-exchange-alt text-white"></i>
                      <span className="text-white">Compare</span>
                    </button>

                    <button className="flex gap-0.5 items-center text-base font-semibold cursor-pointer text-white">
                      <i className="fa fa-heart text-white"></i>
                      <span className="text-white">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4 bg-gray-100 h-[145px] relative">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <h2 className="mb-2 text-2xl font-semibold text-neutral-700 relative">
                Leviosa
              </h2>
              <p className="mb-2 text-base text-zinc-500 relative">
                Stylish cafe chair
              </p>
              <span className="gap-4 text-xl font-semibold text-neutral-700 relative">
                Rp 2.500.000
              </span>
            </section>
          </div>
        </div>
      </main>

      <div>
        <article className="flex items-center justify-between p-13 gap-5 flex-wrap bg-orange-50 ">
          <div className="flex relative gap-2.5 items-center p-5 max-sm:flex-col max-sm:items-start">
            <figure className="flex-shrink-0">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60px] h-[60px] relative"
                aria-hidden="true"
              >
                <path
                  d="M49.3546 3.51562C48.0743 3.51562 46.8741 3.86121 45.8389 4.46156V1.75781C45.8389 0.787031 45.0519 0 44.0811 0H15.9561C14.9852 0 14.1982 0.787031 14.1982 1.75781V4.48301C13.1549 3.8693 11.9409 3.51562 10.6454 3.51562C6.7684 3.51562 3.61418 6.66984 3.61418 10.5469C3.61418 13.5041 4.49051 16.3615 6.14836 18.8102C8.97071 22.9789 12.4511 24.0607 15.3309 25.2127C16.9915 29.348 20.3495 32.6252 24.5384 34.1769L23.2421 42.4219H22.9874C20.0796 42.4219 17.7139 44.7875 17.7139 47.6953V56.4844H15.9561C14.9854 56.4844 14.1983 57.2714 14.1983 58.2422C14.1983 59.213 14.9854 60 15.9561 60H44.0811C45.0519 60 45.8389 59.213 45.8389 58.2422C45.8389 57.2714 45.0519 56.4844 44.0811 56.4844H42.3233V47.6953C42.3233 44.7875 39.9577 42.4219 37.0499 42.4219H36.7951L35.499 34.177C39.694 32.623 43.0557 29.3386 44.7138 25.1948C47.4343 24.1066 51.0005 23.0217 53.8518 18.8102C55.5096 16.3615 56.3859 13.504 56.3859 10.5469C56.3858 6.66984 53.2316 3.51562 49.3546 3.51562ZM14.1852 20.968C9.89918 19.2536 7.12981 15.1631 7.12981 10.5469C7.12981 8.60836 8.70692 7.03125 10.6454 7.03125C12.5839 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1983 10.9073V19.3359C14.1983 19.9009 14.2287 20.4588 14.2868 21.0087L14.1852 20.968ZM38.8077 56.4844H21.2296V52.9688H38.8077V56.4844ZM37.0499 45.9375C38.0191 45.9375 38.8077 46.7261 38.8077 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0181 45.9375 22.9874 45.9375C23.9411 45.9375 34.8134 45.9375 37.0499 45.9375ZM26.8009 42.4219L27.9641 35.023C28.6368 35.1107 29.3224 35.1562 30.0186 35.1562C30.7148 35.1562 31.4005 35.1105 32.0732 35.023L33.2364 42.4219H26.8009ZM42.3233 19.3359C42.3233 26.1207 36.8034 31.6406 30.0186 31.6406C23.2338 31.6406 17.7139 26.1207 17.7139 19.3359V10.5469H42.3233V19.3359ZM42.3233 7.03125H17.7139V3.51562H42.3233V7.03125ZM45.8147 20.968L45.7522 20.993C45.8092 20.4483 45.8388 19.8955 45.8388 19.3359V10.5469C45.8389 8.60836 47.4161 7.03125 49.3546 7.03125C51.2931 7.03125 52.8702 8.60836 52.8702 10.5469C52.8702 15.1631 50.1008 19.2537 45.8147 20.968Z"
                  fill="#242424"
                ></path>
              </svg>
            </figure>
            <div className="flex relative flex-col gap-0.5 items-start">
              <h3 className="relative text-2xl font-bold leading-9 text-neutral-800">
                High Quality
              </h3>
              <p className="relative text-xl leading-8 text-zinc-500">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 justify-center items-center max-md:gap-2 max-sm:gap-1.5">
            <figure className="m-0">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="warranty-icon"
                // style="width: 60px; height: 60px"
                aria-label="Warranty guarantee icon"
                role="img"
              >
                <g clip-path="url(#clip0_117_621)">
                  <path
                    d="M57.1194 21.2612C56.3276 18.8097 56.6651 15.1296 54.6073 12.2882C52.5333 9.42438 48.9262 8.61039 46.8894 7.1207C44.874 5.64672 42.999 2.43918 39.6089 1.33293C36.3144 0.257852 32.9455 1.71672 30.3333 1.71672C27.7216 1.71672 24.3529 0.2575 21.0578 1.33281C17.6683 2.43883 15.7918 5.64707 13.7777 7.12035C11.7431 8.60828 8.13323 9.42449 6.05959 12.2879C4.00354 15.127 4.33764 18.8154 3.54733 21.2611C2.79522 23.5888 0.333344 26.3825 0.333344 30.0003C0.333344 33.6203 2.79241 36.4032 3.54733 38.7393C4.33905 41.1909 4.00155 44.8709 6.05936 47.7123C8.13323 50.5763 11.7403 51.3902 13.7773 52.88C15.7924 54.3537 17.6677 57.5615 21.0578 58.6676C24.3501 59.742 27.7243 58.2838 30.3333 58.2838C32.9388 58.2838 36.3208 59.7405 39.6089 58.6677C42.9985 57.5617 44.8739 54.3542 46.889 52.8802C48.9236 51.3923 52.5335 50.5761 54.6071 47.7127C56.6633 44.8735 56.3289 41.1854 57.1194 38.7394C57.8715 36.4116 60.3333 33.618 60.3333 30.0003C60.3333 26.3805 57.8749 23.5984 57.1194 21.2612ZM52.6591 37.298C51.7362 40.1545 51.978 43.3512 50.8108 44.963C49.6279 46.5962 46.5202 47.3423 44.1222 49.0963C41.7505 50.8308 40.0882 53.5804 38.1548 54.2112C36.3257 54.8082 33.3449 53.5961 30.3335 53.5961C27.2999 53.5961 24.3499 54.8107 22.512 54.2112C20.5789 53.5804 18.9189 50.8327 16.5446 49.0962C14.1608 47.3528 11.0354 46.5914 9.85588 44.9628C8.69245 43.3564 8.92506 40.1375 8.00784 37.2981C7.10877 34.5162 5.02084 32.1074 5.02084 30.0003C5.02084 27.891 7.1069 25.4905 8.0076 22.7025C8.93045 19.8462 8.68869 16.6492 9.85588 15.0375C11.0381 13.4054 14.1481 12.6569 16.5446 10.9042C18.9239 9.1641 20.5757 6.42109 22.5118 5.78934C24.3393 5.19309 27.3298 6.40445 30.3332 6.40445C33.3722 6.40445 36.3149 5.18898 38.1547 5.78934C40.0876 6.42004 41.7489 9.16879 44.1222 10.9043C46.5057 12.6477 49.6313 13.4091 50.8108 15.0377C51.9745 16.6444 51.7406 19.86 52.6589 22.7023V22.7024C53.5579 25.4843 55.6458 27.8931 55.6458 30.0003C55.6458 32.1095 53.5598 34.51 52.6591 37.298ZM41.1314 22.4774C42.0467 23.3928 42.0467 24.8767 41.1314 25.792L29.4002 37.5231C28.4848 38.4385 27.0008 38.4384 26.0855 37.5231L19.5355 30.973C18.6201 30.0577 18.62 28.5737 19.5353 27.6585C20.4507 26.7433 21.9349 26.7432 22.8499 27.6585L27.7428 32.5513L37.8166 22.4775C38.7319 21.5622 40.216 21.5622 41.1314 22.4774Z"
                    fill="#242424"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_117_621">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.333344)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <figcaption className="flex flex-col gap-0.5 items-start">
              <h2 className="text-2xl font-bold leading-9 text-neutral-800 max-md:text-2xl max-sm:text-xl">
                Warranty Protection
              </h2>
              <p className="text-xl leading-8 text-zinc-500 max-md:text-lg max-sm:text-base">
                Over 2 years
              </p>
            </figcaption>
          </div>
          <div className="flex gap-2.5 justify-center items-center max-md:gap-2 max-sm:flex-col max-sm:text-center font-['Poppins']">
            <div className="flex-shrink-0">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shipping-icon"
                //   style="width: 60px; height: 60px"
                role="img"
                aria-label="Shipping icon"
              >
                <g clip-path="url(#clip0_117_629)">
                  <path
                    d="M56.0146 31.1019V3.77964C56.0146 2.80489 55.2243 2.01465 54.2496 2.01465H6.96174C5.98699 2.01465 5.19675 2.80489 5.19675 3.77964V33.28C4.34531 33.404 3.51295 33.7346 2.77659 34.2812C0.455278 35.9273 -0.0937517 39.6109 1.85068 41.8827L9.80055 51.5204C14.7216 57.2798 19.9491 57.9854 27.7205 57.9854C34.3894 57.9854 37.371 58.0148 43.1831 56.6905L48.8426 55.3369C49.7603 56.6184 51.2171 57.4485 52.8549 57.4485H55.6429C58.4129 57.4485 60.6666 55.0744 60.6666 52.1561V36.3784C60.6667 33.592 58.6116 31.3031 56.0146 31.1019ZM48.0813 34.7326L45.7296 33.5382C41.863 31.5865 37.3925 31.5142 33.4648 33.3403C32.3932 33.7618 30.056 35.1759 28.8437 35.1286H20.6834C17.9766 35.1286 15.7743 37.3307 15.7743 40.0376V41.3247C15.7591 41.3087 15.7433 41.2936 15.7283 41.2773L9.90091 34.9519C9.54827 34.5692 9.15209 34.2489 8.72684 33.9919V16.481H23.1707V22.951C23.1707 23.9257 23.9609 24.7159 24.9357 24.7159H36.0729C37.0476 24.7159 37.8379 23.9257 37.8379 22.951V16.481H52.4847V31.1018C50.4225 31.2611 48.7029 32.7364 48.0813 34.7326ZM26.7006 16.481H34.3078V21.186H26.7006V16.481ZM52.4846 12.951H37.8379V5.54463H52.4847V12.951H52.4846ZM34.3079 5.54463V12.9511H26.7007V5.54463H34.3079ZM23.1706 5.54463V12.9511H8.72673V5.54463H23.1706ZM42.3639 53.2568C36.9948 54.4865 33.7612 54.4367 27.7838 54.4367C20.4885 54.4367 16.9636 54.3188 12.5238 49.274L4.57394 39.6363C3.19113 37.8357 5.69577 35.7101 7.30473 37.3435L13.1321 43.669C14.6723 45.2941 16.6103 46.1885 18.9991 46.2411H35.1556C36.1303 46.2411 36.9206 45.4508 36.9206 44.4761C36.9206 43.5013 36.1303 42.7111 35.1556 42.7111H19.3042V40.0373C19.3042 39.277 19.9228 38.6583 20.6832 38.6583H28.8436C30.682 38.79 33.3355 37.2549 34.9529 36.541C37.8946 35.1733 41.2429 35.2274 44.135 36.6872L47.8314 38.5646V51.9489L42.3639 53.2568ZM57.1367 52.156C57.1367 53.1278 56.4666 53.9184 55.643 53.9184H52.855C52.0313 53.9184 51.3613 53.1278 51.3613 52.156V36.3784C51.3613 35.4066 52.0315 34.6159 52.855 34.6159H55.643C56.4666 34.6159 57.1367 35.4065 57.1367 36.3784V52.156Z"
                    fill="#242424"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_117_629">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.666687)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5 items-start max-sm:items-center">
              <h2 className="text-2xl font-bold leading-9 text-neutral-800 max-md:text-2xl max-sm:text-xl">
                Free Shipping
              </h2>
              <p className="text-xl leading-8 text-zinc-500 max-md:text-lg max-sm:text-base">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 items-center max-md:gap-2 max-sm:gap-1.5 font-poppins">
            <figure className="flex-shrink-0">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="support-icon"
                aria-label="Customer Support Icon"
              >
                <g clip-path="url(#clip0_117_635)">
                  <path
                    d="M54.6936 23.9628C54.2992 10.6825 43.3742 0 29.9999 0C16.6257 0 5.70065 10.6825 5.30618 23.9628L3.52936 25.7396V37.7898L5.29406 39.5545V47.7647C5.29406 52.5652 9.19948 56.4706 13.9999 56.4706H16.1858C16.9143 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7987 56.4681 29.8997 56.4706 29.9999 56.4706C38.5221 56.4706 45.6527 50.3981 47.2922 42.3529H51.9074L56.4705 37.7898V25.7396L54.6936 23.9628ZM29.9999 3.52941C40.4742 3.52941 49.1954 11.174 50.8807 21.1765H47.2922C45.6527 13.1313 38.5221 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11924C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6709 21.1765C37.9663 21.1594 33.9369 21.5068 30.6148 16.6506L29.0016 14.2926L27.6152 16.7907C25.5952 20.4306 22.8749 21.1765 19.4117 21.1765H16.329C17.9002 15.0944 23.4337 10.5882 29.9999 10.5882C36.5662 10.5882 42.0997 15.0944 43.6709 21.1765ZM12.3529 38.8235H9.55442L7.05877 36.3279V27.2015L9.55442 24.7059H12.3529V38.8235ZM8.82348 47.7647V42.3529H12.7043C13.3687 45.6441 14.9582 48.6652 17.313 51.0916C16.8194 51.6191 16.4322 52.2467 16.1858 52.9412H13.9999C11.1456 52.9412 8.82348 50.6191 8.82348 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6789 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6789 56.4706 24.7058 56.4706ZM44.1176 38.8235C44.1176 46.608 37.7844 52.9412 29.9999 52.9412C29.8988 52.9412 29.7968 52.9392 29.6949 52.9368C28.9652 50.8851 27.0048 49.4118 24.7058 49.4118C21.0823 49.4198 21.1401 49.3936 20.6884 49.4352C17.6247 46.7498 15.8823 42.9248 15.8823 38.8235V24.7059H19.4117C22.5349 24.7059 26.3384 24.1909 29.2827 20.6076C33.1674 24.6786 37.9147 24.7059 42.1762 24.7059H44.1176V38.8235ZM52.9411 36.3279L50.4455 38.8235H47.647V24.7059H50.4455L52.9411 27.2015V36.3279Z"
                    fill="#242424"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_117_635">
                    <rect width="60" height="60" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <div className="flex flex-col gap-0.5 items-start">
              <h2 className="text-2xl font-bold leading-9 text-neutral-800 max-md:text-2xl max-sm:text-xl">
                24 / 7 Support
              </h2>
              <p className="text-xl leading-8 text-zinc-500 max-md:text-lg max-sm:text-base">
                Dedicated support
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ShopPage;
