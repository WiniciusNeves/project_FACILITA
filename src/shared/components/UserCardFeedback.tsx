import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RatingStars from '../../shared/components/RatingStars';

interface UserCardFeedbackProps {
  name: string;
  photoUrl?: string;
  comment: string;
  rating: number;
}

const UserCardFeedback: React.FC<UserCardFeedbackProps> = ({
  name,
  photoUrl,
  comment,
  rating,
}) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Image
        source={
          photoUrl ? {uri: photoUrl} : require('../../assets/img/avatar1.png')
        }
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.comment}>{comment}</Text>
        <RatingStars rating={rating} size={28} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 18,
    marginVertical: 12,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEE',
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  comment: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
  },
});

export default UserCardFeedback;
