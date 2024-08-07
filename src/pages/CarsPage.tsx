import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
// import {ICarWithAuth} from "../models/ICarWithAuth";
import CarsComponent from "../components/CarsComponent";
import {AxiosError} from "axios";
import {ICarsPaginated} from "../models/ICarsPaginated";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {
    const [tokens, setTokens] = useState<string>('');
    let navigate = useNavigate();
    const [query] = useSearchParams();
    const [carsPagination, setCarsPagination] = useState<ICarsPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: [],
    })
    // const [cars, setCars] = useState<ICarWithAuth[]>([]);
    // const [error, setError] = useState<string>('');
    useEffect(() => {
        apiService
            .getCars(query.get('page')||'1')
            .then(value => {
                setCarsPagination(value);
                // setCars(value.items);
            })
            .catch((error: AxiosError) => {
                if (!error?.response) {
                    console.log("No Server Response");
                }
                if (error && error?.response?.status === 401) {
                    // setError('ERROR! Unauthorized. ' + error.message);

                    apiService
                        .refresh()
                        .then(({data}) => {
                            console.log(data);
                            localStorage.setItem('tokenPair', JSON.stringify(data));
                            setTokens(data.toString());
                        })
                        // localStorage.setItem('tokenAccess', data.access);
                        // localStorage.setItem('tokenRefresh', data.refresh);

                        .catch((error: AxiosError) => {
                                if (error && error?.response?.status === 401) {
                                    return navigate('/');
                                }
                            }
                        )
                }
            })
    }, [tokens, query])

    return (
        <div>
            {/*<p style={{color: "red"}}>{error}</p>*/}
            {/*<CarsComponent allCars={cars}/>*/}
            {/*    ========================================== or ===================================================*/}
            <PaginationComponent next={carsPagination.next} prev={carsPagination.prev}/>
            <CarsComponent allCars={carsPagination.items}/>
        </div>
    )
}

export default CarsPage;