import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { assetColors } from '../../assets/styles';

const Loader = () => (
    <View style={styles.loader}>
        <ActivityIndicator size="large" color={assetColors.purple} />
    </View>
);

export default Loader;
