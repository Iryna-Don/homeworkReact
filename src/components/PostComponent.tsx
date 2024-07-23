import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";

interface IProps {
    posts: IPost[],
}

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(({userId, id, title, body}) =>
                    <div key={id}>
                        <p>#{id}</p>
                        <p>#{userId} - {title}</p>
                        <p>{body}</p>
                    </div>)
            }
        </div>
    );
};

export default PostComponent;