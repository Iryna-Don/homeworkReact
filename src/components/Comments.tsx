import React, {FC, useEffect, useState} from 'react';
import {requests} from "../services/jsonplaceholderService";
import {IComment} from "../interfaces/IComment";

const Comments:FC = () => {
    const [allComments, setAllComments] = useState<IComment[]>([]);
    const [limit, setLimit] = useState<number>(500);
    const [skip, setSkip] = useState<number>(0);

    useEffect(() => {
        requests.comments.getAllComments(limit, skip).then(({data}) => {
            setAllComments(data);
            console.log(data)
        })
    }, [limit, skip]);


    return (
        <div>
            {allComments.map(({id, name, body}) => <div key={id}>
                <p>#{id} - {name}</p>
                <p>{body}</p>
            </div>)}
        </div>
    );
};

export default Comments;