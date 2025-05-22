class RoomAvailabilityModel {
  constructor({
    _id = null,
    roomNumber = null,
    roomCapacity = null,
    roomCurrentCapacity = null,
    roomType = null,
    roomStatus = null,
    blockNumber = null,
    createdAt = null,
    updatedAt = null,
    __v = null
  } = {}) {
    this.id = _id;
    this.roomNumber = roomNumber;
    this.roomCapacity = roomCapacity;
    this.roomCurrentCapacity = roomCurrentCapacity;
    this.roomType = roomType;
    this.roomStatus = roomStatus;
    this.blockNumber = blockNumber;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.v = __v;
  }

  static fromJson(json) {
    return new RoomAvailabilityModel(json);
  }

  static listFromJson(jsonArray) {
    return jsonArray.map(item => RoomAvailabilityModel.fromJson(item));
  }

  toJson() {
    return {
      _id: this.id,
      roomNumber: this.roomNumber,
      roomCapacity: this.roomCapacity,
      roomCurrentCapacity: this.roomCurrentCapacity,
      roomType: this.roomType,
      roomStatus: this.roomStatus,
      blockNumber: this.blockNumber,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      __v: this.v,
    };
  }
}

export default RoomAvailabilityModel;
