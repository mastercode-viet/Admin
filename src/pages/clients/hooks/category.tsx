import React from 'react'

const Category = () => {
    return (
        <div>
            <section className="mt-14 ml-40 text-center max-md:mt-10">
                <h1 className="text-3xl font-bold text-zinc-800 mr-40">Browse The Range</h1>
                <p className="text-xl text-center text-stone-500 max-md:max-w-full mr-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mt-16 w-full max-w-[1183px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <article className="w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
                                <img src="https://cdn.builder.io/api/v1/image/assets/e05d1e1649b44678ad10a1eb3d1715fd/f197f1ac320d76146edc66ad1b9742d0276e09ae?placeholderIfAbsent=true" alt="Dining category" className="object-contain w-full rounded-none aspect-[0.79]" />
                                <h2 className="self-center mt-8">Dining</h2>
                            </div>
                        </article>
                        <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
                                <img src="https://cdn.builder.io/api/v1/image/assets/e05d1e1649b44678ad10a1eb3d1715fd/6a525ea18b27a56f250d84221ef41fbd686a1303?placeholderIfAbsent=true" alt="Living category" className="object-contain w-full rounded-none aspect-[0.79]" />
                                <h2 className="self-center mt-8">Living</h2>
                            </div>
                        </article>
                        <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-2xl font-semibold text-center whitespace-nowrap text-zinc-800 max-md:mt-5">
                                <img src="https://cdn.builder.io/api/v1/image/assets/e05d1e1649b44678ad10a1eb3d1715fd/f3763c6db3c9c6a19dd4afd3482e5a6151fae063?placeholderIfAbsent=true" alt="Bedroom category" className="object-contain w-full rounded-none aspect-[0.79]" />
                                <h2 className="self-center mt-8">Bedroom</h2>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category