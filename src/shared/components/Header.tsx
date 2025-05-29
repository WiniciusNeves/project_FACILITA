import React from 'react';
import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  photo: ImageSourcePropType;
}

const Header: React.FC<HeaderProps> = ({title, photo}) => {
  return (
    <SafeAreaView>
      <View style={headerStyles.container}>
        <View style={headerStyles.row}>
          <Text style={headerStyles.title}>{title}</Text>
          <View style={headerStyles.avatarCircle}>
            <Image source={photo} style={headerStyles.avatarImg} />
          </View>
        </View>
        <Image
          source={require('../../assets/img/arrow.png')}
          style={headerStyles.arrowImg}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginTop: 6,
  },
  avatarCircle: {
    backgroundColor: '#7DD3FC',
    borderRadius: 50,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  arrowImg: {
    width: 300,
    alignSelf: 'flex-start',
    marginRight: 20,
    marginTop: -8,
    marginBottom: 30,
  },
});

export default Header;
