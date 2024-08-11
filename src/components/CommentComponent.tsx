import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";
interface IProps{
    comment: ICommentModel;
}
const CommentComponent:FC<IProps> = ({comment:{id, name, body, postId, email }}) => {

    return (
        <div>
            #{postId} - {name}
            <p>{body}</p>
            <p>#User ID: {id} - email:{email}</p>
        </div>
    );
};

export default CommentComponent;