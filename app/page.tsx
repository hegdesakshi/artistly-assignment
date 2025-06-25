import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const categories = [
    {
      title: "Singers",
      image: "/icons/singer.png",
    },
    {
      title: "Dancers",
      image: "/icons/dancer.png",
    },
    {
      title: "Speakers",
      image: "/icons/speaker.png",
    },
    {
      title: "DJs",
      image: "/icons/dj.png",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-white to-blue-50 min-h-screen">
        {/* Hero */}
        <section className="text-center py-20 px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Welcome to <span className="text-blue-600">Artistly.com</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Your all-in-one platform to discover, explore, and book performing artists.
          </p>
          <a
            href="/artists"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Explore Artists
          </a>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
