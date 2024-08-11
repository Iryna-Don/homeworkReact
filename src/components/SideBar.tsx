import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    favouriteArr: IUserModel[],
    children?:string,
}

const SideBar: FC<IProps> = ({favouriteArr}) => {
    return (
        <div>
            {
                favouriteArr.map(item => <div key={item.id}>{item.username}</div>)
            }
        </div>
    );
};

export default SideBar;