import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    let [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let page = +(searchParams.get('page') || 1);
    let [btnPrevDisabled, setBtnPrevDisabled] = useState<boolean>(true);


    const prevPage = () => {
        let prevPage = page - 1;
        if (prevPage === 0 || prevPage === 1) {
            setBtnPrevDisabled(true);
            setSearchParams({page: '1'})
        } else {
            setSearchParams({page: prevPage.toString()})
        }
    }
    const nextPage = () => {
        setBtnPrevDisabled(false);
        let nextPage = page + 1;
        setSearchParams({page: nextPage.toString()});
    }

    return (
        <div>
            <button disabled={btnPrevDisabled} onClick={prevPage}>
                Prev
            </button>

            <button onClick={nextPage}>
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;