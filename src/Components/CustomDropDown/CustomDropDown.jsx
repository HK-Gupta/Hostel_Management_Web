import React, { useState } from 'react'
import './CustomDropDown.css'

function CustomDropDown() {
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [index, setIndex] = useState(0);

  const blockOptions = ['A', 'B', 'C'];
  const roomOptions = [[101, 102, 103, 104, 105], [201, 202, 203, 204, 205], [301, 302, 303, 304, 305]];

  const handleBlockChange =((e) => {
    const block = e.target.value;
    setSelectedBlock(block);
    const newIndex = blockOptions.indexOf(block);
    setIndex(newIndex);
    setSelectedRoom(''); 
  })
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };
    return (
      <div className='custom-dropdown'>
        <div className='custom-dropdown-row'>
          <div className='left-dd'>
            <span className='text'>
              Block No.
            </span>
            <select 
              value={selectedBlock}
              onChange={handleBlockChange}
              className='dropdown'
              >
              {
                blockOptions.map((block) => {

                  return <option value={block} key={block}>
                    {block}
                  </option>
                })
              } 

            </select>
          </div>

          <div className='right-dd'>
            <span className='text'>Room No.</span>
            <select 
              value={selectedRoom}
              onChange={handleRoomChange}
              className='dropdown'
              >
              {
                roomOptions[index].map((block) => {

                  return <option value={block} key={block}>
                    {block}
                  </option>
                })
              } 

            </select>
          </div>
        </div>
      </div>  
    );
}

export default CustomDropDown