import { Button, Container, Flex } from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <Container className="py-4 fixed w-full top-0 z-50">
            <NavigationMenu.Root className="py-3 px-8 shadow-md bg-white rounded-4xl">
                <NavigationMenu.List>
                    <Flex gap="4" align="center" justify="between">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="font-bold">
                                <svg className="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
                                        stroke="#1d293d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>

                        <Flex gap="4">
                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-medium text-sm">Home</NavigationMenu.Link>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-medium text-sm">Schedule</NavigationMenu.Link>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-medium text-sm">Contact</NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </Flex>

                        <NavigationMenu.Item>
                            <Link to="/auth/signup">
                                <NavigationMenu.Link>
                                    <Button size="3">Sign up</Button>
                                </NavigationMenu.Link>
                            </Link>
                        </NavigationMenu.Item>
                    </Flex>
                </NavigationMenu.List>

            </NavigationMenu.Root>
        </Container>
    );
}


export default Navbar;