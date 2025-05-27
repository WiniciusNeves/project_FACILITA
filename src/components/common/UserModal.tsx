import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleProp,
  ViewStyle,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RatingStars from './RatingStars';
import {userCardStyles} from './UserModal.style';

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

export default UserCard;
