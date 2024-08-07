import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../models/PaginatedPageModel";

interface IProps {
    prev: null | PaginatedPageModel,
    next: null | PaginatedPageModel,
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [queryParams, setQueryParams] = useSearchParams({page: '1'});
    const btnClickChangePage = (page: string) => {
        switch (page) {
            case'prev':
                setQueryParams({...prev});
                break;
            case 'next':
                setQueryParams({...next});
                break;
        }

    }

    return (
        <div>
            <button disabled={!prev} onClick={() => btnClickChangePage('prev')}>Previous</button>
            <button disabled={!next} onClick={() => btnClickChangePage('next')}>Next</button>
        </div>
    );
};

export default PaginationComponent;