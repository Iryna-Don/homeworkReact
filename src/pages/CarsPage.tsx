import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
// import {ICarWithAuth} from "../models/ICarWithAuth";
import CarsComponent from "../components/CarsComponent";
import {AxiosError} from "axios";
import {ICarsPaginated} from "../models/ICarsPaginated";

const CarsPage = () => {
    const [carsPagination, setCarsPagination] = useState<ICarsPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: [],
    })
    // const [cars, setCars] = useState<ICarWithAuth[]>([]);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        apiService
            .getCars()
            .then(value => {
                setCarsPagination(value);
                // setCars(value.items);
            })
            .catch((error: AxiosError) => {
                if (!error?.response) {
                    console.log("No Server Response");
                }
                if (error && error?.response?.status === 401) {
                    setError('ERROR! Unauthorized. ' + error.message);
                }
            })
    }, [])

    return (
        <div>
            <p style={{color: "red"}}>{error}</p>
            {/*<CarsComponent allCars={cars}/>*/}
        {/*    ========================================== or ===================================================*/}
            <CarsComponent allCars={carsPagination.items}/>

        </div>
    )
}

export default CarsPage;