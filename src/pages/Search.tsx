import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image
            source={require('../assets/SearchBarIcon.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>전체 레시피 검색</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage1.png')}
            style={styles.searchImage}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage2.png')}
            style={styles.searchImage}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage3.png')}
            style={styles.searchImage}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage4.png')}
            style={styles.searchImage}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage5.png')}
            style={styles.searchImage}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/Images/searchImage6.png')}
            style={styles.searchImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 22,
    paddingVertical: 3,
    paddingHorizontal: 17,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    paddingHorizontal: 17,
    paddingVertical: 11,
    flex: 1,
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 13,
  },
  searchText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#B4B4B4',
  },
  searchImage: {
    width: 163.5,
    height: 163.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  box: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});

export default Search;
