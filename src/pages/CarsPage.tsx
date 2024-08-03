import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
import {ICarWithAuth} from "../models/ICarWithAuth";
import CarComponent from "../components/CarComponent";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);
    useEffect(() => {
        apiService.getCars().then(value => {
            setCars(value.items);
        })
    }, [])

    return (
        <div>
            <CarComponent allCars={cars}/>
            {cars.map(car=><div>{car.id}: {car.brand} - {car.price} <p><img src={car?.photo} alt={car.brand}/></p></div>)}
        </div>
    )
}

export default CarsPage;