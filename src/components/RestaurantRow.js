'use strict';

import React, {useState} from 'react';

// components
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import StarRating from 'components/StarRating';

// utils
import RestaurantImage from 'images/restaurant.png';

const RestaurantRow = ({data, index, navigation}) => {
  const [rowExpanded, setRowExpanded] = useState(false);

  const infoPress = () => {
    navigation.navigate('Info', {place: data});
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.row,
          ...(index % 2 !== 0 ? [{backgroundColor: '#FDE8E9'}] : []),
        ]}>
        <View style={styles.rating}>
          <StarRating entry={data} />
        </View>

        <View style={styles.nameAddress}>
          <Text>{data.name}</Text>
          <Text style={styles.address}>{data.address}</Text>
        </View>

        <TouchableOpacity
          onPress={infoPress}
          style={[styles.button, styles.textSmall]}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
      {rowExpanded && (
        <View style={styles.restaurantDetails}>
          <Text>Restaurant info</Text>
          <Image
            source={RestaurantImage}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  textSmall: {flex: 1},
  nameAddress: {flexDirection: 'column', flex: 8},
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
  restaurantDetails: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 30,
    marginVertical: 10,
    borderColor: '#ddd',
    borderRadius: 2,
  },
  imageStyle: {
    width: 200,
    height: 120,
  },
  rating: {
    flexDirection: 'row',
    flexBasis: 70,
  },
});

export default RestaurantRow;
