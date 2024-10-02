import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import {Lock} from 'lucide-react-native';

export default function Register() {
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#060A11', '#060A11']}
        style={{flex: 1, justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../assets/images/background1.jpeg')}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 680,
          }}>
          <LinearGradient
            colors={['#060A1100', '#060A11']}
            style={{flex: 1, justifyContent: 'center'}}>
            <View style={{top: 150}}>
              <View style={styles.bottomContainer}>
                <Text style={styles.textStyle}>Welcome</Text>
                <Text style={styles.contentText}>
                  Start your journey towards a more active lifestyle
                </Text>
              </View>
              <View style={styles.bottomContainerBorder}>
                <View style={styles.line} />
                <Text style={styles.text}>Sign up with</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.lockIcon}>💬</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Name"
                    placeholderTextColor="#999"
                    keyboardType="name-phone-pad"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.prefix}>📞</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.lockIcon}>🔒</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.lockIcon}>🔒</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
              </View>
              <View style={styles.bottomFormContainer}>
                <TouchableOpacity
                  style={styles.rememberMeContainer}
                  onPress={() => setRememberMe(!rememberMe)}>
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe && styles.checkboxChecked,
                    ]}>
                    {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                  </View>

                  <Text style={styles.rememberMeText}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton}>
                  <Text style={styles.signInText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.bottomUserText}>
                  <Text style={styles.bottomUserText}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={handleSignup}>
                    <Text
                      style={[
                        styles.bottomUserText,
                        {marginLeft: 5, color: 'skyblue'},
                      ]}>
                      Sign-in
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 75,
    width: 240,
    height: 120,
    left: 91,
    gap: 16,
  },
  bottomContainerBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90,
  },
  line: {
    flex: 1,
    height: 2,
    margin: 15,
    backgroundColor: '#E2F163',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
  textStyle: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: 'white',
    width: 114,
    height: 36,
  },
  contentText: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 17,
    width: 264,
    height: 30,
  },
  buttonContainer: {
    top: 340,
    left: 90,
    width: 234,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#E2F163',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F163',
  },
  loginButtonWrapper: {
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: '#000000',
    fontWeight: '400',
    fontFamily: fonts.Medium,
    fontSize: 16,
    lineHeight: 24,
  },
  formContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    top: 100,
    borderWidth: 1,
    borderColor: '#BABABA',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputText: {
    color: colors.brandColor,
  },
  prefix: {
    fontSize: 16,
    color: '#999',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  lockIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  bottomFormContainer: {
    top: 80,
    padding: 15,
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FF0000',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#FF0000',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  rememberMeText: {
    color: '#CCCCCC',
    fontSize: 16,
    marginLeft: 10,
  },
  signInButton: {
    backgroundColor: '#E2F163',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  signInText: {
    color: '#000000',
    fontFamily: fonts.Medium,
    fontSize: 18,
    fontWeight: '400',
  },
  bottomUserText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 10,
  },
});
