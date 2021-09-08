import Typography from "typography"
import './reset.scss';


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Inter",
      styles: [100, 200, 300, 400, 500, 600, 700, 800, 900],

    }
  ],
  headerFontFamily: [
    "Inter",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Inter", "serif"],
})

export default typography