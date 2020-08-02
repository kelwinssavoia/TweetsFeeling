import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import moment from 'moment';

import {Tweet} from '../../interfaces/Tweet';

import {
  TweetContainer,
  TweetText,
  TweetTimeText,
  TweetTouchable,
  Container,
} from './styles';

type props = {
  onPress?: (tweet: Tweet) => void;
  tweet: Tweet;
};

const TweetsItem = ({onPress, tweet}: props) => {
  return (
    <Container>
      <TweetTouchable
        onPress={() => {
          if (onPress) onPress(tweet);
        }}>
        <TweetContainer
          style={{
            shadowOffset: {
              height: 5,
            },
          }}>
          <TweetText>{tweet.text}</TweetText>
          <TweetTimeText>
            {moment(tweet.created_at).format('DD/MM/YYYY HH:mm')}
          </TweetTimeText>
        </TweetContainer>
      </TweetTouchable>
    </Container>
  );
};

export {TweetsItem};
