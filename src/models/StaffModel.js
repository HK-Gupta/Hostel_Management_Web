class StaffModel {
    constructor(data) {
        this.id = data._id || data.id || '';
        this.authority = data.authority || '2';
        this.userName = data.userName || '';
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.jobRole = data.jobRole || '';
        this.phoneNo = data.phoneNo || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.createdAt = data.createdAt || '';
        this.updatedAt = data.updatedAt || '';
    }

    static fromJsonArray(jsonArray) {
        return jsonArray.map((item) => new StaffModel(item));
    }
}

export default StaffModel;