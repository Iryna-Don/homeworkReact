import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IPost} from "../interfaces/IPost";
import PaginationComponent from "../components/PaginationComponent";
import {useSetPaginationLimit} from "../hooks/useSetPaginationLimit";

const PostsPage = () => {
    const [limit, skip, page] = useSetPaginationLimit(10);

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