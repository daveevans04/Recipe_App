import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, Data} from '../constants';
import {CategoryCard} from '../components';
import React from 'react';

const Home = ({navigation}) => {
  // Navigation
  const onRecipePressed = item => {
    navigation.navigate('Recipe', {recipe: item});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={Data.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* Search Bar */}
            {/* See Recipe Card */}
            {/* Trending Section */}
            {/* Category Header */}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{marginHorizontal: SIZES.padding}}
              onPress={onRecipePressed}
            />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
