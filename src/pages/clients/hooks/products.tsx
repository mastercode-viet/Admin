import React from 'react'
import { useList } from "@refinedev/core";
import { useNavigate } from 'react-router';

interface IProduct {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
    status: string;
    description: string;
}

const Products = () => {
    const { data, isLoading } = useList<IProduct>({
        resource: "products",
    });
    const navigate = useNavigate();
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <section className="flex flex-col items-center px-24 w-full max-md:px-10 max-sm:px-5 mt-16">
                <h1 className="mb-10 text-4xl font-bold leading-10 text-center text-neutral-700 max-md:text-3xl max-sm:mb-10 max-sm:text-3xl">
                    Our Products
                </h1>
                <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {data?.data.map((product) => (
                        <article key={product.id} className="relative w-[285px] max-md:w-full group">
                            <div className="relative bg-[0.72] h-[301px]">
                                <img src={product.imageUrl || "https://picsum.photos/200/300"} alt={product.title} className="w-full h-full object-cover" />
                                {product.status === "Hết hàng" && (
                                    <div className="absolute top-[24px] right-[24px]">
                                        <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={24} cy={24} r={24} fill="#E97171" />
                                            <text x={5} y="29.6" fill="white" fontFamily="Poppins" fontSize={16} fontWeight={500}>
                                                -30%
                                            </text>
                                        </svg>
                                    </div>
                                )}
                                <div className="flex absolute inset-0 flex-col gap-6 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/70">
                                    <button className="h-12 text-base font-semibold text-yellow-600 bg-white w-[202px] hover:bg-yellow-50 transition-colors">
                                        Add to cart
                                    </button>
                                    <div className="flex gap-5 items-center text-white">
                                        <button className="flex gap-0.5 items-center hover:text-yellow-600 transition-colors">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 10.6666C11.4747 10.6666 11 10.8733 10.644 11.2046L5.94 8.46658C5.97333 8.31325 6 8.15992 6 7.99992C6 7.83992 5.97333 7.68658 5.94 7.53325L10.64 4.79325C11 5.12659 11.4733 5.33325 12 5.33325C13.1067 5.33325 14 4.43992 14 3.33325C14 2.22659 13.1067 1.33325 12 1.33325C10.8933 1.33325 10 2.22659 10 3.33325C10 3.49325 10.0267 3.64658 10.06 3.79992L5.36 6.53992C5 6.20659 4.52667 5.99992 4 5.99992C2.89333 5.99992 2 6.89325 2 7.99992C2 9.10659 2.89333 9.99992 4 9.99992C4.52667 9.99992 5 9.79325 5.36 9.45992L10.0587 12.2053C10.0211 12.3562 10.0014 12.511 10 12.6666C10 13.0621 10.1173 13.4488 10.3371 13.7777C10.5568 14.1066 10.8692 14.363 11.2346 14.5143C11.6001 14.6657 12.0022 14.7053 12.3902 14.6282C12.7781 14.551 13.1345 14.3605 13.4142 14.0808C13.6939 13.8011 13.8844 13.4447 13.9616 13.0568C14.0387 12.6688 13.9991 12.2667 13.8478 11.9012C13.6964 11.5358 13.44 11.2234 13.1111 11.0036C12.7822 10.7839 12.3956 10.6666 12 10.6666Z" fill="currentColor" />
                                            </svg>
                                            <span>Share</span>
                                        </button>
                                        <button className="flex gap-0.5 items-center hover:text-yellow-600 transition-colors">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.08 7L11.08 8L14.52 4.55L11 1L9.99998 2L11.8 3.8H1.99998V5.2H11.82L10.08 7ZM5.85998 9L4.85998 8L1.41998 11.5L4.90998 15L5.90998 14L4.09998 12.2H14V10.8H4.09998L5.85998 9Z" fill="currentColor" />
                                            </svg>
                                            <span>Compare</span>
                                        </button>
                                        <button className="flex gap-0.5 items-center hover:text-yellow-600 transition-colors">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="currentColor" strokeWidth="1.8" />
                                            </svg>
                                            <span>Like</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-100">
                                <h2 className="mb-2 text-2xl font-bold leading-7 text-neutral-700" onClick={() => navigate(`/detail/${product.id}`)}>
                                    {product.title}
                                </h2>
                                <div className="mb-4">
                                    <p className="mb-2 text-base font-bold leading-6 text-zinc-500">{product.description}</p>
                                    <span className="text-xl font-semibold text-neutral-700">Rp {product.price}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <button className="mt-20 h-12 text-base font-semibold text-yellow-600 bg-white border border-yellow-600 w-[245px] max-sm:w-full hover:bg-yellow-50 transition-colors">
                    Show More
                </button>
            </section>
        </div>
    );
};

export default Products;