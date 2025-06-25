interface CategoryCardProps {
  title: string;
  image?: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow hover:shadow-lg hover:scale-105 transition-transform duration-200 text-center">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain mx-auto mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
