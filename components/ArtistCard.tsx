interface ArtistCardProps {
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

export default function ArtistCard({
  name,
  category,
  priceRange,
  location,
}: ArtistCardProps) {
  return (
    <div className="border rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-800 mt-2 font-semibold">{priceRange}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">
        Ask for Quote
      </button>
    </div>
  );
}
