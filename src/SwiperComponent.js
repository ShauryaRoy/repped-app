import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { CartContext } from './CartContext'; // Ensure the CartContext is imported to handle cart actions

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Add more items here
];

const SwiperComponent = () => {
    const { addToCart } = useContext(CartContext); // Access addToCart function from the context

    return (
        <View style={styles.container}>
            <Swiper
                cards={items}
                renderCard={(card) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card.name}</Text>
                    </View>
                )}
                onSwipedLeft={() => {
                    console.log('Disliked item');
                }}
                onSwipedRight={() => {
                    console.log('Liked item');
                }}
                onSwipedTop={(index) => {
                    const item = items[index];
                    addToCart(item); // Add item to cart when swiped up
                }}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
    },
});

export default SwiperComponent;
