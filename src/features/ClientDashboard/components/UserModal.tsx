import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RatingStars from '../../../shared/components/RatingStars';

export interface UserCardProps {
  visible: boolean;
  onClose: () => void;
  photoUrl?: string;
  name: string;
  specialty: string;
  description: string;
  rating: number;
  onAction: () => void;
  actionLabel: string;
  onProfile: () => void;
  style?: StyleProp<ViewStyle>;
}

const UserCard: React.FC<UserCardProps> = ({
  visible,
  onClose,
  photoUrl,
  name,
  specialty,
  description,
  rating,
  onAction,
  actionLabel,
  onProfile,
  style,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={userCardStyles.modalOverlay}>
        <View style={[userCardStyles.card, userCardStyles.modalCard, style]}>
          <TouchableOpacity
            style={userCardStyles.closeButton}
            onPress={onClose}>
            <FontAwesome6 name="xmark" size={32} color="#000" solid />
          </TouchableOpacity>
          <View style={userCardStyles.rowTop}>
            <View style={{flex: 1}}>
              <Text style={userCardStyles.name}>{name}</Text>
              <Text style={[userCardStyles.specialty, {fontStyle: 'italic'}]}>
                {specialty}
              </Text>
              <RatingStars
                rating={rating}
                size={36}
                style={{marginTop: 12, marginBottom: 8}}
              />
            </View>
            <Image
              source={
                photoUrl
                  ? {uri: photoUrl}
                  : require('../../assets/img/avatar1.png')
              }
              style={userCardStyles.avatarLarge}
            />
          </View>
          <Text style={userCardStyles.description}>{description}</Text>
          <TouchableOpacity
            style={userCardStyles.actionButton}
            onPress={onAction}>
            <Text style={userCardStyles.actionButtonText}>{actionLabel}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={userCardStyles.profileLink}
            onPress={onProfile}>
            <Text style={userCardStyles.profileLinkText}>
              ver perfil completo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const userCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EEE',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialty: {
    fontSize: 14,
    color: '#6C63FF',
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  actionButton: {
    marginTop: 16,
    backgroundColor: '#6C63FF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalCard: {
    width: '100%',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 35,
    alignItems: 'stretch',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EEE',
    marginLeft: 12,
  },
  profileLink: {
    marginTop: 18,
    alignItems: 'center',
  },
  profileLinkText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default UserCard;
