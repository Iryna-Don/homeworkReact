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
                    <div key={id}>
                        <p>#{id}</p>
                        <p>#{postId} - {body}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CommentComponent;