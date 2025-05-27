import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {userCardMiniStyles} from './UserCardMini.style';
import Tag from './Tag';

export interface UserCardMiniProps {
  photoUrl?: string;
  name: string;
  tags: {label: string; color: string}[];
  onMoreInfo: () => void;
  style?: StyleProp<ViewStyle>;
}

const UserCardMini: React.FC<UserCardMiniProps> = ({
  photoUrl,
  name,
  tags,
  onMoreInfo,
  style,
}) => {
  return (
    <View style={[userCardMiniStyles.card, style]}>
      <Image
        source={
          photoUrl ? {uri: photoUrl} : require('../../assets/img/avatar1.png')
        }
        style={userCardMiniStyles.avatar}
      />
      <View style={userCardMiniStyles.info}>
        <Text style={userCardMiniStyles.name}>{name}</Text>
        <View style={userCardMiniStyles.tagsRow}>
          {tags.map(tag => (
            <Tag key={tag.label} label={tag.label} color={tag.color} />
          ))}
          <TouchableOpacity
            style={userCardMiniStyles.moreInfo}
            onPress={onMoreInfo}>
            <Text style={userCardMiniStyles.moreInfoText}>
              Mais Informações
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCardMini;
