import React, {FC} from 'react'
import {IUser} from "../interfaces/IUser";
import {Link} from "react-router-dom";
interface IProps {
    users:IUser[],
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user=><div key={user.id}>#{user.id} - <Link to={(user.id).toString()} state={user}>{user.name}</Link></div>)
            }
        </div>
    );
};

export default UsersComponent;