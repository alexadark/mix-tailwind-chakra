const colors = require("tailwindcss/colors")

const {
  blueGray,
  coolGray,
  trueGray,
  warmGray,
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
  emerald,
  teal,
  cyan,
  lightBlue,
  blue,
  indigo,
  violet,
  purple,
  fuchsia,
  pink,
  rose,
  gray,
} = colors

//palette
const light = gray[100],
  ultraLight = gray[50],
  dark = gray[700],
  ultraDark = gray[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = gray[200],
  bg = ultraLight,
  text = ultraDark

module.exports = {
  ...colors,
  light,
  ultraLight,
  ultraDark,
  dark,
  primary,
  secondary,
  highlight,
  mutted,
  bg,
  text,
}
