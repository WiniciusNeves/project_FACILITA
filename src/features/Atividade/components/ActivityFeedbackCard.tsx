import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import UserCardMini from '../../../shared/components/UserCardMini';
import RatingStars from '../../../shared/components/RatingStars';
import PrimaryButton from '../../../shared/components/PrimaryButton';

interface ActivityFeedbackCardProps {
  user: {
    name: string;
    photoUrl?: string;
    tags: {label: string; color: string}[];
    onMoreInfo: () => void;
  };
  onSave: (comment: string, rating: number) => void;
}

const ActivityFeedbackCard: React.FC<ActivityFeedbackCardProps> = ({
  user,
  onSave,
}) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.card}>
      <UserCardMini
        name={user.name}
        photoUrl={user.photoUrl}
        tags={user.tags}
        onMoreInfo={user.onMoreInfo}
      />
      <Text style={styles.label}>Deixar um comentarios</Text>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={setComment}
        placeholder="Digite seu comentário"
        multiline
      />
      <Text style={styles.starsLabel}>ele merece algumas estrelas</Text>
      <RatingStars
        rating={rating}
        onChange={setRating}
        size={40}
        style={{alignSelf: 'center'}}
      />
      <PrimaryButton
        label="Salvar"
        onPress={() => onSave(comment, rating)}
        style={styles.saveButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 18,
    marginVertical: 6,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3AEE6',
    borderRadius: 12,
    minHeight: 60,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
    shadowColor: '#6C63FF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  starsLabel: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 8,
  },
  saveButton: {
    marginTop: 12,
    width: '60%',
    alignSelf: 'center',
  },
});

export default ActivityFeedbackCard;
