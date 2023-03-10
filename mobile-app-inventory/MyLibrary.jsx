import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

const MyLibrary = () => {
    const [bookTitle, setBookTitle] = useState();
    const [bookAuthor, setBookAuthor] = useState();
    const [bookDetails, setBookDetails] = useState([]);

    const handlePress = () => {
        setBookDetails((prevDetails) => [
            ...prevDetails,
            `${bookTitle}\t${bookAuthor}`,
        ]);
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(title) => setBookTitle(title)}
            />
            <TextInput
                style={styles.input}
                onChangeText={(author) => setBookAuthor(author)}
            />

            <TouchableOpacity
                onPress={handlePress}
                style={{
                    backgroundColor: '#ef4444',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                <Text
                    style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <View>
                {bookDetails.map((book) => (
                    <View style={styles.list}>
                        <Text>{book}</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    backgroundColor: '#ef4444',
                                    color: '#f9fafb',
                                }}
                            >
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default MyLibrary;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
