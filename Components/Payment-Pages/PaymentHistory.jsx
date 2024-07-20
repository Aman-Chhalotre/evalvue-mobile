import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import logo from '../../assets/TCS.jpg';
import { Image } from 'react-native-elements';
import { listStyle } from '../Styles/listStyle';
import { paymentStyles } from '../Styles/paymentStyle';

export default function PaymentHistory() {
    return (
        <View style={listStyle.listMainContainer}>
            <View style={listStyle.listHeaderContainer}>
                <Text style={listStyle.listHeading}>Payment History</Text>
            </View>
            <ScrollView>
                <View style={listStyle.listFooterConatiner}>
                    <View>
                        <View style={paymentStyles.listContainer}>
                            <View style={listStyle.listSubContainer}>
                                <Image
                                    source={logo}
                                    style={listStyle.listLogoImg}
                                />
                                <View>
                                    <Text style={listStyle.listTitleText}>Tata Counsultancy Services </Text>
                                    <Text style={listStyle.listSubTitleText}>₹99</Text>
                                </View>
                            </View>
                            <View style={listStyle.listBtnContainer}>
                                <Text style={listStyle.listBtn}>Completed</Text>
                            </View>
                        </View>
                        <View style={paymentStyles.payMainContainer}>
                            <View style={paymentStyles.payConatiner}>
                                <Text style={paymentStyles.idText}>Order Id : </Text>
                                <Text style={paymentStyles.idText}>order_OW8LZD0JGs7oh0</Text>
                            </View>
                            <View style={paymentStyles.payConatiner}>
                                <Text style={paymentStyles.idText}>Subscription Id : </Text>
                                <Text style={paymentStyles.idText}>sub_OW8LXmvRLQgv60</Text>
                            </View>
                            <View style={[paymentStyles.payConatiner, paymentStyles.lastContainer]}>
                                <Text style={paymentStyles.idText}>Created On : </Text>
                                <Text style={paymentStyles.idText}>2024-07-08T17:42:44</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};