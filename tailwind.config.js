/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Or if using `src` directory:
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'font-awesome': ["'Font Awesome 6 Brands'"],
      },
      colors: {
        "yellow-ideia": '#FFE900',
        "dark-blue": '#072833', 
        "dark-red-pantone": '#890404',
        "active-color": "#00A3E0",
        "sidebar-tblue": "rgb(230 249 255)",
        "sidebar-bg-active-color": "#00A3E0",
        "custom-icon-bg": "#145870",
        "body": "#f3f4f6",
        "blue-link": "#003C71",
        "primary-yellow": "#FFE900"
      },
      width: {
        'sidebar': '16rem',
        'main': 'calc(100% - 16rem)',
        'auth-container': 'min(95%,650px)',
      },
      inset: {
        'sidebar': '16rem',
      },
    },
  },
  plugins: [],
}
