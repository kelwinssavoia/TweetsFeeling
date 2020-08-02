import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const RootModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const ModalContainerView = styled.View`
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 15px 0;
`;

export const ScrollIndicator = styled.View`
  width: 43px;
  height: 5px;
  background-color: #e5e5e5;
  border-radius: 90px;
  margin-bottom: 15px;
`;

export const ModalHeader = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ModalBodyContainer = styled.View`
  width: 100%;
  min-height: 300px;
  padding: 0 20px;
  align-items: center;
`;

export const TweetFeelingText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: Sansation;
  color: #1da1f2;
  margin: 10px 0;
`;

export const TweetFeelingEmoji = styled.Text`
  font-size: 30px;
`;

export const TweetFeelingDescription = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: Sansation;
  color: #1da1f2;
  margin-top: 10px;
`;
