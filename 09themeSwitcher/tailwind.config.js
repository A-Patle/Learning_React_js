/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // ✅ Enables class-based dark mode
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Ensures Tailwind scans the correct files
    theme: {
      extend: {},
    },
    plugins: [],
  };
  