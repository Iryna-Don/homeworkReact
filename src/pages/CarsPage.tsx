import React, {useEffect} from 'react';
import {apiService} from "../services/api.service";

const CarsPage = () => {
    useEffect(() => {
        apiService.getCars().then(value =>
            console.log(value));
        },[])

    return (
        <div>
            Cars Page
        </div>
    )
}

export default CarsPage;