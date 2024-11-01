import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}


// import React from 'react';
// import { View } from 'react-native';
// import LoginScreen from './login'; // Assuming login.jsx is in the same directory
// import { styled } from 'nativewind';

// const StyledView = styled(View);

// const Layout = () => {
//     return (
//         <StyledView className="flex-1 bg-gray-100 items-center justify-center">
//             <LoginScreen />
//         </StyledView>
//     );
// };

// export default Layout;
