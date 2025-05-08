import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL, API_ENDPOINTS } from './apiConstants';
import UserModel from '../models/UserModel.js';
import { triggerAuthUpdate } from '../hooks/useAuth';

export const ApiCalls = {
    async handleLogin(email, password, navigate, setUser) {
        console.log("Logging in");
        try {
            const response = await axios
                .post(`${API_BASE_URL}${API_ENDPOINTS.login}`, {
                    email, password
                });
            console.log("Response: ", response);
            const user = new UserModel(response.data);
            
            user.saveToStorage();

            triggerAuthUpdate();
            toast.success("Logged in successfully!");
            navigate('/');
        } catch (error) {
            toast.error(`Login failed: ${error.response?.data?.message || error.message}`);
        }
    },

    async registerStudent(data, navigate) {
        console.log("Vale: ", data.userName, data.blockNumber, data.roomNumber);
        try {
            const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.register}`, {
                "authority": "1",
                "userName": data.userName,
                "firstName": data.firstName,
                "lastName": data.lastName,
                "phoneNo": data.phoneNo,
                "email": data.email,
                "password": data.password,
                "blockNumber": data.blockNumber,
                "roomNumber": data.roomNumber,
            });
            toast.success('User Created Successfully. Please enter the OTP to verify your account.');

            // Navigate to OTP screen with email
            navigate('/otp', { state: { email: data.email } });
        } catch (error) {
            toast.error(`Failed to register: ${error.response?.data?.message || error.message}`);
        }
    },

    async verifyOtp(email, otp, navigate) {
        try {
            await axios.post(`${API_BASE_URL}${API_ENDPOINTS.verifyOTP}`, { email, otp });
            toast.success('Account verified successfully');
            navigate('/login');
        } catch (error) {
            toast.error(`OTP verification failed: ${error.response?.data?.message || error.message}`);
        }
    },

    async createStaff(data, navigate) {
        try {
            await axios.post(`${API_BASE_URL}${API_ENDPOINTS.createStaff}`, {
                ...data,
                authority: '2',
            });
            toast.success('Staff Created Successfully');
            navigate(-1); // Go back
        } catch (error) {
            toast.error(`Failed to create staff: ${error.response?.data?.message || error.message}`);
        }
    },

    async createIssues(data, navigate) {
        try {
            await axios.post(`${API_BASE_URL}${API_ENDPOINTS.createIssues}`, data);
            toast.success('Issue Created Successfully');
            navigate(-1);
        } catch (error) {
            toast.error(`Failed to create issue: ${error.response?.data?.message || error.message}`);
        }
    },

    async createRoomChangeRequest(data, navigate) {
        try {
            await axios.post(`${API_BASE_URL}${API_ENDPOINTS.changeRequest}`, data);
            toast.success('Request Created Successfully');
            navigate(-1);
        } catch (error) {
            toast.error(`Unable to send request: ${error.response?.data?.message || error.message}`);
        }
    },

    async deleteFromDatabase(api, id, message, navigate) {
        try {
            await axios.delete(`${API_BASE_URL}${api}/${id}`);
            toast.success(message);
            navigate(-1);
        } catch (error) {
            toast.error(`Failed to delete: ${error.response?.data?.message || error.message}`);
        }
    },

    handleLogout(navigate) {
        localStorage.clear();
        toast.success('Logged out successfully');
      
        // Force update of auth state
        window.dispatchEvent(new Event('storage'));
      
        navigate('/login');
    },
};