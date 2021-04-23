import React from 'react';
import {StyleSheet,Text, Image, Dimensions} from 'react-native'
import {
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Thumbnail
} from 'native-base';
import colors from '../constants/colors'

import {Ionicons} from '@expo/vector-icons'
const width = Dimensions.get('window').width;

const FeedComponents = (props) => {
  return (
    <Card transparent>
    <CardItem>
    <Left>
    <Thumbnail
    source={{ uri : props.profile }}
    style ={{ width: 34, height: 34, borderRadius: 17 }}
    />
    <Body>
    <Text>{props.username}</Text>
    <Text note style={{ fontSize: 12 }}>
    Mar 10, 2020
    </Text>
    </Body>
    </Left>
    <Right>
    <Ionicons  name="ellipsis-vertical-outline" size={24} color={colors.gray}/>
    </Right>
    </CardItem>
    <CardItem cardBody>
    <Image
    source={{ uri: props.image}}
    style= {{ width: width, height: width, flex: 1}}
    />
    </CardItem>
    <CardItem>
    <Left>
      <Ionicons name="heart-outline" size={24} color={colors.gray} />
      <Ionicons name="md-chatbubbles" size={24} color={colors.gray} />
    </Left>
    </CardItem>
    </Card>
  );
}

export default FeedComponents;
