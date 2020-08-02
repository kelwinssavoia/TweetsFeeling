import styled from 'styled-components/native';
import {Tweet} from '../../../../interfaces/Tweet';
import {FlatList} from 'react-native';

export const TweetsScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const TweetsFlatList = styled(FlatList as new () => FlatList<Tweet>)`
  width: 100%;
  flex: 1;
`;

export const TweetsContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const TweetTouchable = styled.TouchableOpacity`
  width: 100%;
`;

export const TweetContainer = styled.View`
  background: white;
  border-style: solid;
  border-width: 1px;
  border-color: #a5d9fa;
  border-radius: 18px;
  padding: 17px 14px;
  width: 100%;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-bottom: 15px;
`;

export const TweetText = styled.Text`
  width: 100%;
  font-family: Sansation;
  color: #1f1f1f;
  font-size: 12px;
`;

export const TweetTimeText = styled.Text`
  width: 100%;
  font-family: Sansation;
  color: #1da1f2;
  font-size: 12px;
  text-align: right;
  margin-top: 15px;
`;
