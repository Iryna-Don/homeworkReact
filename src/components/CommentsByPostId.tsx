import React, {useEffect, useState} from 'react';
import {requests} from "../services/jsonplaceholderService";
import {IComment} from "../interfaces/IComment";

const CommentsByPostId = () => {
    const [postId, setPostId] = useState<number>(13);
    const [allCommentsByPostId, setAllCommentsByPostId] = useState<IComment[]>([]);
    useEffect(() => {
        requests.commentsByPostId.getCommentsByPostId(postId).then(({data}) => {
            setAllCommentsByPostId(data);
            console.log(data);
        })
    }, [postId]);

    return (
        <ul>
            {allCommentsByPostId.map(({body, id}) => <li key={id}>{body}</li>)}
        </ul>
    );
};

export default CommentsByPostId;