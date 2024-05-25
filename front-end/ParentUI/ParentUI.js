import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import phyDoodleShapes from '../assets/BgImage/doodle.png';
import BrowseBookRed from '../assets/parentsUIImages/BrowseBook.png';
import PurchaseHistoryGreen from '../assets/parentsUIImages/PurchaseHistoryButton.png';
import TrackingYellow from '../assets/parentsUIImages/TrackingActivities.png';
import PurchaseHistory from '../MenuButton';
import PurchaseHistoryText from '../PurchaseHistory/PurchaseHistoryText';
import BookStore from '../BookStore/BookStore';

const ParentUI = () => {
    const [showPurchaseHistoryText, setShowPurchaseHistoryText] = useState(false);
    const [showBookStore, setShowBookStore] = useState(false);
    const navigation = useNavigation();

    const handleBrowseBooks = () => {
        setShowBookStore(true);
    };

    const handlePurchaseHistory = () => {
        setShowPurchaseHistoryText(true);
    };

    if (showBookStore) {
        return <BookStore handleBrowseBooks={() => setShowBookStore(false)} />;
    }

    if (showPurchaseHistoryText) {
        return <PurchaseHistoryText />;
    }

    return (
        <View style={styles.container}>
            <Image source={phyDoodleShapes} style={styles.backgroundImage} />
            <View style={styles.purchasehistory}><PurchaseHistory /></View>
            
            <TouchableOpacity onPress={handleBrowseBooks} style={styles.purchaseButton}>
                <Image source={BrowseBookRed} style={styles.BrowseBookRed} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePurchaseHistory} style={styles.purchaseButton}>
                <Image source={PurchaseHistoryGreen} style={styles.PurchaseHistoryGreen} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={TrackingYellow} style={styles.TrackingYellow} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F6FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    purchasehistory: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        marginBottom: -225,
    },
    BrowseBookRed: {
        marginRight: 30,
        top: -105,
        right: 373,
    },
    PurchaseHistoryGreen: {
        top: -106,
        marginRight: 30,
        marginLeft: 30,
    },
    TrackingYellow: {
        marginLeft: 30,
        left: 370,
        top: -256,
    },
    purchaseButton: {
        position: 'absolute',
        bottom: 150,
        marginLeft: 30,
        zIndex: 1,
    },
});

export default ParentUI;
