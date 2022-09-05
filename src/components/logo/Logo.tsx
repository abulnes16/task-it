import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { LOGO } from '../../assets';
import { colors } from '../../theme';

interface LogoProps {
  style?: ViewStyle;
}

const Logo: React.FC<LogoProps> = ({ style = {} }) => {
  return (
    <View style={[styles.logoContainer, style]}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={styles.title}>Task It</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 38,
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Logo;
