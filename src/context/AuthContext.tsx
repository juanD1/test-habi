import React, { createContext, useEffect, useState } from "react";
import { app } from "firebase/config";
import { CurrentUser, FirebaseUser } from "types/users";

export type Props = {
  children: JSX.Element;
};

const initialValue: CurrentUser = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  providerId: "",
  uid: "",
};

const AuthContext = createContext(initialValue);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<
    FirebaseUser | CurrentUser | any
  >(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <Provider value={currentUser?.providerData[0]}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
