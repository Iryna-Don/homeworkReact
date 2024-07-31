import React from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../models/IUserModel";
import {joiResolver} from "@hookform/resolvers/joi";
import userRegistrValidator from "../validators/userRegistrValidator";
import {apiService} from "../services/api.service";

const RegistrationFormComponent = () => {
    const {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IUserModel>({mode: 'all', resolver: joiResolver(userRegistrValidator)});

    const registration = (data: IUserModel) => {
        console.log(data);
        apiService.saveUser(data).then(({data}) => {
            console.log(data);
            return
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                <input
                    type={'text'}
                    placeholder={'Enter your username'}
                    {...register('username')}
                />
                {errors.username && <div className={'red'}>Error: {errors.username?.message}</div>}
                <input
                    type={'password'}
                    // type={'text'}
                    placeholder={'Enter your password'}
                    {...register('password')}
                />
                <br/>
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    )
        ;
};

export default RegistrationFormComponent;