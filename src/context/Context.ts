import {StoreType} from "../models/StoreType";
import {createContext, useContext} from "react";

const context: StoreType = {
    userStore: {
        allUsers: [],
        toFavourite: ()=>{},
    },
    postStore: {
        allPosts: [],
    },
    commentStore: {
        allComments: [],
    },
};
export const MyContext = createContext<StoreType>(context);
export const useMyContextProvider = (): StoreType => useContext(MyContext);
