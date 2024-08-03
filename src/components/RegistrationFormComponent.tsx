import React, {useState} from 'react';
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

    const [isRegistered, setIsRegistered] = useState<string>('')

    const registerNewUser = async (data: IUserModel) => {
        console.log(data);
        let isSuccessReg = await apiService.saveUser(data);
        setIsRegistered(isSuccessReg);
    }

    return (
        <div>
            {isRegistered}
            <form onSubmit={handleSubmit(registerNewUser)}>
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
                <button disabled={!isValid}>Register Me</button>
            </form>
        </div>
    );
};

export default RegistrationFormComponent;