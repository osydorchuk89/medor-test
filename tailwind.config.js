/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            white: "#ffffff",
            red: "#b91c1c",
            black: "#000000",
            green: "#00ad22",
            "light-blue": "#2b78be",
            "pale-blue": "#2b78bd",
            "dark-blue": "#00335c",
        },
        extend: {},
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
        },
    ],
};
