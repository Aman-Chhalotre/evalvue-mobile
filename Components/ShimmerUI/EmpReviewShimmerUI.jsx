import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { reviewCard } from './ReviewShimmerUI';

export default function EmpReviewShimmerUI() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.firstContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.profile}></View>
                    <View style={[styles.text, { width: '60%' }]}></View>
                </View>
                <View style={[styles.text, { width: '50%' }]}></View>
                <View style={[styles.text, { width: '40%' }]}></View>
            </View>
            <ScrollView style={styles.scrollStyle}>
                {reviewCard()}
                {reviewCard()}
                {reviewCard()}
                {reviewCard()}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {},
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#FFF'
    },
    profile: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 / 2,
        backgroundColor: '#DAE0E2',
    },
    scrollStyle: {
        backgroundColor: '#DAE0E2'
    },
    text: {
        height: 10,
        backgroundColor: '#DAE0E2',
        borderRadius: 10,
        marginLeft: 10,
        marginVertical: 5
    },
    firstContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 10
    }
});