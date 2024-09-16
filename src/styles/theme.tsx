import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/open-sans";

const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            "html, body": {
                color: props.colorMode === "dark" ? "white" : "black",
                background: props.colorMode === "dark" ? "#333333" : "whitesmoke",
            },
        }),
    },
    fonts: {
        heading: `'Open Sans Variable', sans-serif`,
        body: `'Open Sans Variable', sans-serif`,
    },
})

export default theme
