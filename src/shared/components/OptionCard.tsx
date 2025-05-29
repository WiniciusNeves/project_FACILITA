import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface OptionCardProps {
  title: string;
  color: string;
  image: any;
  size?: number;
  onPress?: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  color,
  image,
  size = 80,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: color}]}
      activeOpacity={0.85}
      onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={image}
          style={{width: size, height: size, ...styles.image}}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 110,
    borderRadius: 12,
    marginRight: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'regular',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 12,
  },
});

export default OptionCard;
