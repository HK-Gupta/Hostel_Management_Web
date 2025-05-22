export default class UserModel {
  constructor({
    id = '',
    authority = '',
    userName = '',
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    phoneNo = '',
    blockNumber = '',
    roomNumber = '',
  } = {}) {
    this.id = id;
    this.authority = authority;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNo = phoneNo;
    this.blockNumber = blockNumber;
    this.roomNumber = roomNumber;
  }

  static fromStorage() {
    const userData = JSON.parse(localStorage.getItem('user')); 
    if (!userData) {
      return new UserModel(); 
    }
    return new UserModel(userData);
  }

  saveToStorage() {
    localStorage.setItem('user', JSON.stringify(this)); 
  }

  static clearStorage() {
    localStorage.removeItem('user');
  }
}
