import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types";

function Products({
    productsHeader,
    products,
    className,
}: {
    productsHeader: React.ReactNode;
    products: Product[];
    className: string;
}) {
    return (
        <div className="bg-white">
            <div className={className ?? ""}>
                <div className="flex justify-between items-center">
                    {productsHeader}
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-10">
                    {products.map((product) => (
                        <li key={product._id}>
                            <ProductCard
                                name={product.product}
                                price={product.price}
                                categoryName={product.categoryName}
                                href={"/product/" + product.slug}
                                image={product.images[0]}
                                description={product.description}
                                price_id={product.price_id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Products;
