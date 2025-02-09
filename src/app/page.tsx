import Hero from "@/components/sections/hero";
import Newest from "@/components/sections/newest";

export default async function Home() {
    return (
        <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <Hero />
            <Newest />
        </main>
    );
}
