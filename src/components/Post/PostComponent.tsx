import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post:IPostModel;
}
type IPropsType = IProps & {children?:React.ReactNode};
const PostComponent: FC<IPropsType>= ({post}) => {
    return (
        <div>
            <p><i>{post.id}</i></p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span>Likes: {post.reactions.likes}</span>
        </div>
    );
};

export default PostComponent;