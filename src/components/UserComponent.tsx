import React, {FC} from 'react'
import {IUser} from "../interfaces/IUser";
interface IProps {
    users:IUser[],
}
const UserComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user=><div key={user.id}>#{user.id} - {user.name}</div>)
            }
        </div>
    );
};

export default UserComponent;