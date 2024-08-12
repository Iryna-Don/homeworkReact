import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import {commentService, postService, userService} from "../services/apiService";
import SideBar from "../components/SideBar";
import {useStore} from "../store/store";

const BaseLayout = () => {
    const {
        userStore,
        userStore:{favouriteUser},
        postStore,
        commentStore
    } = useStore()
    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComments().then(value => commentStore.loadComments(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <SideBar favUser={favouriteUser}/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default BaseLayout;