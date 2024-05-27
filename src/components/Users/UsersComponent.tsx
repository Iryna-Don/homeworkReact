import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {requests} from "../../services/dummyjson.api.service";
import UserComponent from "../User/UserComponent";

type IPropsType = { lift?: (userId: number) => void }


const UsersComponent: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        requests.users.getAllUsers(limit, skip).then(({data}) => setUsers(data.users));
    }, [limit, skip])
    return (
        <div>
            <button onClick={() => {
                setSkip(skip - limit);
            }}>Previous {limit}</button>

            <button onClick={() => {
                setSkip(skip + limit);
            }}>Next {limit}</button>

            {
                users.map(user => (<UserComponent key={user.id} user={user} lift={lift}/>))
            }
        </div>
    );
};

export default UsersComponent;