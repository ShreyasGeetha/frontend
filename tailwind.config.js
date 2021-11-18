module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#009900',
        headerComplimentary: '#1FBF1F',
        primary: "#ff4800",
        login: '#fee500',
        focus: "#2B802B",
        twitter: "#1DA1F2",
        blue: {
          450: "#5F99F7",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
