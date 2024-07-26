import React, {useEffect, useState} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IComment} from "../interfaces/IComment";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    const[allComments, setAllComments]=useState<IComment[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllComments().then(({data}) => {
            setAllComments(data);
        })
    }, []);

    return (
        <div>
            <CommentsComponent comments={allComments}/>
        </div>
    );
};

export default CommentsPage;