import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  background: white;
`;

export const Header = styled.View`
  height: 50px;
  border-style: solid;
  border-color: rgba(29, 161, 242, 0.4);
  border-bottom-width: 1px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  font-family: Sansation;
  font-size: 20px;
  font-weight: bold;
  color: #1da1f2;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  height: 60px;
  width: 100%;
  border-style: solid;
  border-color: rgba(29, 161, 242, 0.4);
  border-top-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const SearchTextContainer = styled.View`
  width: 90%;
  height: 40px;
  border-radius: 20px;
  padding: 0;
  border-style: solid;
  border-color: #a5d9fa;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const UserCharText = styled.Text`
  font-family: Sansation;
  font-size: 15px;
  color: #1da1f2;
  margin-left: 15px;
`;

export const SearchTextInput = styled.TextInput`
  flex: 1;
  margin-left: 2px;
  margin-right: 5px;
  font-size: 12px;
  font-family: Sansation;
`;

export const SearchButtonTouchable = styled.TouchableOpacity`
  height: 100%;
`;

export const SearchButtonContainer = styled.View`
  padding: 0 15px;
  height: 100%;
  justify-content: center;
  background: #a5d9fa;
`;

export const TweetUserContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;
