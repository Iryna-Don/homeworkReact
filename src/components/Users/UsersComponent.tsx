import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {requests} from "../../services/dummyjson.api.service";
import UserComponent from "../User/UserComponent";
type IPropsType = {lift?: (userId: number) => void}
const UsersComponent: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        requests.users.getAllUsers().then(({data}) => setUsers(data.users));
    }, [])
    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} user={user} lift={lift}/>))
            }
        </div>
    );
};

export default UsersComponent;