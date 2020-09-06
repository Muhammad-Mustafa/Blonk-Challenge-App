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

import {useDispatch} from 'react-redux';
import {registerUser} from '../../store/actions/globalAction';

const Registration = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');

  const dispatch = useDispatch();
  const handelSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.length < 3) {
      alert('Invalid Name');
    } else if (email.length < 13) {
      alert('Enter Valid Email');
    } else if (reg.test(email) === false && email.length >= 13) {
      alert('Invalid email format');
    } else if (password.length < 6) {
      alert('password must be 6 characters long');
    } else if (reenterPassword.length < 6) {
      alert('Re-enter password must be 6 characters long');
    } else if (password !== reenterPassword) {
      alert(`Passwords did'nt match`);
    } else {
      dispatch(registerUser(name, email, password));
      Alert.alert('Sucessfully Registerd', 'You are Registerd Sucessfully', [
        {text: 'OK', onPress: () => props.navigation.navigate('Login')},
      ]);
      setName('');
      setEmail('');
      setPassword('');
      setReenterPassword('');
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
            <Text style={styles.heading}>Registration</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                onChange={(e) => setName(e.nativeEvent.text)}
                value={name}
                autoCapitalize="words"
              />
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
              <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                onChange={(e) => setReenterPassword(e.nativeEvent.text)}
                value={reenterPassword}
                secureTextEntry={true}
              />
            </View>

            <Button success block style={styles.button} onPress={handelSubmit}>
              <Text style={styles.registerTxt}> Register </Text>
            </Button>

            <TouchableOpacity
              style={styles.button1}
              onPress={() => props.navigation.navigate('Login')}>
              <Text>Alredy have an Account?</Text>
              <Text style={styles.register}> Sign In</Text>
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
    marginHorizontal: 20,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#457b9d',
    borderColor: 'black',
    paddingLeft: 4,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#457b9d',
    marginTop: 20,
    marginHorizontal: 20,
  },
  registerTxt: {
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

export default Registration;
