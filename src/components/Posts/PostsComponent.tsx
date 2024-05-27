import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../Post/PostComponent";
import {requests} from "../../services/dummyjson.api.service";

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        requests.posts.getAllPosts(30,0).then(({data}) => setPosts(data.posts));
    }, [])
    return (
        <div>
            {
                posts.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;