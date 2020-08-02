import axios from 'axios';

import {TwitterUser} from '../interfaces/TwitterUser';
import {Tweet} from '../interfaces/Tweet';

const instance = axios.create({
  baseURL: 'https://api.twitter.com/1.1/',
  timeout: 10000,
  headers: {
    Authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAAAs5%2FAAAAAAA%2BFhxtLDRr2AuKh5zdIHTczhg0Jg%3DltF0dqGzLFlmXH9wjI8HkO1gEzGlnCYUegwIOVVu1Umn8Yi1sX',
  },
});

export const searchUser = (screen_name: string) => {
  return instance.get<TwitterUser>('users/show.json', {
    params: {screen_name},
  });
};

export const listTweets = (user_id: string) => {
  console.log('USERID', user_id);
  return instance.get<Tweet[]>('statuses/user_timeline.json', {
    params: {user_id, include_rts: false, truncated: false},
  });
};
