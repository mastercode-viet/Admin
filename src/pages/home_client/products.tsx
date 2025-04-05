import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useList } from "@refinedev/core";
export const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isHovered, setHoveredId] = useState<number | null>(null);
  //   const { data } = useList({ resource: "products" });
  //   console.log(data);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="px-5 py-0 mx-auto my-0 max-w-[1236px] mt-20">
      <h1 className="mb-8 text-4xl font-bold text-center text-neutral-700 max-sm:text-3xl">
        Our Products
      </h1>
      <div className="grid gap-8 mb-8 grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {products.map((product) => (
          <article
            key={product.id}
            className="relative w-full"
            onMouseEnter={() => setHoveredId(product.id)} // Set hovered product ID
            onMouseLeave={() => setHoveredId(null)} // Reset hovered product ID
          >
            <div className="relative mb-6 w-full h-[301px]">
              <img
                src={product.imageUrl || "https://via.placeholder.com/300"} // Fallback image if no imageUrl
                alt={product.title}
                className="object-cover size-full transition-opacity duration-300 hover:opacity-70"
              />
              <div
                className={`absolute top-0 left-0 flex justify-center items-center bg-neutral-700 transition-opacity duration-300 size-full ${
                  isHovered === product.id
                    ? "opacity-75"
                    : "opacity-0 pointer-events-none"
                }`}
              ></div>
            </div>
            <div className="p-2 bg-gray-100">
              <h3 className="mb-1 text-2xl font-semibold text-neutral-700">
                <Link
                  to={`/products/${product.id}`}
                  className="hover:text-blue-600"
                >
                  {product.title}
                </Link>
              </h3>
              <p className="mb-1 text-base font-medium text-zinc-500">
                {product.description_sort}
              </p>
              <div className="flex gap-4 items-center mt-0">
                <span className="text-xl font-semibold text-neutral-700">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-base line-through text-zinc-400">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="h-12 text-base font-semibold text-yellow-600 bg-white border border-yellow-600 cursor-pointer w-[245px] max-sm:w-full hover:bg-yellow-50 transition-colors mb-20">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
