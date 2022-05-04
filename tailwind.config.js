module.exports = {
    content: ["./public/*.html"],
    theme: {
        extend: {
            colors: {
                "dark-blue": {
                    300: "#2857ad",
                    500: "#2b477a",
                    900: "#202d45",
                },

                "neon-green": "#39FF14",
            },

            backgroundImage: {
                "main-bg": "url('../assets/images/main-bg.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
