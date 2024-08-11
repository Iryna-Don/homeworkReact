import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
interface IProps{
    post:IPostModel;
}
const PostComponent:FC<IProps> = ({post:{id, title, body, userId }}) => {
    return (
        <div>
            #{id} - Title: {title}
            <div>{body}</div>
            <p>User ID: {userId}</p>
        </div>
    );
};

export default PostComponent;