// CartScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10 }}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text>Your cart is empty</Text>
            )}
        </View>
    );
};

export default CartScreen;
