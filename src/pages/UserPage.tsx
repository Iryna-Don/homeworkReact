import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IUser} from "../interfaces/IUser";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import styles from "./userPage.module.css"
import {IPost} from "../interfaces/IPost";
import PostComponent from "../components/PostComponent";


const UserPage = () => {
    const {userId} = useParams();
    const [userByUserId, setUserByUserId] = useState<IUser>();
    useEffect(() => {
        jsonplaceholderService.getUserByUserId(Number(userId)).then(({data}) => {
            setUserByUserId(data);
        })
    }, [userId]);

    // ============================ display all posts of user by userId =======================================
    const [postsByUserId, setPostsByUserId] = useState<IPost[]>([])
    useEffect(() => {
        jsonplaceholderService.getPostsByUserId(Number(userId)).then(({data}) => {
            setPostsByUserId(data);
        })
    }, [userId]);

    return (<div className={styles.wrap}>
            <div className={styles.userCard}>
                <h4>User Id: {userByUserId?.id}</h4>
                <h4>Name: {userByUserId?.name}</h4>
                <h4>Username: {userByUserId?.username}</h4>
                <h4>E-Mail: {userByUserId?.email}</h4>
                <h4>Address:</h4>
                <p>Street: {userByUserId?.address.street}</p>
                <p>Suite: {userByUserId?.address.suite}</p>
                <p>City: {userByUserId?.address.city}</p>
                <p>Zipcode: {userByUserId?.address.zipcode}</p>
                <h4>Geo:</h4>
                <p>{userByUserId?.address.geo.lat}</p>
                <p>{userByUserId?.address.geo.lng}</p>
                <h4>Phone: {userByUserId?.phone}</h4>
                <h4>Website: {userByUserId?.website}</h4>
                <h4>Company:</h4>
                <p>Company Name: {userByUserId?.company.name}</p>
                <p>Company catchPhrase: {userByUserId?.company.catchPhrase}</p>
                <p>Company bs: {userByUserId?.company.bs}</p>
            </div>
            {/*============================ display all posts of user by userId =======================================*/}
            <div>
                <PostComponent posts={postsByUserId}/>
            </div>
        </div>
    );
};

export default UserPage;