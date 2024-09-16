import {
    Text,
    Flex,
} from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
            width="100%"
            alignItems="center"
            flexDirection="column"
            padding="25px"
            background="white"
            borderRadius="10px"
            margin="10px 0px"
        >
            <Text
                fontSize="3xl"
                fontWeight="600"
            >
                Go Index
            </Text>
            <Text
                marginLeft="10px"
                fontSize="14px"
            >
                Public API and Static Dist of the golang index.
            </Text>
        </Flex>
    )
}
