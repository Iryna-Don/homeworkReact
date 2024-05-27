import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "../../modulesCss/user.module.css"

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (userId: number) => void };

const UserComponent: FC<IPropsType> = ({user, lift}) => {
    const onclickHandler = () => {
        if (lift) {
            lift(user.id);
        }
    }
    return (
        <>
            <div>
                {user.id}
                {user.firstName} {user.lastName}
            </div>
            <button className={styles.btnShowPosts} onClick={onclickHandler}>Show Posts {user.firstName} {user.lastName}</button>
            <br/>
            <br/>
            <hr/>
            <hr/>

        </>
    );
};

export default UserComponent;