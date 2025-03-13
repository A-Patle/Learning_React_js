import React from "react";
import useTheme from "../contexts/Theme"; // ✅ Import Theme Context

export default function Card() {
  const { themeMode } = useTheme(); // ✅ Get theme mode state

  return (
    <div
      className={`w-full border rounded-lg shadow p-5 transition ${
        themeMode === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">⭐⭐⭐⭐⭐ 4.0</div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">$599</span>
          <a
            href="/"
            className={`text-white px-5 py-2.5 rounded-lg text-sm ${
              themeMode === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
