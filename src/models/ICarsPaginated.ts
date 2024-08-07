import {ICarWithAuth} from "./ICarWithAuth";
import {PaginatedPageModel} from "./PaginatedPageModel";

export interface ICarsPaginated {
    total_items: number,
    total_pages: number,
    prev: null | PaginatedPageModel,
    next: null | PaginatedPageModel,
    items: ICarWithAuth[],
}
