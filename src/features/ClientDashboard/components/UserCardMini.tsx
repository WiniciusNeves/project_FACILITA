import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Tag from '../../../shared/components/Tag';

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

const userCardMiniStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEE',
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 4,
  },
  moreInfo: {
    marginLeft: 12,
  },
  moreInfoText: {
    color: '#6C63FF',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default UserCardMini;
