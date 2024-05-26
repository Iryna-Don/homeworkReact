import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../Post/PostComponent";
import {requests} from "../../services/dummyjson.api.service";

interface IProps {
    allPostsById:IPostModel[];
}

const PostsComponent: FC<IProps> = ({allPostsById}) => {
    // const [posts, setPosts] = useState<IPostModel[]>([]);
    // useEffect(() => {
    //     requests.posts.getAllPosts().then(({data}) => setPosts(data.posts));
    // }, [])
    return (
        <div>
            {
                allPostsById.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;