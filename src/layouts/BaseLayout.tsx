import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import {commentService, postService, userService} from "../services/apiService";

const BaseLayout = () => {
    useEffect(()=>{
        userService.getUsers().then(value => console.log(value.data));
        postService.getPosts().then(value => console.log(value.data));
        commentService.getComments().then(value => console.log(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default BaseLayout;