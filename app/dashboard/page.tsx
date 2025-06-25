"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

const mockSubmissions = [
  {
    name: "DJ Blaze",
    category: "DJ",
    location: "Mumbai",
    fee: "₹10,000 - ₹25,000",
  },
  {
    name: "Sana Ali",
    category: "Speaker",
    location: "Hyderabad",
    fee: "₹12,000 - ₹18,000",
  },
];

export default function DashboardPage() {
  const [submissions] = useState(mockSubmissions);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Manager Dashboard
          </h1>

          <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
            {submissions.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                📭 No artist submissions yet.
              </p>
            ) : (
              <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">City</th>
                    <th className="p-3">Fee</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((artist, idx) => (
                    <tr
                      key={idx}
                      className="bg-white even:bg-gray-50 hover:shadow transition"
                    >
                      <td className="p-3 font-medium">{artist.name}</td>
                      <td className="p-3">{artist.category}</td>
                      <td className="p-3">{artist.location}</td>
                      <td className="p-3">{artist.fee}</td>
                      <td className="p-3">
                        <button className="text-blue-600 hover:underline text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
