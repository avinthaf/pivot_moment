import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    // Add any other properties your cart items might need
    [key: string]: any;
}

interface CartContextType {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
    addItem: (item: Omit<CartItem, 'quantity'>) => Promise<void>;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    // Default cart items for testing
    const defaultCartItems: CartItem[] = [
        // {
        //     id: '1',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // },
        //         {
        //     id: '2',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // },
        //         {
        //     id: '3',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // },
        //         {
        //     id: '4',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // },
        //         {
        //     id: '5',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // },
        //         {
        //     id: '6',
        //     title: 'Yoga',
        //     price: 25,
        //     quantity: 1,
        //     description: 'Morning yoga session',
        //     date: '2024-03-15',
        //     time: '10:00 AM - 11:00 AM',
        //     location: 'Studio A',
        //     instructor: 'Sarah Johnson'
        // }
    ];

    const [cartItems, setCartItems] = useState<CartItem[]>(defaultCartItems);

    const addItem = async (item: Omit<CartItem, 'quantity'>) => {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));

        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                // Item exists, update quantity
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } as CartItem
                        : cartItem
                );
            } else {
                // New item, add to cart with quantity 1
                return [...prevItems, { ...item, quantity: 1 } as CartItem];
            }
        });
    };

    const removeItem = (id: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const value: CartContextType = {
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};