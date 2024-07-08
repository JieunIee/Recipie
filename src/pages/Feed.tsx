import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

const Feed = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image
            source={require('../assets/SearchBarIcon.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>내 레시피 검색</Text>
        </View>
        <Image
          source={require('../assets/AlarmIcon.png')}
          style={styles.bannerImage}
        />
      </View>
      <Text style={styles.sectionTitle}>내 레시피북</Text>
      <View style={styles.recipeBookWrapper}>
        <Image
          source={require('../assets/Images/myRecipie.png')}
          style={styles.recipeBook}
        />
      </View>
      <Text style={styles.sectionTitle}>인기 레시피 북</Text>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        paginationStyle={{bottom: 0}}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        loop={true}
        autoplay={false}
        removeClippedSubviews={false}>
        <View style={styles.slide}>
          <Image
            source={require('../assets/Images/popularRecipie.png')}
            style={styles.popularRecipe}></Image>
        </View>
        <View style={styles.slide}>
          <View style={styles.popularRecipe}></View>
        </View>
        <View style={styles.slide}>
          <View style={styles.popularRecipe}></View>
        </View>
      </Swiper>
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    paddingHorizontal: 15,
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
  bannerImage: {
    width: 33,
    height: 33,
    marginLeft: 13,
    marginTop: 3,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginLeft: 14.2,
    marginVertical: 14,
  },
  recipeBookWrapper: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 26,
  },
  recipeBook: {
    width: 298,
    height: 298,
    borderRadius: 12,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  popularRecipe: {
    width: 175,
    height: 175,
    backgroundColor: '#DADADA',
    borderRadius: 8,
  },
  dotStyle: {
    backgroundColor: '#D9D9D9',
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDotStyle: {
    backgroundColor: '#000',
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Feed;
