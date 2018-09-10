
import * as ACTION_TYPES from '../actions/action-types';

const channelInitialState = {
  name: ''
}

function channels(state = [], { type, payload }) {
  switch(type) {
    case ACTION_TYPES.ADD_CHANNEL: {
      const channels = [...state];

      channels.push({...channelInitialState});

      return channels;
    }
    case ACTION_TYPES.DELETE_CHANNEL: {
      const channels = [...state];

      channels.splice(payload.id, 1);

      return channels;
    }
    case ACTION_TYPES.UPDATE_CHANNEL_NAME: {
      const channels = [...state];

      channels[payload.id] = {
        ...channels[payload.id],
        name: payload.name
      };

      return [...channels];

    }

    case ACTION_TYPES.REQUEST_CHANNELS_SUCCESS: {
      const channels = payload;
      return [...state, ...channels];
    }

    case ACTION_TYPES.REQUEST_CHANNELS_ERROR: {
      return state;
    }

    default:
      return state;
  }
}

const selectChannels = (state) => state.channels;

export {channels as default, selectChannels};