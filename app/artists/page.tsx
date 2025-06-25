"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "@/components/ArtistCard";
import Navbar from "@/components/Navbar";
import artistsData from "@/data/artists.json";

interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

const unique = (arr: string[]) => Array.from(new Set(arr));

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const preSelectedCategory = searchParams.get("category") || "";

  const [filtered, setFiltered] = useState<Artist[]>(artistsData);
  const [category, setCategory] = useState(preSelectedCategory);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const categories = unique(artistsData.map((a) => a.category));
  const locations = unique(artistsData.map((a) => a.location));
  const prices = unique(artistsData.map((a) => a.priceRange));

  useEffect(() => {
    let result = artistsData;

    if (category) result = result.filter((a) => a.category === category);
    if (location) result = result.filter((a) => a.location === location);
    if (priceRange) result = result.filter((a) => a.priceRange === priceRange);

    setFiltered(result);
  }, [category, location, priceRange]);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Discover Performing Artists
        </h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 flex flex-wrap gap-4 justify-center">
          <select
            className="border rounded px-4 py-2 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-4 py-2 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-4 py-2 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price Ranges</option>
            {prices.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No artists match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                category={artist.category}
                priceRange={artist.priceRange}
                location={artist.location}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
