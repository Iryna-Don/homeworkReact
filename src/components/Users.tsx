import React, {useEffect, useState} from 'react';
import {IUser} from "../interfaces/IUser";
import {requests} from "../services/jsonplaceholderService";
import {Link} from "react-router-dom";

const Users = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    const [limit, setLimit] = useState<number>(10);
    const [skip, setSkip] = useState<number>(0);

    useEffect(() => {
        requests.users.getAllUsers(limit, skip).then(({data}) => {
            setAllUsers(data);
            console.log(data)
        })
    }, [limit, skip]);


    return (
        <div>
            {allUsers.map(({id, name}) => <div key={id}>
                <p>#{id} - {name}</p>
                <Link to={'../userIdPosts?userId=' + id}>
                    <button onClick={
                        () => {
                            console.log(id)
                        }
                    }
                    >
                        To Posts
                    </button>
                </Link>

            </div>)}
        </div>
    );
};

export default Users;


