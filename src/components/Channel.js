import React from "react";
import PropTypes from 'prop-types';

const Channel = ({id, name, removeChannel, onNameChange}) => (
    <div>
      <input type="text"
        value={name}
        placeholder={`Channel ${id} name`}
        onChange={({target}) => onNameChange(id, target.value)}>
      </input>
      <button onClick={() => removeChannel(id)}>&times;</button>
    </div>
);

Channel.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  removeChannel: PropTypes.func,
  onNameChange: PropTypes.func
};

export default Channel;
