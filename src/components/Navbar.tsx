import { Button, Container, Flex, Dialog, IconButton } from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import { HamburgerMenuIcon, Cross1Icon, TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container className="py-4 fixed top-0 z-50 w-auto md:w-full max-w-none">
            <NavigationMenu.Root className="py-3 px-4 md:px-8 shadow-md bg-white rounded-4xl">
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

                        {/* Desktop Navigation */}
                        <Flex gap="4" className="hidden lg:flex" style={{ display: 'none' }} data-desktop-nav>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-bold text-sm">Home</NavigationMenu.Link>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-bold text-sm">Schedule</NavigationMenu.Link>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="font-bold text-sm">Contact</NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </Flex>



                        {/* Desktop Socials & Sign Up Button */}
                        <Flex gap="4" align="center" className="hidden lg:block">
                            <Flex gap="2" direction="row">
                                <Link to="/" className="hidden lg:block">
                                    <TwitterLogoIcon />
                                </Link>
                                <Link to="/" className="hidden lg:block">
                                    <InstagramLogoIcon />
                                </Link>
                            </Flex>
                            <NavigationMenu.Item style={{ display: 'none' }} data-desktop-signup>
                                <Link to="/auth/signup">
                                    <NavigationMenu.Link>
                                        <Button size="3">Sign up</Button>
                                    </NavigationMenu.Link>
                                </Link>
                            </NavigationMenu.Item>
                        </Flex>

                        {/* Mobile Drawer Menu */}
                        <NavigationMenu.Item className="lg:hidden">
                            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                                <Dialog.Trigger>
                                    <button className="p-2" aria-label="Menu">
                                        <HamburgerMenuIcon width="24" height="24" />
                                    </button>
                                </Dialog.Trigger>

                                <Dialog.Content
                                    width="100vw"
                                    height="100vh"
                                    maxWidth="100vw"
                                    maxHeight="100vh"
                                    style={{
                                        position: 'fixed',
                                        top: '0',
                                        left: '0',
                                        borderRadius: '0',
                                        padding: '0',
                                        backgroundColor: 'white',
                                        transform: 'translateX(0)',
                                        animation: 'slideInLeft 0.3s ease-out'
                                    }}
                                    className="data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut"
                                >
                                    <div className="h-full flex flex-col">
                                        {/* Drawer Header */}
                                        <div className="flex justify-between items-center p-6 border-b">
                                            <Dialog.Close>
                                                <button className="p-2" aria-label="Close menu">
                                                    <Cross1Icon width="24" height="24" />
                                                </button>
                                            </Dialog.Close>
                                            <div></div>
                                        </div>

                                        {/* Drawer Content */}
                                        <div className="flex-1 flex flex-col justify-center p-6">
                                            <nav className="space-y-8">
                                                <Flex direction="column" gap="4">
                                                    <Link to="/" onClick={() => setIsOpen(false)}>
                                                        <button className="text-3xl font-bold text-left hover:text-gray-600 transition-colors">
                                                            Home
                                                        </button>
                                                    </Link>

                                                    <Link to="/schedule" onClick={() => setIsOpen(false)}>
                                                        <button className="text-3xl font-bold text-left hover:text-gray-600 transition-colors">
                                                            Schedule
                                                        </button>
                                                    </Link>

                                                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                                                        <button className="text-3xl font-bold text-left hover:text-gray-600 transition-colors">
                                                            Contact
                                                        </button>
                                                    </Link>
                                                </Flex>
                                            </nav>

                                            {/* Mobile Socials */}
                                            <div className="mt-12">
                                                <Flex gap="4" justify="center">
                                                    <Link to="/" onClick={() => setIsOpen(false)}>
                                                        <TwitterLogoIcon width="24" height="24" />
                                                    </Link>
                                                    <Link to="/" onClick={() => setIsOpen(false)}>
                                                        <InstagramLogoIcon width="24" height="24" />
                                                    </Link>
                                                </Flex>
                                            </div>

                                            <div className="mt-16">
                                                <Link to="/auth/signup" onClick={() => setIsOpen(false)}>
                                                    <Button size="4" className="w-full">
                                                        Sign up
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Root>
                        </NavigationMenu.Item>
                    </Flex>
                </NavigationMenu.List>

            </NavigationMenu.Root>
        </Container>
    );
}


export default Navbar;