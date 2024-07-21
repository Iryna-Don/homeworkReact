import React, {useEffect, useState} from 'react';
import {IPost} from "../interfaces/IPost";
import {requests} from "../services/jsonplaceholderService";

const PostsByUserId = () => {
    const [userId, setUserId] = useState<number>(5);
    const [allPostsByUserId, setAllPostsByUserId] = useState<IPost[]>([]);
    useEffect(() => {
        requests.postsByUserId.getPostsByUserId(userId).then(({data}) => {
            setAllPostsByUserId(data);
            console.log(data);
        })
    }, [userId]);

    return (
        <ul>
            {allPostsByUserId.map(({title, id}) => <li key={id}>{title}</li>)}
        </ul>
    );
};

export default PostsByUserId;