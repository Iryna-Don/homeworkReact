import React, {FC} from 'react';
import {IUser} from "../../Interfaces/IUser";
import styles from "../../modules/userInfo.module.css"
const UserShortInfo: FC<IUser>
    = ({
           id,
           firstName,
           lastName,
           age,
           email,
           phone,
           image,
           address,
           university,
           company,
           role,
       }) => {
    return (
        <div className={styles.userShortInfoCard}>

            <button onClick={()=>{}}>All Posts of {lastName}</button>
        </div>
    );
};

export default UserShortInfo;