import { User } from "firebase/app";

export type FirebaseUser = User | null;

export type CurrentUser = {
  displayName: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
  providerId: string;
  uid: string;
};
