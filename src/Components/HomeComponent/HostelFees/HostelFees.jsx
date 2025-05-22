import React, {useState, useEffect} from 'react'
import './HostelFees.css'
import hostel from '../../../assets/images/hostel.png'
import {ApiCalls} from '../../../api/apiCalls'
import UserModel from '../../../models/UserModel';

function HostelFees() {
  const [feesModel, setFeesModel] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = UserModel.fromStorage();
  const total = 
    Number(feesModel[0]?.maintenanceCharge ?? 0) + 
    Number(feesModel[0]?.parkingCharge ?? 0) + 
    Number(feesModel[0]?.roomWaterCharge ?? 0) +
    Number(feesModel[0]?.roomCharge ?? 0);

  useEffect(() => {
    ApiCalls.fetchFeesDetails(setFeesModel, setLoading);
    
  }, []);

  return (
    <div className='hostel-fees'>
      <img src={hostel} alt=""  className='background-img'/>
      { loading 
        ? (<span className="spinner"></span>)
        : <div className="content">
          <div className='column-data'>
            <p className='heading'>Hostel Details</p>
            <div className="hostel-details">
              <p>Block No.: {user.blockNumber}</p>
              <p>Room No.: {user.roomNumber}</p>
            </div>
            <p className='heading'>Payment Details</p>
            <div className='payment-data'>
              <p>Maintenance charge:</p>
              <p>₹ {feesModel[0]?.maintenanceCharge ?? 0}</p>
            </div>
            <div className='payment-data'>
              <p>Parking charge:</p>
              <p>₹ {feesModel[0]?.parkingCharge ?? 0}</p>
            </div>
            <div className='payment-data'>
              <p>Room Water charge:</p>
              <p>₹ {feesModel[0]?.roomWaterCharge ?? 0}</p>
            </div>
            <div className='payment-data'>
              <p>Room charge:</p>
              <p>₹ {feesModel[0]?.roomCharge ?? 0}</p>
            </div>
            <div className='line'></div>
            <div className="final-total">
              <p className='heading'>Total Amount:</p>
              <p className='heading'>₹ {total}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default HostelFees