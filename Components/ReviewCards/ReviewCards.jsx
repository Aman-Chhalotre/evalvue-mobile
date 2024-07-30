import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image, Rating } from 'react-native-elements';

const ReviewCards = ({ item }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.mainContainer}>
        <View style={styles.firstContainer}>
          <View style={styles.subContainer}>
            <Image source={{ uri: item.organization_image }} style={styles.orgImg} />
            <View>
              <Text style={styles.orgName}>{item.organization_name}</Text>
            </View>
          </View>
          <Text style={styles.orgName}>{item.created_on}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.empContainer}>
            <Image source={{ uri: item.employee_image }} style={styles.empImg} />
            <View>
              <Text style={styles.empNameStyle}>{item.employee_name}</Text>
              <Text style={styles.dsgText}>{item.designation}</Text>
            </View>
          </View>
          <View style={styles.commentConatiner}>
            <Text style={styles.commentText}>{item.comment}</Text>
            {item.image && item.image !== 'null' && (
              <Image source={{ uri: item?.image }} style={styles.reviewImg} />
            )}
            <View style={styles.ratingContainer}>
              <Rating
                type="star"
                ratingColor="gold"
                ratingCount={5}
                startingValue={item?.rating}
                imageSize={20}
                readonly
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewCards;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#DAE0E2',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 4,
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: '#d2dae2',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6
  },
  orgImg: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 0.3,
    borderColor: '#d2dae2'
  },
  secondContainer: {
    justifyContent: 'center',
  },
  empContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  empImg: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    borderWidth: 0.3,
    borderColor: '#d2dae2'
  },
  commentConatiner: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    margin: 5,
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  reviewImg: {
    width: '100%',
    height: 150,
    borderRadius: 6,
  },
  orgName: {
    color: '#535C68',
    fontSize: 11,
    marginLeft: 4,
  },
  empNameStyle: {
    color: '#2C3335',
    fontSize: 13,
    marginLeft: 4,
  },
  commentText: {
    color: '#535C68',
    fontSize: 11,
    marginBottom: 6,
    textAlign: "justify",
    fontFamily: 'inter',
    lineHeight: 16
  },
  dsgText: {
    color: '#2C3335',
    fontSize: 8,
    marginLeft: 4,
  },
  ratingContainer: {
    alignItems: 'flex-start',
    paddingTop: 6,
  }
});
