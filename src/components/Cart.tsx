import { useCart } from '../context/CartContext';
import { Flex, Heading, Text, Button, Separator, Select, Skeleton } from '@radix-ui/themes';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, TrashIcon } from '@radix-ui/react-icons';
import dayjs from 'dayjs';

const Cart = () => {
    const { cartItems, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="max-w-6xl w-full px-6 mx-auto py-16">
                <Flex direction="column" align="center" gap="4">
                    <Heading size="6">Your Cart</Heading>
                    <Text color="gray">Your cart is empty</Text>
                    <Button variant="outline">Continue Shopping</Button>
                </Flex>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row py-8 max-w-6xl w-full px-6 mx-auto h-[calc(100vh)]">
            <Flex direction="column" className='overflow-y-hidden flex-1'>
                <Flex direction="column" gap="4">
                    <Heading size="6">
                        Shopping Cart <Text size="2" color="blue">{getTotalItems()} Items</Text>
                    </Heading>

                    <Flex direction="column" gap="1">
                        <Flex gap="1" align="center">
                            <Heading size="2" weight="regular">Subtotal</Heading>
                            <Text size="3" weight="bold">${getTotalPrice().toFixed(2)}</Text>
                        </Flex>

                        <Flex>
                            <Button style={{ width: '100%' }}>Proceed to Checkout</Button>
                        </Flex>
                    </Flex>

                    <Separator />
                </Flex>

                <Flex direction="column" className='flex-1 overflow-y-auto'>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <Flex gap="4" className="border-b border-gray-200 pb-4 mb-4">
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
                    <Button variant="ghost">
                        <ArrowLeftIcon width="16" height="16" />
                        Continue Shopping
                    </Button>
                </div>
            </Flex>

            {/* <div className="w-full lg:w-80 bg-gray-50 p-6 border border-gray-200 rounded-lg">
                <Heading size="5" mb="4">Order Summary</Heading>
                <Separator size="4" />

                <Flex direction="column" gap="3" mt="4">
                    <Flex justify="between">
                        <Text>Price</Text>
                        <Text>${getTotalPrice()}</Text>
                    </Flex>
                    <Flex justify="between">
                        <Text>Tax (8%)</Text>
                        <Text>${(getTotalPrice() * 0.08).toFixed(2)}</Text>
                    </Flex>
                    <Separator size="4" />
                    <Flex justify="between" className="text-lg font-medium">
                        <Text>Total Amount:</Text>
                        <Text>${(getTotalPrice() * 1.08).toFixed(2)}</Text>
                    </Flex>
                </Flex>

                <Flex className="mt-6">
                    <Button className="w-full" size="3">
                        Proceed to Checkout
                    </Button>
                </Flex>
            </div> */}
        </div>
    );
};

export default Cart;