import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & { children?: React.ReactNode };

const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <>
            <div>
                {user.id}
                {user.firstName} {user.lastName}
            </div>
            <button>Get Posts {user.firstName} {user.lastName}</button>
        </>
    );
};

export default UserComponent;