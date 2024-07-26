import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IPost} from "../interfaces/IPost";
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const PostsPage = () => {
    let [searchParams] = useSearchParams();
    let page = +(searchParams.get('page') || 0);
    let skip: number;
    let limit: number = 10;
    if (page < 2) {
        skip = 0
    } else {
        skip = (page - 1) * limit;
    }

    const [allPosts, setAllPosts] = useState<IPost[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllPosts(skip, limit).then(({data}) => {
            setAllPosts(data);
        })
    }, [page]);

    return (
        <div>
            <PaginationComponent/>
            <br/>
            <PostsComponent posts={allPosts}/>
        </div>
    );
};

export default PostsPage;