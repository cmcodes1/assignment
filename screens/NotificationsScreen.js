import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NotificationsScreen() {

    const statement = {
        sentence: '{0} Material Request',
        boldText: ['Category']
    };

    const applyBoldStyle = text => {
        let numberOfItemsAdded = 0;
        const result = text.sentence.split(/\{\d+\}/);
        text.boldText.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <Text style={{ fontWeight: 'bold' }}>{boldText}</Text>));
        return <Text>{result}</Text>;
    };

    var approvalsCards = [];
    for (let i = 1; i <= 2; i++) {
        approvalsCards.push(
            <View key={i}>
                <View style={styles.listItemContainer}>
                    <Text style={{ fontSize: 15, color: "black" }}>{applyBoldStyle(statement)}</Text>
                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>+91-9658745896</Text>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 20 }}>07/07/2020</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>₹50,200</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    var tasksCards = [];
    tasksCards.push(<View key={0}><Text style={{ fontSize: 20, marginLeft: 10 }}>23/06/2020</Text></View>);
    for (let i = 1; i <= 2; i++) {
        tasksCards.push(
            <View key={i}>
                <View style={styles.listItemContainer}>
                    <Text style={{ fontSize: 16, color: "black" }}>Booking ID: UWHYD000010403</Text>
                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", }}>6 Items</Text>
                    <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text style={{ fontSize: 16 }}>40101, Indu For...</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>₹50,200</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.header}>Notifications</Text>
            </View>

            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchText}
                    placeholder='Booking ID'
                />
                <View style={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} size={20} color="black" />
                </View>
            </View>

            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Text style={styles.subheading}>Approvals</Text>
            </View>

            <View style={styles.list}>
                {approvalsCards}
            </View>

            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Text style={styles.subheading}>Upcoming Tasks</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={tasksCards}
                renderItem={({ item, index }) => {
                    return (
                        <View>{item}</View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 20,
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 50,
        paddingHorizontal: 20,
        zIndex: 2,
    },
    searchText: {
        fontSize: 16,
        color: '#A6BCD0',
        paddingLeft: 10,
        alignItems: "flex-start"
    },
    searchIcon: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10
    },
    subheading: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
    },
    list: {
        width: '90%',
        margin: 10,
    },
    listItemContainer: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});