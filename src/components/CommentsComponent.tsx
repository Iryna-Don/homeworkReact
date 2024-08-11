import React from 'react';
import {useMyContextProvider} from "../context/Context";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const {commentStore: {allComments}} = useMyContextProvider();

    return (
        <div>
            {allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;