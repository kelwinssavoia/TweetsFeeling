import React, {useState} from 'react';
import {Dimensions} from 'react-native';

import {TwitterUser} from '../../../../interfaces/TwitterUser';

import UserIcon from '../../../../../assets/icons/twitter-icon.svg';

import {
  UserContainer,
  UserImageContainer,
  UserImage,
  UserNameText,
  UserText,
} from './styles';

type props = {
  loading: boolean;
  user?: TwitterUser;
};

const UserBlock = ({loading, user}: props) => {
  const getBigImage = () => {
    const image = user?.profile_image_url_https?.replace('_normal', '_400x400');
    return image;
  };

  return (
    <UserContainer>
      <UserImageContainer>
        {!user ? (
          <UserIcon width="60" height="60" color="#a5d9fa"></UserIcon>
        ) : (
          <UserImage
            source={{
              uri: getBigImage(),
            }}></UserImage>
        )}
      </UserImageContainer>
      {!user ? (
        <>
          <UserNameText>---</UserNameText>
          <UserText>---</UserText>
        </>
      ) : (
        <>
          <UserNameText>{user?.name}</UserNameText>
          <UserText>{user?.screen_name}</UserText>
        </>
      )}
    </UserContainer>
  );
};

export {UserBlock};
