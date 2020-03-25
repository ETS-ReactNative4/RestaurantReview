import React from 'react';
import PropTypes from 'prop-types';

import _get from 'lodash/get';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './style';

const Modal = ({ navigation, route }) => {
  const onClose = () => {
    navigation.goBack();
  };

	const view = _get(route, 'params.children', null);

	return (
		<View style={style.main}>
      <View style={style.iconWrapper}>
        <TouchableOpacity onPress={onClose}>
			    <Icon name="close" style={style.icon} size={30}/>
        </TouchableOpacity>
      </View>
			<Text style={style.header}>Modal</Text>
			{view}
		</View>
	);
};

Modal.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object,
};

export default Modal;
