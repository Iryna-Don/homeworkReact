import {StoreType} from "../models/StoreType";
import {create} from "zustand";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";


export const useStore = create<StoreType>()(set => ({
        userStore: {
            allUsers: [],
            loadUsers: (users: IUserModel[]) => {
                return set((state) => {
                    return {
                        ...state,
                        userStore: {...state.userStore, allUsers: users}
                    }
                })
            },
            favouriteUser: null,
            toFavourite: (obj: IUserModel) => {
                return set(state => {
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favouriteUser: obj,
                        }
                    }
                })
            },
        },
        postStore: {
            allPosts: [],
            loadPosts: (posts: IPostModel[]) => {
                return set((state) => {
                    return {
                        ...state,
                        postStore: {...state.postStore, allPosts: posts}
                    }
                })
            },

        },
        commentStore: {
            allComments: [],
            loadComments: (comments: ICommentModel[]) => {
                return set((state) => {
                    return {
                        ...state,
                        commentStore: {...state.commentStore, allComments: comments}
                    }
                })
            },

        },
    }
))

