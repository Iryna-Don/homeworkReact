import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
interface IProps {
    user:IUserModel;
}
const UserComponent:FC<IProps> = ({user:{id, name, username, email}}) => {
    return (
        <div>
            {id} - {name} - {username} - {email}
        </div>
    );
};

export default UserComponent;