import React, {useEffect, useState} from 'react';
import PostComponent from "../components/PostComponent";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IPost} from "../interfaces/IPost";

const PostsPage = () => {
    const[allPosts, setAllPosts]=useState<IPost[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllPosts().then(({data}) => {
            setAllPosts(data);
        })
    }, []);

    return (
        <div>
            <PostComponent posts={allPosts}/>
        </div>
    );
};

export default PostsPage;