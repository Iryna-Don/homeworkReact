import {IPost} from "./IPost";

export interface IAxiosPosts {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
}