import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/postValidator";
import styles from "./formComponent.module.css"

type IFormType = {
    // userId:number,
    // id:number,
    title: string,
    body: string,
}

const FormComponent = () => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IFormType>(
        {
            mode: 'all',
            //--------------------------------------------------- through joi --------------------------------------------------
            resolver: joiResolver(postValidator)
            //------------------------------------------------------------------------------------------------------------------

        }
    );
    let onSubmit = (formData: IFormType) => {
        //--------------------------------------------------- through fetch POST --------------------------------------------------
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'}
                       placeholder={'Enter A Title (max 30)'}
                       {...register('title',
                           //------------------------------------------- through options -----------------------------------------------------
                           // {
                           //     required: {value: true, message: '*This field is required'},
                           //     maxLength: {value: 30, message: '*This field must be max 30 symbols'},
                           //     minLength: {value: 2, message: '*This field must be min 2 symbols'}
                           // }
                           //------------------------------------------------------------------------------------------------------------------
                       )
                       }
                />
                {errors.title && <span className={styles.errorStyle}>{errors.title.message}</span>}
                <br/>
                <textarea placeholder={'Enter A Text Of Post'} {...register('body')}/>
                {errors.body && <span className={styles.errorStyle}>{errors.body.message}</span>}
                <br/>
                <button type={'submit'} disabled={!isValid}>Post text</button>
            </form>
        </div>
    );
};

export default FormComponent;