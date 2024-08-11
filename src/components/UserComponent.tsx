import React, {FC, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useMyContextProvider} from "../context/Context";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {toFavourite}} = useMyContextProvider();
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <div>
            {user.id} - {user.name} - {user.username} - {user.email}
            <button disabled={toggle} onClick={() => {
                toFavourite(user);
                setToggle(!toggle)
            }}>To Favourite
            </button>
        </div>
    );
};

export default UserComponent;