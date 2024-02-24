import React from "react";
import StorageService from "../../services/StorageService";
import styles from "./index.module.scss";
const AllProductsPage = () => {

  const user = StorageService?.user?.value;

  return (
    <div className={styles.products}>
      {user?.email?
          <div>
            <h1>My details</h1>
            <h3>First Name: <span className={styles.text}>{user?.firstName}</span></h3>
            <h3>Last Name: <span className={styles.text}>{user?.lastName}</span></h3>
            <h3>Email: <span className={styles.text}>{user?.email}</span></h3>
            <h3>Phone: <span className={styles.text}>{user?.phone}</span></h3>
          </div>
          :
          <h1>Test task for BeeBleet</h1>
      }
    </div>
  );
};

export default AllProductsPage;
