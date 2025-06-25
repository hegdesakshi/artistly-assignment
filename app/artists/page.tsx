import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ArtistsClient = dynamic(() => import("@/components/pages/ArtistsClient"), {
ssr: false,
});

export default function ArtistsPage() {
return (
<>
<Navbar />
<Suspense fallback={<div className="text-center p-10">Loading...</div>}>
<ArtistsClient />
</Suspense>
</>
);
}