import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('welcome');
  }, 500);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Logo1.png')}
        style={styles.logo}
      />
      <View>
        <Text
          style={{
            bottom: 100,
            fontSize: 20,
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
    width: 500,
    height: 500,
  },
});
