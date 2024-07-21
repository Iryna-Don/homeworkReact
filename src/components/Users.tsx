import React, {useEffect, useState} from 'react';
import {IUser} from "../interfaces/IUser";
import {requests} from "../services/jsonplaceholderService";

const Users = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [skip, setSkip] = useState<number>(0);

    useEffect(() => {
        requests.users.getAllUsers(limit, skip).then(({data}) => {
            setAllUsers(data);
            setTotal(data.length);
        })
    }, [limit, skip]);

    return (
        <div>
            {allUsers.map(({id,name})=><div key={id}>#{id} - {name}</div>)}
        </div>
    );
};

export default Users;


