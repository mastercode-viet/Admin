import { useShow, useMany } from '@refinedev/core';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams(); // Get product ID from URL
    const { queryResult: productQuery } = useShow({
        resource: 'products',
        id,
    });

    const product = productQuery?.data?.data;
    const { data: relatedProductsData, isLoading: relatedProductsLoading } = useMany({
        resource: 'products',
        ids: product ? product.relatedIds || [] : [],
    });

    const relatedProducts = relatedProductsData?.data || [];
    const isLoading = productQuery.isLoading || relatedProductsLoading;

    if (isLoading) {
        return <p className="text-center">Loading...</p>;
    }

    if (!product) {
        return <p className="text-center">Product not found</p>;
    }

    return (
        <div className="overflow-hidden pb-12 bg-white">
            <nav className="flex gap-3.5 items-center px-20 py-8 mt-3.5 text-base bg-orange-50 text-neutral-400 max-md:px-5">
                <a href="/" className="hover:text-yellow-600">Home</a>
                <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true" alt="Breadcrumb separator" className="object-contain w-5 aspect-square" />
                <a href="#" className="hover:text-yellow-600">Shop</a>
                <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true" alt="Breadcrumb separator" className="object-contain w-5 aspect-square" />
                <a href="#" className="hover:text-yellow-600">{product.title}</a>
            </nav>
            <div>
                <main className="flex flex-col items-center px-20 pt-9 pb-14 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <section className="self-start w-full max-w-[1217px] max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="w-6/12 max-md:ml-0 max-md:w-full">
                                <img src={product.imageUrl} alt={product.title} className="w-full h-[510px] object-cover bg-[#F9F1E7] rounded-lg" />
                            </div>
                            <article className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <h1 className="text-5xl text-black mb-5">{product.title}</h1>
                                <p className="text-2xl font-medium text-neutral-400">{product.price}</p>
                                <p className="mt-auto text-sm text-black whitespace-pre-line">{product.description}</p>
                                <div className="mt-5">
                                    <label className="text-sm text-neutral-400">Size</label>
                                    <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
                                        <button className="px-3 text-white bg-yellow-600 rounded-md h-[30px] w-[30px]">
                                            L
                                        </button>
                                        <button className="px-2 bg-orange-50 rounded-md h-[30px] w-[30px]">
                                            XL
                                        </button>
                                        <button className="px-2 bg-orange-50 rounded-md h-[30px] w-[30px]">
                                            XS
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label className="text-sm text-neutral-400">Color</label>
                                    <div className="flex gap-4 mt-3">
                                        <button aria-label="Purple color" className="flex shrink-0 bg-violet-500 h-[30px] rounded-[50px] w-[30px]">
                                        </button><button aria-label="Black color" className="flex shrink-0 bg-black h-[30px] rounded-[50px] w-[30px]">
                                        </button><button aria-label="Yellow color" className="flex shrink-0 bg-yellow-600 h-[30px] rounded-[50px] w-[30px]">
                                        </button></div>
                                </div>
                                <div className="flex flex-wrap gap-2.5 self-stretch mt-8 w-full text-black max-md:max-w-full">
                                    <div className="flex gap-9 px-4 py-5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">
                                        <button className="hover:text-yellow-600">-</button>
                                        <span className="font-medium">1</span>
                                        <button className="hover:text-yellow-600">+</button>
                                    </div>
                                    <button className="px-12 py-4 text-xl rounded-2xl border border-black border-solid hover:bg-yellow-600 hover:text-white max-md:px-5">
                                        Add To Cart
                                    </button>
                                    <button className="flex flex-col justify-center px-12 py-4 whitespace-nowrap rounded-2xl border border-black border-solid hover:bg-yellow-600 hover:text-white max-md:px-5">
                                        <div className="flex gap-2.5 justify-center items-center">
                                            <span className="self-stretch my-auto text-2xl">+</span>
                                            <span className="self-stretch my-auto text-xl">Compare</span>
                                        </div>
                                    </button>
                                </div>
                            </article>
                        </div>
                    </section>
                    <hr className="shrink-0 self-end mt-10 max-w-full h-px border border-solid border-zinc-300 w-[605px] max-md:mt- -translate-x-20" />
                    <dl className="mt-10 w-[605px] translate-x-[280px] text-base text-neutral-400">
                        <div className="flex items-center gap-3">
                            <dt className="min-w-[63px]">SKU</dt>
                            <span className="font-medium">:</span>
                            <dd>SS001</dd>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <dt className="min-w-[20px]">Category</dt>
                            <span className="font-medium">:</span>
                            <dd>Sofas</dd>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <dt className="min-w-[63px]">Tags</dt>
                            <span className="font-medium">:</span>
                            <dd>Sofa, Chair, Home, Shop</dd>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <dt className="min-w-[63px]">Share</dt>
                            <span className="font-medium">:</span>
                            <dd className="flex gap-5">
                                <a href="#" aria-label="Share on Facebook">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/df84bf565ad8d18448095eab4442c035367a0f2e13e9265891d051b7b570503c?placeholderIfAbsent=true" alt="Facebook" className="object-contain w-5 aspect-square" />
                                </a>
                                <a href="#" aria-label="Share on LinkedIn">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/fbbcdd7a5216cfdc1f66c0b19d56e713cc01cdd404ed8c7705318c01acb2b31f?placeholderIfAbsent=true" alt="LinkedIn" className="object-contain w-5 aspect-square" />
                                </a>
                                <a href="#" aria-label="Share on Twitter">
                                    <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true" alt="Twitter" className="object-contain w-5 aspect-square" />
                                </a>
                            </dd>
                        </div>
                    </dl>
                </main>
                <hr className="mt-2.5 w-full border border-solid border-zinc-300" />
                <section className="flex flex-col items-center pt-12 w-full bg-white max-md:max-w-full">
                    <nav className="flex flex-wrap gap-10 max-w-full text-2xl text-neutral-400 w-[649px]">
                        <button className="font-medium text-black">Description</button>
                        <button className="grow shrink w-[242px]">Additional Information</button>
                        <button className="grow shrink w-[111px]">Reviews [5]</button>
                    </nav>
                    <div className="mt-9 text-base text-neutral-400 max-w-[1000px] text-justify">
                        <p className="mb-9">
                            {product.description}
                        </p>
                    </div>
                    <div className="mt-11 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/28e49458615ff4652af38782ca0920dd87b50bbd800f02b33bedfa38cb9004a2?placeholderIfAbsent=true" alt="Product detail 1" className="w-6/12 object-contain aspect-[1.74] max-md:w-full max-md:mt-7" />
                            <img src="https://cdn.builder.io/api/v1/image/assets/fade7a66245c4bb8b027677c62a79354/e0d668fb1c9796b2982e836921a211521051db779b5e03326e9ec1b85104e755?placeholderIfAbsent=true" alt="Product detail 2" className="w-6/12 object-contain aspect-[1.74] max-md:w-full max-md:mt-7" />
                        </div>
                    </div>
                    <hr className="self-stretch mt-16 w-full border border-solid border-zinc-300 max-md:mt-10" />
                </section>
                <section className="flex flex-col items-center px-20 pt-14 pb-28 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                    <h2 className="text-4xl font-medium text-black">Related Products</h2>
                    <div className="flex flex-wrap gap-8 items-center mt-7 max-md:max-w-full">
                        {relatedProducts.map((item) => (
                            <article key={item.id} className="self-stretch my-auto min-w-60 w-[285px]">
                                <div className="relative">
                                    <img src={item.imageUrl} className="w-full aspect-[0.947] object-cover" />
                                    <span className="absolute top-6 right-7 px-px w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-base font-medium text-white">-30%</span>
                                </div>
                                <div className="flex flex-col items-start px-4 pt-4 pb-8 w-full bg-gray-100">
                                    <h3 className="text-2xl font-semibold leading-tight text-neutral-700">{item.title}</h3>
                                    <p className="mt-2 text-base font-medium text-zinc-500">{item.description_sort}</p>
                                    <div className="flex gap-4 items-center self-stretch mt-2">
                                        <span className="text-xl font-semibold text-neutral-700">{item.price} VND</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <button className="px-16 py-3 mt-11 mb-0 text-base font-semibold text-yellow-600 bg-white border border-solid border-yellow-600 hover:bg-yellow-600 hover:text-white max-md:px-5 max-md:mt-10 max-md:mb-2.5">
                        Show More
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Detail;