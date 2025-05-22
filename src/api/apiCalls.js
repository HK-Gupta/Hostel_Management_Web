import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL, API_ENDPOINTS } from './apiConstants';
import UserModel from '../models/UserModel.js';
import { triggerAuthUpdate } from '../hooks/useAuth';
import {feesModelFromJson} from '../models/FeesModel.js'
import RoomAvailabilityModel from '../models/RoomModel.js'
import ChangeRoomModel from '../models/ChangeRoomModel.js'
import IssueModel from '../models/IssueModel.js'
import StaffModel from '../models/StaffModel.js'

export const ApiCalls = {
    async handleLogin(email, password, navigate, setLoading) {
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
        } finally {
            setLoading(false)
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
        } finally {
            setLoading(false);
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

    handleLogout(navigate) {
        localStorage.clear();
        toast.success('Logged out successfully');
      
        // Force update of auth state
        window.dispatchEvent(new Event('storage'));
      
        navigate('/login');
    },

    async fetchFeesDetails(setFeesModel, setLoading) {
        console.log('Getting fees Details');
        try {
          const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.fees}`);
          if (response.status === 200) {
            const models = feesModelFromJson(JSON.stringify(response.data));
            console.log(models);
            setFeesModel(models);
          }
        } catch (e) {
          console.error("Error fetching fees: ", e);
        } finally {
            setLoading(false);
        }
    },

    async fetchRoomAvailabilityDetails(setRooms, setLoading) {
        console.log('Getting available rooms Details');
        try {
            const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.roomAvailability}`);
            if (response.status === 200) {
                const roomModels = RoomAvailabilityModel.listFromJson(response.data);
                console.log("Room data:", roomModels);
                setRooms(roomModels);
            }
        } catch (error) {
            console.error("Error fetching room availability:", error);
        } finally {
            setLoading(false);
        }
    },

    async fetchRoomChangeRequests(setChangeRequests, setLoading) {
        console.log('Getting room change request Details');
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.changeRequest}`);
            
            if (response.status === 200) {
                const requestModels = ChangeRoomModel.fromJsonArray(response.data);

                for (let request of requestModels) {
                if (request.studentEmailId) {
                    const userRes = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.studentSearch}?email=${request.studentEmailId}`);
                    if (userRes.status === 200) {
                    request.studentData = userRes.data;
                    }
                }
                console.log(requestModels);
                setChangeRequests(requestModels);
            }
            
        } else {
            toast.error(`Failed to fetch room change requests: ${response.status}`);
        }
        } catch (err) {
            toast.error(`Error fetching requests: ${err.message}`);
        } finally {
            setLoading(false);
        }
    },

    async fetchAllIssues(setRooms, setLoading) {
        console.log('Getting all issues Details');
        try {
            const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.createIssues}`);
            if (response.status === 200) {
                const issueModels = IssueModel.fromJsonArray(response.data);
                console.log("Issue data:", issueModels);
                setRooms(issueModels);
            }
        } catch (error) {
            console.error("Error fetching all issues:", error);
        } finally {
            setLoading(false);
            return;
        }
    },


    async createStaff(data, navigate, setLoading) {
        console.log("Creating staff");
        try {
            const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.createStaff}`, {
                ...data,
                authority: '2',
            });
            toast.success('Staff Created Successfully');
            console.log("Response:", response.status, response.data);
            navigate(-1); 
        } catch (error) {
            toast.error(`Failed to create staff: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    },

    async getAllStaff(setStaff, setLoading) {
        console.log('Getting all staff Details');
        try {
            const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.createStaff}`);
            if (response.status === 200) {
                const staffModel = StaffModel.fromJsonArray(response.data);
                console.log("Staff data:", staffModel);
                setStaff(staffModel);
            }
        } catch (error) {
            console.error("Error fetching all issues:", error);
        } finally {
            setLoading(false);
            return;
        }
    },

    async createIssues(data, navigate, setLoading) {
        console.log("Creating issue");
        try {
            await axios.post(`${API_BASE_URL}${API_ENDPOINTS.createIssues}`, data);
            toast.success('Issue Created Successfully');
            navigate(-1);
        } catch (error) {
            toast.error(`Failed to create issue: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    },

    async createRoomChangeRequest(data, navigate, setLoading) {
        console.log("Creating change request");
        try {
            console.log(`${API_BASE_URL}${API_ENDPOINTS.changeRequest}`);
            const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.changeRequest}`, data);
            toast.success('Request Created Successfully');
            console.log("Response:", response.status, response.data);
            navigate('/'); 
        } catch (error) {
            toast.error(`Unable to send request: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    },

    async deleteFromDatabase(api, id, message, navigate, setLoading) {
        try {
            await axios.delete(`${API_BASE_URL}${api}/${id}`);
            toast.success(message);
            navigate(-1);
        } catch (error) {
            toast.error(`Failed to delete: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    },

    
};