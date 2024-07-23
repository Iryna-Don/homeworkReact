import React, {FC} from 'react';
import {IComment} from "../interfaces/IComment";

interface IProps {
    comments: IComment[],
}

const CommentComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(({postId, id, body}) =>
                    <li>
                        <p>#{postId}</p>
                        <p>#{id} - {body}</p>
                    </li>
                )
            }
        </div>
    );
};

export default CommentComponent;