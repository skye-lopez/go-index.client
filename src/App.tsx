import {
    ChakraProvider,
    Text,
    Flex,
} from "@chakra-ui/react";

import theme from "./styles/theme";
import Header from "./components/Header";
import StaticDocs from "./components/StaticDocs";
import ApiDocs from "./components/ApiDocs";

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Flex
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                <Flex
                    width="100%"
                    maxWidth="900px"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Header />
                    <ApiDocs />
                    <StaticDocs />
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}
