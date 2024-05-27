import styles from "../../modulesCss/users.module.css"
import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {requests} from "../../services/dummyjson.api.service";
import UserComponent from "../User/UserComponent";
type IPropsType = { lift?: (userId: number) => void }

const UsersComponent: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    const [limit, setLimit] = useState(7);
    const [skip, setSkip] = useState(0);
    const [total, setTotal]=useState(0)


    useEffect(() => {
        requests.users.getAllUsers(limit, skip).then(({data}) => {
            setUsers(data.users);
            setTotal(data.total);
        });
    }, [limit, skip])
    return (
        <div>
            <button disabled={skip<=0} className={styles.btnPrevNext}  onClick={() => {
                setSkip(skip - limit);
            }}>Previous {limit}</button>

            <button disabled={skip>total-limit} className={styles.btnPrevNext} onClick={() => {
                setSkip(skip + limit);
            }}>Next {limit}</button>
            <br/>
            <br/>
            {
                users.map(user => (<UserComponent key={user.id} user={user} lift={lift}/>))
            }
        </div>
    );
};

export default UsersComponent;