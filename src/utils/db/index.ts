import { db } from "firebase/config";
import { Order } from "types/order";

const add = (payload: Order, callback?: () => void) => {
  return new Promise((resolve, reject) => {
    db.add(payload)
      .then((docRef) => {
        console.log("Document written: ", docRef);
        callback && callback();
        resolve(docRef);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        reject(error);
      });
  });
};

const get = () => {
  return new Promise((resolve, reject) => {
    db.get()
      .then(({ docs }: any) => {
        const data: Array<any> = [];
        docs.forEach((doc: any) => {
          if (doc.exists) {
            data.push(doc.data());
          }
        });
        resolve(data);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        reject(error);
      });
  });
};

const getByUserName = (currentUser: any) => {
  return new Promise((resolve, reject) => {
    db.where("userName", "==", currentUser.displayName)
      .get()
      .then(({ docs }: any) => {
        const data: Array<any> = [];
        docs.forEach((doc: any) => {
          if (doc.exists) {
            data.push(doc.data());
          }
        });
        resolve(data);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        reject(error);
      });
  });
};

export { add, get, getByUserName };
