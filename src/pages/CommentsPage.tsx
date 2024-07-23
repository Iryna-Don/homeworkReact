import React, {useEffect, useState} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IComment} from "../interfaces/IComment";
import CommentComponent from "../components/CommentComponent";

const CommentsPage = () => {
    const[allComments, setAllComments]=useState<IComment[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllComments().then(({data}) => {
            setAllComments(data);
        })
    }, []);

    return (
        <div>
            <CommentComponent comments={allComments}/>
        </div>
    );
};

export default CommentsPage;