export function feesModelFromJson(jsonStr) {
    const data = JSON.parse(jsonStr);
    return data.map(item => new FeesModel(item));
  }
  
  export class FeesModel {
    constructor({
      maintenanceCharge = '',
      parkingCharge = '',
      roomWaterCharge = '',
      roomCharge = '',
    } = {}) {
      this.maintenanceCharge = maintenanceCharge;
      this.parkingCharge = parkingCharge;
      this.roomWaterCharge = roomWaterCharge;
      this.roomCharge = roomCharge;
    }
  
    toJson() {
      return {
        maintenanceCharge: this.maintenanceCharge,
        parkingCharge: this.parkingCharge,
        roomWaterCharge: this.roomWaterCharge,
        roomCharge: this.roomCharge,
      };
    }
  }
  