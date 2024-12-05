import { Product } from "@/types";
import getData from "@/app/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../product-card";
import Products from "../products";

async function Newest() {
    const query = `* [_type == "product"][0...4] | order( _createdAt desc) {
    _id,
    product,
      price,
      "slug": slug.current,
      "categoryName": category->category,
      images,
      description,
      price_id,
}`;

    const data: Product[] = await getData(query);

    return (
        <Products
            productsHeader={
                <>
                    <h2 className="text-2xl font-bold tracking-tight  text-gray-900">
                        Our Newest Products
                    </h2>

                    <Link
                        className="text-primary flex items-center gap-x-1"
                        href={"/all"}
                    >
                        See All{" "}
                        <span>
                            <ArrowRight />
                        </span>
                    </Link>
                </>
            }
            products={data}
            className="max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        />
    );
}

export default Newest;
