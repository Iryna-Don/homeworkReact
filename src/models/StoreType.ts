import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        toFavourite: (obj:IUserModel)=>void,
    },
    postStore: {
        allPosts: IPostModel[],
    },
    commentStore: {
        allComments: ICommentModel[],
    },
};
