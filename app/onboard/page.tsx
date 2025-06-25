"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import { useState } from "react";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Tamil", "Punjabi"];
const feeRanges = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const [image, setImage] = useState<File | null>(null);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    if (image) console.log("Image file:", image.name);
    toast.success("Artist submitted successfully!");
    reset();
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen px-4 py-12 flex items-center justify-center">
  <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">

          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Artist Onboarding
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block font-medium mb-1">Bio</label>
              <textarea
                {...register("bio")}
                rows={4}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-1">Category</label>
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input type="checkbox" value={cat} {...register("category")} />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
              <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
            </div>

            {/* Languages */}
            <div>
              <label className="block font-medium mb-1">Languages Spoken</label>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <label key={lang} className="flex items-center gap-2">
                    <input type="checkbox" value={lang} {...register("languages")} />
                    <span className="text-sm">{lang}</span>
                  </label>
                ))}
              </div>
              <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
            </div>

            {/* Fee */}
            <div>
              <label className="block font-medium mb-1">Fee Range</label>
              <select
                {...register("fee")}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select fee range</option>
                {feeRanges.map((fee) => (
                  <option key={fee} value={fee}>
                    {fee}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                {...register("location")}
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
            </div>

            {/* Image */}
            <div>
              <label className="block font-medium mb-1">Profile Image (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
              {image && <p className="text-sm mt-1">Selected: {image.name}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-medium transition"
            >
              Submit Artist
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
