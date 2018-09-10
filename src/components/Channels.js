import React from "react";
import PropTypes from 'prop-types';

import Channel from './Channel';

const Channels = ({channels, removeChannel, onNameChange}) => (
  <div className='center'>
    {channels.map((channel, id) => (
      <Channel key={id} id={id} {...channel} removeChannel={removeChannel} onNameChange={onNameChange}/>
    ))}
  </div>
);

Channels.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object),
  removeChannel: PropTypes.func,
  onNameChange: PropTypes.func
};

export default Channels;
