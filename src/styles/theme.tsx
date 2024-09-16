import { extendTheme } from "@chakra-ui/react";
import "@fontsource/basic";

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
        heading: `"Basic", sans-serif`,
        body: `"Basic", sans-serif`,
    },
})

export default theme
