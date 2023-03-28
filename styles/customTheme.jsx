// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const myCustomTheme = extendTheme({
  colors: {
    brand: {
        50: "#ffffff",
        100: "#7289da",
        200: "#424549",
        300: "#36393e",
        400: "#282b30",
        500: "#1e2124",
    },
  },
})

export default myCustomTheme;