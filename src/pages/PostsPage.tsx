import React, {useEffect, useState} from 'react';
import PostComponent from "../components/PostComponent";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IPost} from "../interfaces/IPost";
import PaginationComponent from "../components/PaginationComponent";

const PostsPage = () => {
    const[allPosts, setAllPosts]=useState<IPost[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllPosts().then(({data}) => {
            setAllPosts(data);
        })
    }, []);

    return (
        <div>
            <PaginationComponent/>
            <br/>
            <PostComponent posts={allPosts}/>
        </div>
    );
};

export default PostsPage;