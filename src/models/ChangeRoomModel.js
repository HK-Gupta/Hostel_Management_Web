class ChangeRoomModel {
  constructor(data) {
    this.id = data._id || data.id || '';
    this.currentRoomNumber = data.currentRoomNumber || '';
    this.changeRoomNumber = data.changeRoomNumber || '';
    this.currentBlock = data.currentBlock || '';
    this.changeBlock = data.changeBlock || '';
    this.studentEmailId = data.studentEmailId || '';
    this.changeReason = data.changeReason || '';
    this.studentData = data.studentData ? new StudentModel(data.studentData) : null;
  }

  static fromJsonArray(jsonArray) {
    return jsonArray.map((item) => new ChangeRoomModel(item));
  }
}
export default ChangeRoomModel;

class StudentModel {
  constructor(data) {
    this.id = data._id || '';
    this.authority = data.authority || '';
    this.userName = data.userName || '';
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.phoneNo = data.phoneNo || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.blockNumber = data.blockNumber || '';
    this.roomNumber = data.roomNumber || '';
    this.verified = data.verified || false;
    this.otp = data.otp || null;
    this.otpExpiry = data.otpExpiry || null;
    this.createdAt = data.createdAt || '';
    this.updatedAt = data.updatedAt || '';
  }
}

// export default StudentModel;
