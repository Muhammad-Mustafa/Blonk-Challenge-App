import React from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Profile = (props) => {
  const name = props.route.params.name;
  const email = props.route.params.email;

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.logoutbtn}
          onPress={() => props.navigation.popToTop()}>
          <Text style={styles.logoutbtnTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.name}>Full Name: {name} </Text>
          <Text style={styles.name}>Email : {email}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: '#cad2c5',
  },
  header: {
    backgroundColor: '#0d3b66',
    height: 40,
    flexDirection: 'row',
    // alignContent: 'space-between',
  },
  jobTitle: {
    fontSize: 25,
    marginLeft: 40,
    paddingLeft: 100,
    fontWeight: 'bold',
    color: '#faf0ca',
  },
  logoutbtn: {
    backgroundColor: '#ee964b',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: 10,
    marginLeft: 80,
  },
  logoutbtnTxt: {
    // color: '#ee964b',
  },
  card: {
    backgroundColor: '#84a98c',
    margin: 15,
    marginTop: 150,
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default Profile;
