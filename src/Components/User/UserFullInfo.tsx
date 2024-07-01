import React, {FC} from 'react';
import {IUser} from "../../Interfaces/IUser";
import styles from "../../modules/userInfo.module.css"

type UserFullInfoProps<T>=T&{takePostsByUserId:(id:number)=>void}&{children?:React.ReactNode};
const UserFullInfo: FC<UserFullInfoProps<IUser>>
    = ({
           id,
           firstName,
           lastName,
           maidenName,
           age,
           gender,
           email,
           phone,
           username,
           password,
           birthDate,
           image,
           bloodGroup,
           height,
           weight,
           eyeColor,
           hair,
           ip,
           address,
           macAddress,
           university,
           bank,
           company,
           ein,
           ssn,
           userAgent,
           crypto,
           role,
           takePostsByUserId

       }) => {
    return (
        <div className={styles.userFullInfoCard}>
            <div>idNumber={id}</div>
            <button onClick={()=>takePostsByUserId(id)}>All Posts of {lastName}</button>
        </div>
    );
};

export default UserFullInfo;