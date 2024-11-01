// import React from 'react';
// import { View, Text } from 'react-native';

// export default function Index() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Welcome to the Home Screen</Text>
//         </View>
//     );
// }


import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Index() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://192.168.1.7:3000/products');
                setCards(Array.isArray(response.data) ? response.data : "erroe");
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log(`Removing: ${nameToDelete} to the ${direction}`);
    };

    const outOfFrame = (name) => {
        console.log(`${name} left the screen!`);
    };

    return (
        <StyledView className="flex-1 items-center justify-center bg-white">
            {cards.length > 0 ? (
                cards.map((card) => {
                    console.log(card.img[0]);

                    return (
                        <View key={card.id} style={styles.cardContainer}>
                            <TinderCard
                                onSwipe={(dir) => swiped(dir, card.name)}
                                onCardLeftScreen={() => outOfFrame(card.name)}
                                preventSwipe={['up', 'down']}
                            >
                                <StyledView className="w-72 h-96 bg-white rounded-2xl shadow-lg items-center justify-end pb-5">
                                    <Image source={{ uri: card.img[0], width: 400, height: 600 }} />

                                    <StyledText className="text-lg font-bold text-gray-800">{card.name}</StyledText>
                                    <StyledText className="text-base text-gray-600">Price: ₹{card.price}</StyledText>
                                    <StyledText className="text-sm text-gray-400">Discount: {card.discount}%</StyledText>
                                    <StyledText className="text-sm text-gray-400">Seller: {card.seller}</StyledText>
                                </StyledView>
                            </TinderCard>
                        </View>
                    );
                })
            ) : (
                <StyledText className="text-center text-lg text-gray-500">Loading cards...</StyledText>
            )}
        </StyledView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
