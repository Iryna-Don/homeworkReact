import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
import {ICarWithAuth} from "../models/ICarWithAuth";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);
    useEffect(() => {
        apiService.getCars().then(value => {
            setCars(value.items);
        })
    }, [])

    return (
        <div>
            <CarsComponent allCars={cars}/>
        </div>
    )
}

export default CarsPage;