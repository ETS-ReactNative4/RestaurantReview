import React, { useContext } from 'react';
import MyContext from 'context';

import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// components
import StarRating from 'components/starRating/StarRating';

// utils
import _get from 'lodash/get';
import RestaurantImage from 'images/restaurant.png';

// modal type
import ModalTypes from 'components/modal/modalTypes.enum';

// styles
import style from './style';

const RestaurantInfo = ({navigation, route}) => {
	const addReview = () => {
		// set modal title and type in context
		setModalTitle('Add a review');
		setModalType(ModalTypes.ADD_REVIEW);
		
		navigation.navigate('Modal');
	};

	const context = useContext(MyContext);
	const setModalTitle = _get(context, 'modal.setModalTitle', () => {});
	const setModalType = _get(context, 'modal.setModalType', () => {});

	const restaurant = _get(route, 'params.place', null);
	const name = _get(restaurant, 'name', null);
	const address = _get(restaurant, 'address', null);

	return (
		<View style={style.main}>
			{/* restaurant name */}
			<View style={style.header}>
				<Text style={style.headerText}>{name}</Text>
				<View style={style.ratingContainer}>
					<Text style={style.ratingText}>Rating:</Text>
					<StarRating entry={restaurant} />
				</View>
			</View>

			{/* image and restaurant info (rating, address...) */}
			<View style={style.content}>
				{/* image wrapper */}
				<Image style={style.image} source={RestaurantImage} />

				{/* details */}
				<View style={style.detailsWrapper}>
					<View style={style.detailsContainer}>
						<Text style={style.detailsTitle}>Name</Text>
						<Text style={style.detailsContent}>{name}</Text>
					</View>
					<View style={style.detailsContainer}>
						<Text style={style.detailsTitle}>Address</Text>
						<Text style={style.detailsContent}>{address}</Text>
					</View>
					<TouchableOpacity style={style.button} onPress={addReview}>
						<Text style={style.buttonText}>Add review</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

RestaurantInfo.propTypes = {
	route: PropTypes.object,
	navigation: PropTypes.object,
};

export default RestaurantInfo;