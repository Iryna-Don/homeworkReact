import React from 'react';
import {useMyContextProvider} from "../context/Context";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useMyContextProvider();
    return (
        <div>
            {
                allPosts.map(post=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;