import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Button} from 'native-base';

import {useSelector} from 'react-redux';

const Login = (props) => {
  //Getting state form redux
  const data = useSelector((state) => state.users);

  //state of the componenet
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  //handlerSubmit function which runs after the user press submit button
  const handelSubmit = () => {
    //reg is checking either the email is correct or not
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length < 13) {
      alert('Enter Valid Email');
    } else if (reg.test(email) === false && email.length >= 13) {
      alert('Invalid email format');
    } else if (password.length < 6) {
      alert('password must be 6 characters long');
    } else {
      data.map((item) => {
        if (item.email == email && item.password == password) {
          let email = item.email;
          let name = item.name;
          setStatus(!status);
          Alert.alert('Sucessfully Login', 'You are Login Sucessfully', [
            {
              text: 'OK',
              onPress: () =>
                props.navigation.navigate('JobList', {
                  name,
                  email,
                }),
            },
          ]);
          setEmail('');
          setPassword('');
        }
      });
      if (status) {
        alert('Wrong Email or Password');
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        // style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.heading}>Sign-In</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChange={(e) => setEmail(e.nativeEvent.text)}
                value={email}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChange={(e) => setPassword(e.nativeEvent.text)}
                value={password}
                secureTextEntry={true}
              />
            </View>

            <Button success block style={styles.button} onPress={handelSubmit}>
              <Text style={styles.loginTxt}> Login </Text>
            </Button>

            <TouchableOpacity
              style={styles.button1}
              onPress={() => props.navigation.goBack()}>
              <Text>Don't have an Account?</Text>
              <Text style={styles.register}> Register</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  heading: {
    color: '#f1faee',
    backgroundColor: '#1d3557',
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  form: {
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#457b9d',
    paddingLeft: 4,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#457b9d',
    marginTop: 20,
    marginHorizontal: 20,
  },
  loginTxt: {
    color: '#f1faee',
    fontWeight: '500',
    fontSize: 15,
  },
  button1: {
    // backgroundColor: '#457b9d',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  register: {
    color: '#457b9d',
  },
});

export default Login;
