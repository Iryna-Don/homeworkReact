import React, {FC} from 'react'
import {IUser} from "../interfaces/IUser";
interface IProps {
    users:IUser[],
}
const UserComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user=><li>#{user.id} - {user.name}</li>)
            }
        </div>
    );
};

export default UserComponent;