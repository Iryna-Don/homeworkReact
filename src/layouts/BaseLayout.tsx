import React, {createContext, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import {commentService, postService, userService} from "../services/apiService";
import {MyContext} from "../context/Context";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const BaseLayout = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data));
    }, []);

    return (
        <div>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users,
                    },
                    postStore: {
                        allPosts: posts,
                    },
                    commentStore: {
                        allComments: comments,
                    },
                }
            }>
                <HeaderComponent/>
                <Outlet/>
                <FooterComponent/>
            </MyContext.Provider>
        </div>
    );
};

export default BaseLayout;