// SwiperComponent.js
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const SwiperComponent = () => {
    const [cards, setCards] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);

    const handleSwipeRight = (cardIndex) => {
        console.log('Liked:', cards[cardIndex].name);
        // Handle like logic here
    };

    const handleSwipeLeft = (cardIndex) => {
        console.log('Disliked:', cards[cardIndex].name);
        // Handle dislike logic here
    };

    const handleSwipeUp = (cardIndex) => {
        console.log('Added to Cart:', cards[cardIndex].name);
        // Handle add to cart logic here
    };

    return (
        <View style={styles.container}>
            <Swiper
                cards={cards}
                renderCard={(card) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card.name}</Text>
                    </View>
                )}
                onSwipedRight={(cardIndex) => handleSwipeRight(cardIndex)}
                onSwipedLeft={(cardIndex) => handleSwipeLeft(cardIndex)}
                onSwipedTop={(cardIndex) => handleSwipeUp(cardIndex)}
                backgroundColor="white"
                cardIndex={0}
                stackSize={3}
                verticalSwipe={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        width: 300,
        height: 400,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default SwiperComponent;
s