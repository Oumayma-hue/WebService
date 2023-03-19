export interface User {
  uid: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  role: {
    val: string;
  }
  isEmailVerified: boolean; // add this property
}
