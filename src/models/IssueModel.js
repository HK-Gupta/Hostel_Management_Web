class IssueModel {
    constructor(data) {
        this.id = data._id || data.id || '';
        this.roomNumber = data.roomNumber || '';
        this.blockNumber = data.blockNumber || '';
        this.userName = data.userName || '';
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.email = data.email || '';
        this.phoneNo = data.phoneNo || '';
        this.issue = data.issue || '';
        this.comment = data.comment || '';
        this.createdAt = data.createdAt || '';
        this.updatedAt = data.updatedAt || '';
    }

    static fromJsonArray(jsonArray) {
        return jsonArray.map((item) => new IssueModel(item));
    }
}

export default IssueModel;