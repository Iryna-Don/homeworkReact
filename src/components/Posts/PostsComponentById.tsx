import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../Post/PostComponent";

interface IProps {
    allPostsById:IPostModel[];
}

const PostsComponentById: FC<IProps> = ({allPostsById}) => {
    return (
        <div>
            {
                allPostsById.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponentById;