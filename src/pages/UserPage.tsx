import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../interfaces/IUser";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import styles from "./userPage.module.css"
import {IPost} from "../interfaces/IPost";
import PostComponent from "../components/PostComponent";


const UserPage = () => {
    const location = useLocation();
    const state:IUser = location.state;
    console.log(state)

    // ============================ display all posts of user by userId =======================================
    const [postsByUserId, setPostsByUserId] = useState<IPost[]>([])
    useEffect(() => {
        jsonplaceholderService.getPostsByUserId(Number(state.id)).then(({data}) => {
            setPostsByUserId(data);
        })
    }, [state.id]);

    return (<div className={styles.wrap}>
            <div className={styles.userCard}>
                <h4>User Id: {state.id}</h4>
                    <h4>Name: {state.name}</h4>
                    <h4>Username: {state.username}</h4>
                    <h4>E-Mail: {state.email}</h4>
                    <h4>Address:</h4>
                    <p>Street: {state.address.street}</p>
                    <p>Suite: {state.address.suite}</p>
                    <p>City: {state.address.city}</p>
                    <p>Zipcode: {state.address.zipcode}</p>
                    <h4>Geo:</h4>
                    <p>{state.address.geo.lat}</p>
                    <p>{state.address.geo.lng}</p>
                    <h4>Phone: {state.phone}</h4>
                    <h4>Website: {state.website}</h4>
                    <h4>Company:</h4>
                    <p>Company Name: {state.company.name}</p>
                    <p>Company catchPhrase: {state.company.catchPhrase}</p>
                    <p>Company bs: {state.company.bs}</p>
            </div>
            {/*============================ display all posts of user by userId =======================================*/}
            <div>
                <PostComponent posts={postsByUserId}/>
            </div>
        </div>
    );
};

export default UserPage;