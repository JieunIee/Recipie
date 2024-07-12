import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  status: string;
};

const Header: React.FC<Props> = ({status}) => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Image
              source={require('../assets/BackButton.png')}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>{status}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  headerContainer: {
    height: 66,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50.5,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  backButton: {
    width: 35,
    height: 35,
    marginLeft: 15.5,
    paddingTop: 15.5,
  },
});

export default Header;
