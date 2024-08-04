import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarsPaginated {
    total_items: number,
    total_pages: number,
    prev: number | null,
    next: number | null,
    items: ICarWithAuth[],
}
