import { useCart } from '../context/CartContext';
import { Flex, Heading, Text, Button, Select, Skeleton } from '@radix-ui/themes';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, TrashIcon } from '@radix-ui/react-icons';
import dayjs from 'dayjs';
import { Link } from 'react-router';

const Cart = () => {
    const { cartItems, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="max-w-6xl w-full px-6 mx-auto py-16">
                <Flex direction="column" align="center" gap="4">
                    <Heading size={{
                        initial: "6",
                        md: "8"
                    }}>Shopping Cart</Heading>
                    <Text color="gray">Your cart is empty</Text>
                    <Button variant="outline">Continue Shopping</Button>
                </Flex>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row py-8 max-w-6xl w-full px-6 mx-auto h-[calc(100vh)]">
            <Flex direction="column" className='overflow-y-hidden flex-1 lg:flex-initial lg:w-2/3'>
                <Flex direction="column" gap="4" className="mb-4">
                    <Heading size={{
                        initial: "6",
                        md: "8"
                    }} style={{ marginBottom: '12px' }}>
                        Shopping Cart
                    </Heading>

                    <div className="block lg:hidden space-y-1">
                        <Flex gap="1" align="center">
                            <Heading size="2" weight="regular">Subtotal ({getTotalItems()} Items)</Heading>
                            <Text size="3" weight="bold">${getTotalPrice().toFixed(2)}</Text>
                        </Flex>

                        <Flex>
                            <Button size="3" style={{ width: '100%' }}>Proceed to Checkout</Button>
                        </Flex>
                    </div>

                    {/* <Separator className="hidden lg:block" /> */}
                </Flex>

                <Flex direction="column" className='flex-1 overflow-y-auto'>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <Flex gap="4" className="mb-6">
                                <Skeleton width="100px" height="100px" />

                                <Flex direction="column">
                                    <Flex direction="column">
                                        <Text size="2">{item?.title ?? ""}</Text>
                                        <Flex gap="4">
                                            <Flex gap="1" align="center">
                                                <CalendarIcon />
                                                <Text size="1">{item?.date ? dayjs(item.date).format('DD.MM.YY') : ""}</Text>
                                            </Flex>
                                            <Flex gap="1" align="center">
                                                <ClockIcon />
                                                <Text size="1">{item?.time ? item?.time.split('-')[0] : ""}</Text>
                                            </Flex>

                                        </Flex>
                                        <Text size="4" weight="bold">$19.99</Text>
                                    </Flex>
                                    <Flex className="mt-auto" align="center" gap="4">
                                        <Select.Root
                                            size="2"
                                            value={item.quantity.toString()}
                                            onValueChange={(value) => updateQuantity(item.id, parseInt(value))}
                                        >
                                            <Select.Trigger />
                                            <Select.Content>
                                                {[1, 2, 3, 4, 5].map(num => (
                                                    <Select.Item key={num} value={num.toString()}>
                                                        {num}
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Root>

                                        <Button variant="ghost" onClick={() => removeItem(item.id)}>
                                            <TrashIcon color="gray" width="18" height="18" />
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </div>
                    ))}
                </Flex>
                <div className="mt-6">
                    <Link to="/">
                        <Button variant="ghost">
                            <ArrowLeftIcon width="16" height="16" />
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </Flex>

            {/* Desktop Right Sidebar */}
            <div className="hidden lg:block lg:w-1/3 lg:pl-8">
                <Flex direction="column" className="sticky top-[80px]">
                        <Flex direction="column" gap="3" className="border p-6 bg-gray-50 rounded-lg border-gray-200">
                            <Flex justify="between">
                                <Text size="2">Subtotal ({getTotalItems()} Items)</Text>
                                <Text size="3" weight="bold">${getTotalPrice().toFixed(2)}</Text>
                            </Flex>

                            <Link to="/checkout">
                                <Button size="3" className="w-full mt-4">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </Flex>
                </Flex>
            </div>
        </div >
    );
};

export default Cart;