import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('getStarted');
  }, 500);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.logo}
      />
      <View>
        <Text
          style={{
            width: 134,
            height: 20,
            color: '#7B6F72',
            fontFamily: fonts.Regular,
          }}>
          Everybody Can Train
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    width: 282,
    height: 308.38,
    margin: 10,
  },
});
