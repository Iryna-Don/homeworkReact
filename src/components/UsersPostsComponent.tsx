import React, {useEffect, useMemo, useState} from 'react';
import {useMyContextProvider} from "../context/Context";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UsersPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useMyContextProvider();

    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([]);

    const usersWithPosts = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => user.id === post.userId)}
        })
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUserWithPostsState(usersWithPosts);
    }, [usersWithPosts]);

    return (
        <div>
            {userWithPostsState.map(value => <div key={value.id}><h3>{value.username}</h3>
                <div>{value.posts.map(post =>
                    <div key={post.id}><p>#Post: {post.id} {post.title}</p></div>)}</div>
            </div>)}
        </div>
    );
};

export default UsersPostsComponent;