import React, {useEffect, useState} from 'react';
import {IPost} from "../interfaces/IPost";
import {requests} from "../services/jsonplaceholderService";
import {Link} from "react-router-dom";

const Posts = () => {
    const [allPosts, setAllPosts] = useState<IPost[]>([]);
    const [limit, setLimit] = useState<number>(100);
    const [skip, setSkip] = useState<number>(0);

    useEffect(() => {
        requests.posts.getAllPosts(limit, skip).then(({data}) => {
            setAllPosts(data);
            console.log(data)
        })
    }, [limit, skip]);
    return (
        <div>
            {allPosts.map(({id, title}) => <div key={id}>
                    <p>#{id} - {title}</p>
                    <Link to={'../postIdComments?postId=' + id}>
                        <button onClick={
                            () => {
                                console.log(id)
                            }
                        }
                        >
                            To Comments
                        </button>
                    </Link>
                </div>
            )}
        </div>

    )
}

export default Posts;