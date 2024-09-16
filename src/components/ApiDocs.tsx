import {
    Flex,
    Text,
    Code,
} from "@chakra-ui/react";

export default function ApiDocs() {
    return (
        <Flex
            background="white"
            width="100%"
            padding="15px"
            borderRadius="10px"
            margin="20px 0px"
            flexDirection="column"
        >
            <Text
                as="b"
                fontSize="xl"
                marginBottom="10px"
                textAlign="center"
            >
                API Reference
            </Text>
            <Text
                as="b"
            >
                <Code
                    fontSize="18px"
                >
                    /search
                </Code>

            </Text>
        </Flex>
    );
}
