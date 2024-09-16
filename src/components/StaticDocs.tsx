import {
    Text,
    Flex,
    UnorderedList,
    ListItem,
    Link,
    Code,
} from "@chakra-ui/react";

export default function StaticDocs() {
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
                marginBottom="5px"
                textAlign="center"
            >
                Static files
            </Text>
            <Text>
                Static <Code>.json</Code> files of the index. These files are updated every 24hrs. There are no historical versions of the files.
            </Text>
            <UnorderedList>
                <ListItem
                    margin="10px"
                >
                    <Flex>
                        <Link
                            marginRight="5px"
                        >
                            <Code colorScheme="cyan">packages.json</Code>
                        </Link>
                        List of all package urls.
                    </Flex>
                    <Flex
                        margin="10px 0px"
                        flexDirection="column"
                        alignItems="start"
                    >
                        <Text
                            marginRight="10px"
                            fontSize="12px"
                        >
                            format exmaple:
                        </Text>
                        <Code colorScheme="yellow">
                            ["github.com/lib/pq", "github.com/spf13/cobra", ...]
                        </Code>
                    </Flex>
                </ListItem>
                <ListItem
                    margin="10px"
                >
                    <Flex>
                        <Link
                            marginRight="5px"
                        >
                            <Code colorScheme="cyan">versions.json</Code>
                        </Link>
                        List of all package urls with their respective versions
                    </Flex>
                    <Flex
                        margin="10px 0px"
                        flexDirection="column"
                        alignItems="start"
                    >
                        <Text
                            marginRight="10px"
                            fontSize="12px"
                        >
                            format example:
                        </Text>
                        <Code colorScheme="yellow">
                            {`[{"url": "github.com/lib/pq", "versions": [{"time": "2019-04-10T19:08:52.997264Z", "version": "v0.0.0-20180627171509-e514e69ffb8b"}, ...] }, ...]`}
                        </Code>
                    </Flex>
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}
