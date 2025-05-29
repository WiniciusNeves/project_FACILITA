import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';

export type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  disabled = false,
  loading = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[primaryButton.base, disabled && primaryButton.disabled, style]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={primaryButton.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const primaryButton = StyleSheet.create({
  base: {
    backgroundColor: '#6C63FF',
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 12,
    width: '60%',
    alignSelf: 'center',
  },
  disabled: {
    backgroundColor: '#ADA8F6',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default PrimaryButton;
