import React, {useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import ReactLoading from 'react-native-spinkit';

import {searchUser, listTweets} from '../../services/twitterServices';

import {TwitterUser} from '../../interfaces/TwitterUser';
import {Tweet} from '../../interfaces/Tweet';

import TweetIcon from '../../../assets/icons/twitter-icon.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';

import {UserBlock} from './components/userBlock';
import {TweetsList} from './components/tweetsList';

import {
  Container,
  Header,
  HeaderTitle,
  Body,
  SearchContainer,
  SearchTextContainer,
  SearchTextInput,
  UserCharText,
  SearchButtonContainer,
  SearchButtonTouchable,
  TweetUserContainer,
} from './styles';

const {width} = Dimensions.get('window');
const Home = () => {
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingTweets, setLoadingTweets] = useState(false);
  const [loadingTweetsError, setLoadingTweetsError] = useState(false);

  const [userName, setUserName] = useState('');

  const [user, setUser] = useState<TwitterUser>();
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const searchByName = async () => {
    try {
      if (userName === '')
        return Alert.alert(
          'Atenção',
          'É necessário informar o nome do usuário',
        );

      setTweets([]);
      setUser(undefined);
      setLoadingUser(true);
      const {data} = await searchUser(userName);
      console.log(data);
      setUser(data);

      setLoadingUser(false);
      if (data.protected) {
        return Alert.alert(
          'Usuário privado',
          'Não é possível listar os tweets desse usuário',
        );
      }
      listTweetsByUse(data);
    } catch (err) {
      if (err.response.status === 404)
        Alert.alert(
          'Usuário não encontrado',
          'Verifique o usuário informado e tente novamente',
        );
      else Alert.alert('Erro ao buscar usuário', 'Tente novamente mais tarde');
      console.log(err.response.data);
      setLoadingUser(false);
    }
  };

  const listTweetsByUse = async (user: TwitterUser) => {
    try {
      setLoadingTweetsError(false);
      setLoadingTweets(true);
      const {data} = await listTweets(user.id_str);
      setTweets(data);
      setLoadingTweets(false);
    } catch (err) {
      Alert.alert('Erro ao listar tweets', 'Tente novamente mais tarde');
      console.log(err.response.data);
      setLoadingTweetsError(true);
      setLoadingTweets(false);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Tweets Feeling</HeaderTitle>
      </Header>
      <Body>
        <TweetIcon width={width} color="rgba(29, 161, 242, 0.20)" />
        <TweetUserContainer>
          <UserBlock loading={loadingUser} user={user} />
          {user && !loadingTweetsError && (
            <TweetsList loading={loadingTweets} tweets={tweets} />
          )}
        </TweetUserContainer>
      </Body>
      <SearchContainer>
        <SearchTextContainer>
          <UserCharText>@</UserCharText>
          <SearchTextInput
            placeholder="Pesquisar Usuário"
            onChangeText={(text) => setUserName(text)}
            value={userName}
            autoCorrect={false}
            onSubmitEditing={() => searchByName()}
            editable={!(loadingTweets || loadingUser)}
          />
          <SearchButtonTouchable
            onPress={() => {
              searchByName();
            }}
            disabled={loadingTweets || loadingUser}>
            <SearchButtonContainer>
              {loadingTweets || loadingUser ? (
                <ReactLoading
                  type="Wave"
                  size={20}
                  isVisible={true}
                  color="#FFFFFF"
                />
              ) : (
                <SearchIcon width={20} height={20} color="#FFF"></SearchIcon>
              )}
            </SearchButtonContainer>
          </SearchButtonTouchable>
        </SearchTextContainer>
      </SearchContainer>
    </Container>
  );
};

export {Home};
