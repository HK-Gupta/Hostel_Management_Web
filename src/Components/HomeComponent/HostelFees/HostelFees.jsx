import React from 'react'
import './HostelFees.css'
import hostel from '../../../assets/images/hostel.png'

function HostelFees() {
  return (
    <div className='hostel-fees'>
      <img src={hostel} alt=""  className='background-img'/>
      <div className="content">
        <div className='column-data'>
          <p className='heading'>Hostel Details</p>
          <div className="hostel-details">
            <p>Block No.: </p>
            <p>Room No.: </p>
          </div>
          <p className='heading'>Payment Details</p>
          <div className='payment-data'>
            <p>Maintenance charge:</p>
            <p>$ 100</p>
          </div>
          <div className='payment-data'>
            <p>Parking charge:</p>
            <p>$ 100</p>
          </div>
          <div className='payment-data'>
            <p>Room Water charge:</p>
            <p>$ 100</p>
          </div>
          <div className='payment-data'>
            <p>Room charge:</p>
            <p>$ 100</p>
          </div>
          <div className='line'></div>
          <div className="final-total">
            <p className='heading'>Total Amount:</p>
            <p className='heading'>$400</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HostelFees