import React, {useState, useEffect} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IUser} from "../interfaces/IUser";
// import {Outlet} from "react-router-dom";
import styles from "./usersPage.module.css"
import PaginationComponent from "../components/PaginationComponent";
import UsersComponent from "../components/UsersComponent";
import {useSetPaginationLimit} from "../hooks/useSetPaginationLimit";

const UsersPage = () => {
    const [limit, skip, page] = useSetPaginationLimit(2);

    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllUsers(skip, limit).then(({data}) => {
            setAllUsers(data);
        })
    }, [page]);
    return (<>
            <PaginationComponent/>
            <br/>
            <div className={styles.wrap}>
                <UsersComponent users={allUsers}/>
                {/*<Outlet/>*/}
            </div>
        </>
    );
};

export default UsersPage;