import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void;
        toFavourite: (obj: IUserModel) => void,
        favouriteUser: IUserModel | null,
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void;

    },
    commentStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void;

    },
};
