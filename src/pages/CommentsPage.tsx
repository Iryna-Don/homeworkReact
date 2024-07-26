import React, {useEffect, useState} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IComment} from "../interfaces/IComment";
import CommentsComponent from "../components/CommentsComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import {useSetPaginationLimit} from "../hooks/useSetPaginationLimit";

const CommentsPage = () => {
    const [limit, skip, page] = useSetPaginationLimit(30);

    const [allComments, setAllComments] = useState<IComment[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllComments(skip, limit).then(({data}) => {
            setAllComments(data);
        })
    }, [page]);

    return (<>
            <PaginationComponent/>
            <br/>
            <div>
                <CommentsComponent comments={allComments}/>
            </div>
        </>
    );
};

export default CommentsPage;