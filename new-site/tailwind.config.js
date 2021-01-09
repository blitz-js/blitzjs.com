const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")
const { toRgba } = require("tailwindcss/lib/util/withAlphaVariable")

module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      "off-black": "#191919",
      "off-white": "#EEF2F7",
      white: "#FFF",

      amber: colors.amber,
      blue: {
        ...colors.blue,
        light: "#D5DEE9",
        mid: "#BCC9DC",
        primary: "#A7B6CE",
        dark: "#7B96BC",
        gradient: {
          white: "#FEFDFF",
          "light-blue": "#CDABF8",
        },
      },
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.coolGray,
      green: colors.green,
      indigo: colors.indigo,
      "light-blue": colors.lightBlue,
      lime: colors.lime,
      orange: {
        ...colors.orange,
        1000: "#4a2008",
      },
      pink: {
        ...colors.pink,
        1000: "#460d25",
      },
      purple: {
        ...colors.purple,
        light: "#6700EB",
        mid: "#5600C2",
        primary: "#45009D",
        dark: "#34017B",
        "off-black": "#1F084E",
      },
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,

      code: {
        block: "#F9F5FE",
        punctuation: "#A1E8FF",
        tag: "#D58FFF",
        "attr-name": "#4BD0FB",
        "attr-value": "#A2F679",
        string: "#A2F679",
        highlight: "rgba(134, 239, 172, 0.25)",
      },

      supplementary: {
        yellow: "#FDEA69",
        blue: "#69C6FD",
        red: "#FF003D",
      },
    },
    fontSize: {
      xs: ["0.8125rem", "1.1375rem"], // 13px
      sm: "0.875rem", // 14px
      base: ["0.9375rem", "1.375rem"], // 15px
      lg: ["1.0625rem", "1.5625rem"], // 17px
      xl: ["1.25rem", "2rem"], // 20px
      "2xl": ["1.375rem", "1.875rem"], // 22px
      "3xl": ["1.875rem", "2.4375rem"], // 30px
      "4xl": "2.375rem", // 38px
      "5xl": ["2.8125rem", "3.125rem"], // 45px
      "6xl": ["3.875rem", "4.84375rem"], // 62px
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.gray.500"),
            "> :first-child": { marginTop: "-" },
            "> :last-child": { marginBottom: "-" },
            "&:first-child > :first-child": {
              marginTop: "0",
            },
            "&:last-child > :last-child": {
              marginBottom: "0",
            },
            "h1, h2": {
              letterSpacing: "-0.025em",
            },
            "h2, h3": {
              "scroll-margin-block": `${(70 + 40) / 16}rem`,
            },
            "ul > li": {
              paddingLeft: "1.5em",
            },
            "ul > li::before": {
              width: "0.75em",
              height: "0.125em",
              top: "calc(0.875em - 0.0625em)",
              left: 0,
              borderRadius: 0,
              backgroundColor: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.cyan.700"),
              fontWeight: theme("fontWeight.medium"),
              textDecoration: "none",
              boxShadow: theme("boxShadow.link"),
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: theme("colors.gray.900"),
              fontWeight: theme("fontWeight.medium"),
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            code: {
              fontWeight: "400",
              color: theme("colors.violet.600"),
            },
            "code::before": {
              // content: 'none',
            },
            "code::after": {
              // content: 'none',
            },
            pre: {
              backgroundColor: "-",
              color: theme("colors.white"),
              borderRadius: 0,
              marginTop: 0,
              marginBottom: 0,
            },
            table: {
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("fontSize.sm")[1].lineHeight,
            },
            thead: {
              color: theme("colors.gray.600"),
              borderBottomColor: theme("colors.gray.200"),
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: theme("fontWeight.semibold"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.200"),
            },
            "tbody tr:last-child": {
              borderBottomWidth: "1px",
            },
            "tbody code": {
              fontSize: theme("fontSize.xs")[0],
            },
          },
        },
      }),
      fontFamily: {
        secondary: ["Roboto", ...defaultTheme.fontFamily.sans],
        primary: ["Libre Franklin", defaultTheme.fontFamily.sans],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["Menlo", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: "Flow",
      },
      spacing: {
        18: "4.5rem",
        "15px": "0.9375rem",
        "23px": "1.4375rem",
        sandbox: "32rem",
        full: "100%",
      },
      width: {
        xl: "36rem",
        "7xl": "80rem",
      },
      maxWidth: {
        "4.5xl": "60rem",
        "8xl": "90rem",
      },
      maxHeight: (theme) => ({
        sm: "30rem",
        "(screen-18)": `calc(100vh - ${theme("spacing.18")})`,
      }),
      boxShadow: {
        px: "0 0 0 1px rgba(0, 0, 0, 0.5)",
        link: "inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)",
      },
      keyframes: {
        "flash-code": {
          "0%": { backgroundColor: "rgba(134, 239, 172, 0.25)" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        "flash-code": "flash-code 1s forwards",
        "flash-code-slow": "flash-code 2s forwards",
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      transitionDuration: {
        1500: "1.5s",
      },
      backgroundImage: {
        squiggle: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23fbbf24'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
      },
      scale: {
        80: "0.8",
      },
      skew: {
        "-20": "-20deg",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      borderRadius: {
        "2xl": "1.56rem",
        "3xl": "3rem",
        "4xl": "6.75rem",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "even", "active"],
      borderWidth: ["first", "last", "hover", "focus"],
      cursor: ["active"],
      textColor: ["group-focus"],
      ringWidth: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
      ringColor: ["focus-visible"],
      ringOpacity: ["focus-visible"],
      rotate: ["first", "last", "odd", "even"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities, theme }) {
      const shadows = theme("boxShadow")
      addUtilities(
        Object.keys(shadows).reduce(
          (utils, key) => ({
            ...utils,
            [`.text-shadow${key === "DEFAULT" ? "" : `-${key}`}`]: {
              textShadow: shadows[key].replace(
                /([0-9]+(px)? [0-9]+(px)? [0-9]+(px)?) [0-9]+(px)?/g,
                "$1"
              ),
            },
          }),
          {}
        )
      )
    },
    function ({ addUtilities, theme }) {
      const utilities = {
        ".bg-stripes": {
          backgroundImage:
            "linear-gradient(45deg, var(--stripes-color) 12.50%, transparent 12.50%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.50%, transparent 62.50%, transparent 100%)",
          backgroundSize: "5.66px 5.66px",
        },
      }

      const addColor = (name, color) =>
        (utilities[`.bg-stripes-${name}`] = { "--stripes-color": color })

      const colors = flattenColorPalette(theme("backgroundColor"))
      for (let name in colors) {
        try {
          const [r, g, b, a] = toRgba(colors[name])
          if (a !== undefined) {
            addColor(name, colors[name])
          } else {
            addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`)
          }
        } catch (_) {
          addColor(name, colors[name])
        }
      }

      addUtilities(utilities)
    },
  ],
}
