import React, { useRef, useState } from 'react';
import './Otp.css';
import CustomButton from '../../CustomButton/CustomButton.jsx';
import { ApiCalls } from '../../../api/apiCalls.js';
import { useNavigate, useLocation } from 'react-router-dom';

function Otp() {
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email;  

    const handleChange = (element, index) => {
        const val = element.target.value;
        if (/^[0-9]?$/.test(val)) {
            const newOtp = [...otp];
            newOtp[index] = val;
            setOtp(newOtp);
            if (val && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const submitOtp = () => {
        const otpString = otp.join("");
        console.log(otpString, email);
        ApiCalls.verifyOtp(email, otpString, navigate);
    };

    return (
        <div className='otp'>
            <div className="main-div">
                <h3>Verification</h3>
                <p>A 6-digit PIN has been sent to your email address.</p>
                <p>Please enter the PIN below to complete your registration.</p>
                <div className="otp-set">
                    <div className='each-box'>
                        {otp.map((_, index) => (
                            <input
                                className='input-box'
                                key={index}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </div>
                </div>
                <CustomButton btnText='Continue' onClick={submitOtp} />
            </div>
        </div>
    );
}

export default Otp;
