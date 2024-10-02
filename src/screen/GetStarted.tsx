import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';

export default function GetStarted() {
  const navigation = useNavigation();
  const handleStarter = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#060A11', '#060A11']}
        style={{flex: 1, justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../assets/images/background.jpeg')}
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
            <View style={styles.bottomContainer}>
              <Text style={styles.textStyle}>Meet Our Expert Instructors</Text>
              <Text style={styles.contentText}>
                Learn with fitness experts, at your own pace.
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButtonWrapper}
            onPress={handleStarter}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
    top: 275,
    width: 240,
    height: 120,
    left: 91,
    gap: 16,
  },
  textStyle: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: 'white',
  },
  contentText: {
    fontFamily: fonts.Regular,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 14.72,
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
});
