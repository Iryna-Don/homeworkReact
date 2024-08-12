import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    favUser: IUserModel | null,
    children?:string,
}

const SideBar: FC<IProps> = ({favUser}) => {
    return (
        <div>
            <hr/>
            {favUser?.name}
            <hr/>
        </div>
    );
};

export default SideBar;