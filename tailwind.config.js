/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          green: "hsl(75, 94%, 57%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 20%)",
          'dark-grey': "hsl(0, 0%, 12%)",
          'off-black': "hsl(0, 0%, 8%)",
        }
      },
      fontSize:{
        paragraph: "14px",
      },
      fontFamily: {
        inter: ["Inter", "Sans"],
      },
      fontWeight: {
        regular: "400",
        medium: "600",
        bold: "700",
      }
    },
  },
  plugins: [],
}

