// https://dummyjson.com/docs/users отримати та вивести інфу по всіх users.
// // Для запитів використовуємо axios та розносимо логіку в сервіси
//  компонентів : App - Users- User
// в компоненті User зробити кнопку при натисканні на яку відбувається state ліфтинг ід користувача
// в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера
// (https://dummyjson.com/docs/posts Get all posts by user id)

import React, {FC, useEffect, useState, useRef} from 'react';
import {requests} from "./Services/services.api";
import Users from "./Components/Users/Users";
import {IPost} from "./Interfaces/IPost";
import Post from "./Components/Post/Post";
import "./App.css";


const App: FC = () => {
    const [userId, setUserId] = useState<number>(0);
    const takePostsByUserId = (id: number) => {
        setUserId(id);
    };

    const firstRender = useRef(true);
    const [allPostsByUserId, setAllPostsByUserId] = useState<IPost[]>([])
    useEffect(() => {
        firstRender.current ? firstRender.current = false :
            requests.getAllPostsByUserId(userId).then(({data}) => {
                setAllPostsByUserId(data.posts);
            })
    }, [userId])
    console.log(allPostsByUserId);
    return (
        <div className={'wrapper'}>
            <div className={'users'}><Users takePostsByUserId={takePostsByUserId}/></div>
            <div className={'postsByUserId'}>
                {allPostsByUserId.map(({
                                           id,
                                           title,
                                           body,
                                           tags,
                                           reactions,
                                           views,
                                           userId
                                       }) => <Post key={id}
                                                   id={id}
                                                   title={title}
                                                   body={body}
                                                   tags={tags}
                                                   reactions={reactions}
                                                   views={views}
                                                   userId={userId}/>)}
            </div>
        </div>
    );
};

export default App;