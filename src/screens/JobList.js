import React from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useSelector} from 'react-redux';

const JobList = (props) => {
  //getting jobPost from redux
  const data = useSelector((state) => state.jobPost);

  //getting name and email from naviation params
  const name = props.route.params.name;
  const email = props.route.params.email;

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>Job Post</Text>
        <TouchableOpacity
          style={styles.profilebtn}
          onPress={() =>
            props.navigation.navigate('Profile', {
              name,
              email,
            })
          }>
          <Text style={styles.profileTxt}>Go To Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <View style={styles.card}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.paragraph}>{item.description}</Text>
                  <Text style={styles.footer}>{item.postedBy}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    // backgroundColor: '#d8f3dc',
  },
  main: {
    color: '#d8f3dc',
  },
  card: {
    margin: 5,
    padding: 10,
  },
  title: {
    // flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 15,
  },
  footer: {
    paddingTop: 10,
    fontSize: 10,
  },
  header: {
    backgroundColor: '#354f52',
    height: 40,
    flexDirection: 'row',
    // alignContent: 'space-between',
  },
  jobTitle: {
    fontSize: 25,
    paddingLeft: 100,
    fontWeight: 'bold',
    color: '#cad2c5',
  },
  profilebtn: {
    borderWidth: 2,
    borderColor: '#84a98c',
    marginTop: 10,
    marginLeft: 60,
    backgroundColor: '#84a98c',
  },
  profileTxt: {
    color: 'white',
  },
});

export default JobList;
