import {useSearchParams} from "react-router-dom";

export const useSetPaginationLimit = (limit:number) => {
    let [searchParams] = useSearchParams();
    let page = +(searchParams.get('page') || 0);
    let skip: number;
    if (page < 2) {
        skip = 0
    } else {
        skip = (page - 1) * limit;
    }
    return [limit, skip, page];
}