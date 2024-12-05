"use client";

import { Button } from "@/components/ui/button";

function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="text-center mt-10 w-screen">
            <h2 className="text-4xl font-bold mt-32">Something went wrong!</h2>
            <Button
                onClick={() => reset()}
                className="mt-5 font-semibold text-md text-white"
            >
                Try again
            </Button>
        </main>
    );
}

export default Error;
