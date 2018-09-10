import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import {deleteChannel, addChannel, updateChannelName, getChannels} from '../actions/channel';
import {selectChannels} from '../reducers/channels';
import Channels from './Channels';

class App extends PureComponent {
  static propTypes= {
    channels: PropTypes.arrayOf(PropTypes.object),
    addChannel: PropTypes.func,
    removeChannel: PropTypes.func,
    onNameChange: PropTypes.func
  }

  componentDidMount(){
    this.props.getChannels();
  }
  
  render(){
    const {channels, addChannel, removeChannel, onNameChange} = this.props;
    return (
      <div>
        <button onClick={addChannel}>Add Channel</button>
        <Channels channels={channels} onNameChange={onNameChange} removeChannel={removeChannel}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: selectChannels(state)
})

const mapDispatchToProps = (dispatch) => ({
    removeChannel: (channelId) => dispatch(deleteChannel(channelId)),
    addChannel: () => dispatch(addChannel()),
    onNameChange: (channelId, name) => dispatch(updateChannelName(channelId, name)),
    getChannels: () => dispatch(getChannels())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
