import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation()

  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  var hour = ('0' + new Date().getHours().toString()).slice(-2);
  var minutes = ('0' + new Date().getMinutes().toString()).slice(-2);

  var cards = [];
  for (let i = 1; i <= 3; i++) {
    cards.push(
      <View key={i}>
        <View style={styles.listItemContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Material Name</Text>
          <Text style={{ marginTop: 10, fontSize: 16 }}>Brand Name{"\n\n"}Specification</Text>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View style={{ alignItems: "flex-start" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>40 kgs</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>₹24,000</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 20 }}>Site Engineer Name</Text>
        </View>
        <View style={styles.headerIcon}>
          <FontAwesomeIcon icon={faPhone} size={25} color="black" />
        </View>
      </View>

      <View>
        <Text style={styles.date}>{date}{"/"}{++month}{"/"}{year}</Text>
        <Text style={styles.time}>{hour}{":"}{minutes}</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 20, paddingLeft: 30 }}>Address</Text>
        </View>
        <View style={styles.headerIcon}>
          <FontAwesomeIcon icon={faShareAlt} size={25} color="black" />
        </View>
      </View>

      <View style={styles.list}>
        {cards}
      </View>

      <View style={{ width: '85%', flexDirection: "row", margin: 20 }}>
        <View style={{ alignItems: "flex-start" }}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "limegreen" }}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Cancel</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: "row",
    marginTop: 40,
  },
  headerText: {
    flex: 1.5,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  headerIcon: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
  time: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    flex: 1,
    width: '90%',
    marginTop: 20,
  },
  listItemContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});