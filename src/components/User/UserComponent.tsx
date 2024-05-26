import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

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
            <button onClick={onclickHandler}>Show Posts {user.firstName} {user.lastName}</button>
            <hr/>

        </>
    );
};

export default UserComponent;