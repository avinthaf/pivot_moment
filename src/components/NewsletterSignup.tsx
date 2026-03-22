import { Container, Flex, Heading, Text, TextField, Button } from "@radix-ui/themes";

const NewsletterSignup = () => {
    return (
        <Container p="8" style={{ backgroundColor: 'var(--accent-9)' }}>
            <Flex direction="column" align="center" justify="center">
                <Flex className="max-w-5xl w-full"  gap="6">
                    <Flex direction="column" gap="4" className="max-w-md w-full">
                        <Heading size="7" className="text-white">Subscribe to our newsletter</Heading>
                        <Text className="text-white/80">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
                        </Text>
                        <Flex gap="3" mt="4">
                            <TextField.Root
                                placeholder="Enter your email"
                                className="flex-1 max-w-64"
                                size="3"
                            />
                            <Button size="3" style={{ backgroundColor: 'var(--accent-12)', color: '#FFF' }}>
                                Subscribe
                            </Button>
                        </Flex>
                    </Flex>

                    <Flex gap="8" justify="center" wrap="wrap">
                        <Flex direction="column" gap="3" className="max-w-48">
                            <Flex align="center" gap="3">
                                <div className="bg-white/20 p-2.5 rounded-md">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981M6.417 3.667V2.292m9.167 1.375V2.292m4.125 5.958H9.854m-8.02 0h3.552" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <Heading size="4" className="text-white">Weekly articles</Heading>
                            </Flex>
                            <Text className="text-white/80 text-sm">
                                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                            </Text>
                        </Flex>

                        <Flex direction="column" gap="3" className="max-w-48">
                            <Flex align="center" gap="3">
                                <div className="bg-white/20 p-2.5 rounded-md">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <Heading size="4" className="text-white">No spam</Heading>
                            </Flex>
                            <Text className="text-white/80 text-sm">
                                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default NewsletterSignup;