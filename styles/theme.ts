import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#47585B",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#999999",
            "200": "#B3B5C6",
            "100": "#DADADA",
            "50": "#F5F8FA",
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "gray.600"
            }
        }
    }
})