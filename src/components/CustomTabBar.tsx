import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const feedOff = require('../assets/BottomTab/feed_off.png');
const feedOn = require('../assets/BottomTab/feed_on.png');
const myPageOff = require('../assets/BottomTab/myPage_off.png');
const myPageOn = require('../assets/BottomTab/myPage_on.png');
const searchOff = require('../assets/BottomTab/search_off.png');
const searchOn = require('../assets/BottomTab/search_on.png');
const uploadOff = require('../assets/BottomTab/upload_off.png');
const uploadOn = require('../assets/BottomTab/upload_on.png');

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon;
        let iconStyle: any = styles.icon;
        if (route.name === 'Feed') {
          icon = isFocused ? feedOn : feedOff;
          iconStyle = StyleSheet.flatten([styles.icon, styles.feedIcon]);
        } else if (route.name === 'Search') {
          icon = isFocused ? searchOn : searchOff;
        } else if (route.name === 'Upload') {
          icon = isFocused ? uploadOn : uploadOff;
        } else if (route.name === 'MyPage') {
          icon = isFocused ? myPageOn : myPageOff;
          iconStyle = StyleSheet.flatten([styles.icon, styles.myPageIcon]);
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <Image source={icon} style={iconStyle}  />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 66,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  feedIcon: {
    width: 26,
    height: 26,
  },
  myPageIcon: {
    marginTop: 4,
    width: 38,
    height: 38,
  },
});

export default CustomTabBar;
