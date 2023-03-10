import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
// Exercise 5
const Users = () => {
    const [users, setUsers] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const defaultUrl = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(defaultUrl);
        if (response.ok) {
            setUsers(await response.json());
        } else {
            setError(
                'HTTP-Error: ' +
                    response.status +
                    ' oops. maybe server is down?'
            );
        }
    };
    return (
        <View>
            <Text style={styles.header}>
                {users ? 'List of Users' : 'Error!!'}
            </Text>
            {users ? (
                users?.map((user) => {
                    return (
                        <Text key={user.id}>
                            {user.id}. {user.name}
                        </Text>
                    );
                })
            ) : (
                <Text style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                    {error}
                </Text>
            )}
        </View>
    );
};

export default Users;

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
    },
});
