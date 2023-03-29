import { extendTheme } from "@chakra-ui/react"
import messageboard_class from './messageboard/MainBoardStyle'

// Custom theme 1
const customTheme1 = extendTheme({
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

// Merge the themes
const mergedTheme = extendTheme(customTheme1, messageboard_class);

export default mergedTheme;
