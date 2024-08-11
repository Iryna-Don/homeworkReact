import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type StoreType = {
    userStore: {
        allUsers: IUserModel[],
    },
    postStore: {
        allPosts: IPostModel[],
    },
    commentStore: {
        allComments: ICommentModel[],
    },
};
