import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CommentComponent from "../components/CommentComponent";
import {IComment} from "../interfaces/IComment";
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
const CommentsByPostIdPage = () => {
    const {postId} = useParams();
    const [commentsByPostId, setCommentsByPostId] = useState<IComment[]>([]);
    useEffect(() => {
        jsonplaceholderService.getCommentsByPostId(Number(postId)).then(({data}) => {
            setCommentsByPostId(data);
        })
    }, [postId]);

    return (
        <div>
            <CommentComponent comments={commentsByPostId}/>
        </div>
    );
};

export default CommentsByPostIdPage;