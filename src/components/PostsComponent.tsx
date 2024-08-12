import React from 'react';
import PostComponent from "./PostComponent";
import {useStore} from "../store/store";

const PostsComponent = () => {
    const {postStore:{allPosts}} = useStore();
    return (
        <div>
            {
                allPosts.map(post=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;