import React from 'react';
import './CustomDropDown.css';

function CustomDropDown({ blockNumber, roomNumber, setFormData }) {
  const blockOptions = ['A', 'B', 'C'];
  const roomOptions = [
    [101, 102, 103, 104, 105],
    [201, 202, 203, 204, 205],
    [301, 302, 303, 304, 305],
  ];

  // Dynamically calculate the index based on selected block
  const index = blockOptions.indexOf(blockNumber);

  const handleBlockChange = (e) => {
    const block = e.target.value;
    setFormData((prev) => ({
      ...prev,
      blockNumber: block,
      roomNumber: '', // Reset room when block changes
    }));
  };

  const handleRoomChange = (e) => {
    const room = e.target.value;
    setFormData((prev) => ({
      ...prev,
      roomNumber: room,
    }));
  };

  return (
    <div className='custom-dropdown'>
      <div className='custom-dropdown-row'>
        <div className='left-dd'>
          <span className='text'>Block No.</span>
          <select
            value={blockNumber}
            onChange={handleBlockChange}
            className='dropdown'
          >
            <option value="" disabled>Select Block</option>
            {blockOptions.map((block) => (
              <option value={block} key={block}>
                {block}
              </option>
            ))}
          </select>
        </div>

        {(
          <div className='right-dd'>
            <span className='text'>Room No.</span>
            <select
              value={roomNumber}
              onChange={handleRoomChange}
              className='dropdown'
            >
              <option value="" disabled>Select Room</option>
              {roomOptions[index]?.map((room) => (
                <option value={room} key={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomDropDown;
