import styled from 'styled-components/native';

export const UserContainer = styled.View`
  width: 100%;
  padding: 10px 0px;
  align-items: center;
`;

export const UserImageContainer = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: #a5d9fa;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const UserNameText = styled.Text`
  font-family: Sansation;
  font-size: 16px;
  font-weight: bold;
  color: #1da1f2;
  margin-top: 5px;
`;

export const UserText = styled.Text`
  font-family: Sansation;
  font-size: 12px;
  font-weight: bold;
  color: #989898;
`;
