import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import ReactLoading from 'react-native-spinkit';

import {TweetsItem} from '../tweetItem';

import {Tweet} from '../../interfaces/Tweet';
import {AnalyzeSentiment} from '../../interfaces/Google';

import {analyzeSentiment} from '../../services/googleServices';

import {
  ModalContainerView,
  ModalHeader,
  RootModal,
  ScrollIndicator,
  ModalBodyContainer,
  TweetFeelingText,
  TweetFeelingDescription,
  TweetFeelingEmoji,
} from './styles';

type props = {
  show: boolean;
  onClose?: () => void;
  tweet?: Tweet;
};

const NeutralOFFSET = 0.2;

const FeelingModal = ({show, tweet, onClose}: props) => {
  const [loading, setLoading] = useState(false);
  const [analyseTweet, setAnalyseTweet] = useState<AnalyzeSentiment>();

  useEffect(() => {
    if (show) analyse();
  }, [show]);

  const analyse = async () => {
    try {
      setLoading(true);
      const {data} = await analyzeSentiment({
        content: tweet?.text || '',
        language: 'pt',
        type: 'PLAIN_TEXT',
      });
      console.log('DATA ANALYSE', data);
      setAnalyseTweet(data);
      setLoading(false);
    } catch (err) {
      Alert.alert('Erro ao analisar tweet', 'Tente novamente mais tarde');

      console.log(err);
      setLoading(false);
    }
  };

  const getEmoji = () => {
    const score = analyseTweet?.documentSentiment.score || 0;

    if (score >= NeutralOFFSET * -1 && score <= NeutralOFFSET) return '😐';
    if (score > 0) return '🙂';
    if (score < 0) return '😔';
  };

  const getSentiment = () => {
    const score = analyseTweet?.documentSentiment.score || 0;

    if (score >= NeutralOFFSET * -1 && score <= NeutralOFFSET) return 'Neutro';
    if (score > 0) return 'Feliz';
    if (score < 0) return 'Triste';
  };

  return (
    <RootModal
      testID={'modal'}
      isVisible={show}
      propagateSwipe
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection={['down']}>
      <ModalContainerView testID={'modal-content'}>
        <ModalHeader>
          <ScrollIndicator />
        </ModalHeader>
        <ModalBodyContainer>
          {tweet && <TweetsItem tweet={tweet}></TweetsItem>}
          <TweetFeelingText>Análise do Tweet</TweetFeelingText>
          {loading ? (
            <ReactLoading
              type="Wave"
              size={40}
              isVisible={true}
              color="#1da1f2"
            />
          ) : (
            <>
              <TweetFeelingEmoji>{getEmoji()}</TweetFeelingEmoji>
              <TweetFeelingDescription>
                {getSentiment()}
              </TweetFeelingDescription>
            </>
          )}
        </ModalBodyContainer>
      </ModalContainerView>
    </RootModal>
  );
};

export {FeelingModal};
