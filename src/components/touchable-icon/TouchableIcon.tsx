import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

interface TouchableIconProps extends IconProps {
  style?: ViewStyle;
  onPress: () => void;
}

const TouchableIcon: React.FC<TouchableIconProps> = ({
  style,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
