/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      colors: {
        cream: "#FAF7F2",
        parchment: "#F3EDE2",
        espresso: "#1C1008",
        brown: {
          DEFAULT: "#3D2B1F",
          mid: "#6B4C3B",
          light: "#A07860",
        },
        sand: {
          DEFAULT: "#C8B49A",
          light: "#E0D4C4",
        },
        terra: {
          DEFAULT: "#C4622D",
          light: "#E8855A",
          pale: "#FAEADE",
        },
        amber: {
          DEFAULT: "#D4922A",
          light: "#F2BC6A",
          pale: "#FDF3DF",
        },
        sage: {
          DEFAULT: "#5C7A62",
          light: "#8AA88F",
          pale: "#EBF2EC",
        },
      },
    },
    fontFamily: {
      display: ['"Playfair Display"', "Georgia", "serif"],
      body: ["Outfit", "sans-serif"],
      sans: ["Outfit", "sans-serif"],
      "league-spartan": ["League Spartan", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },

    borderRadius: {
      card: "16px",
    },
    boxShadow: {
      card: "0 6px 24px rgba(28,16,8,0.10)",
      "card-hover":
        "0 12px 36px rgba(28,16,8,0.14), 0 0 0 3px rgba(196,98,45,0.05)",
      filter: "0 16px 48px rgba(28,16,8,0.14), 0 0 0 4px rgba(196,98,45,0.04)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "32px",
        xl: "48px",
      },
    },
  },
  plugins: [],
};
