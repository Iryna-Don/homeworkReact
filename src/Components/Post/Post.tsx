import React, {FC} from 'react';
import {IPost} from "../../Interfaces/IPost";

const Post: FC<IPost> = ({
                             id,
                             title,
                             body,
                             tags,
                             reactions,
                             views,
                             userId,
                         },
) => {
    return (
        <div>
            <p>userId: {userId}</p>
            <p>Theme: {title}</p>
            <p>{body}</p>
            <span>Dislikes: {reactions.dislikes} </span>
            <span>Likes: {reactions.likes} </span>
            <span>Views: {views}</span>
        </div>
    );
};

export default Post;