
import * as ACTION_TYPES from './action-types';
import { API_BASE_URL } from '../config/api';

export function addChannel() {
  return {
    type: ACTION_TYPES.ADD_CHANNEL
  };
}

export function deleteChannel(channelId) {
  return {
    type: ACTION_TYPES.DELETE_CHANNEL,
    payload: channelId
  };
}

export function updateChannelName(channelId, name) {
  return {
    type: ACTION_TYPES.UPDATE_CHANNEL_NAME,
    payload: {
      id: channelId,
      name: name
    }
  }
}

function requestChannelsSuccess(channelsReceived) {
  return {
    type: ACTION_TYPES.REQUEST_CHANNELS_SUCCESS,
    payload: channelsReceived.slice(0, 100)
  };
}

function requestChannelsError(error) {
  return {
    type: ACTION_TYPES.REQUEST_CHANNELS_ERROR,
    payload: error
  }
}

export function getChannels(dispatch) {
  const method = 'PUT';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(
    {
      "applicationId": "test",
      "secret": "secret"
    }
  );
  return function(dispatch) {
    return fetch(`${API_BASE_URL}/pcast/channels`, {
      method,
      headers,
      body
    })
      .then(r => r.json())
      .then(({ channels }) => dispatch(requestChannelsSuccess(channels)))
      .catch(error => dispatch(requestChannelsError(error)))
  }
}
