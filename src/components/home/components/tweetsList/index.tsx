import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import moment from 'moment';

import {Tweet} from '../../../../interfaces/Tweet';
import {FeelingModal} from '../../../feelingModal';

import {TweetsItem} from '../../../tweetItem';

import {
  TweetsContainer,
  TweetsScrollContainer,
  TweetContainer,
  TweetText,
  TweetTimeText,
  TweetTouchable,
  TweetsFlatList,
} from './styles';

type props = {
  loading: boolean;
  tweets: Tweet[];
};

const {width} = Dimensions.get('window');

const TweetsList = ({loading, tweets}: props) => {
  const [showFeelingModal, setShowFeelingModal] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState<Tweet>();

  const renderTweets = () => (
    <TweetsContainer>
      <TweetsFlatList
        data={tweets}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <TweetsItem
            onPress={() => {
              setSelectedTweet(item);
              setShowFeelingModal(true);
            }}
            tweet={item}
          />
        )}
      />
      <FeelingModal
        show={showFeelingModal}
        onClose={() => setShowFeelingModal(false)}
        tweet={selectedTweet}></FeelingModal>
    </TweetsContainer>
  );

  const renderLoading = () => (
    <TweetsScrollContainer>
      <TweetsContainer>
        {['', '', '', '', '', ''].map(() => (
          <TweetTouchable disabled={true} style={{width: '90%'}}>
            <TweetContainer
              style={{
                shadowOffset: {
                  height: 5,
                },
                alignItems: 'flex-end',
              }}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  height={12}
                  width={width * 0.9 - 30}
                  marginBottom={18}
                />
              </SkeletonPlaceholder>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item height={12} width={100} />
              </SkeletonPlaceholder>
            </TweetContainer>
          </TweetTouchable>
        ))}
      </TweetsContainer>
    </TweetsScrollContainer>
  );

  return loading ? renderLoading() : renderTweets();
};

export {TweetsList};
