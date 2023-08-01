import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = (props) => {
    const { label, name, placeholder, ...rest } = props
    return (
        <>
            <div className='flex flex-col gap-1 w-full' >
                <label className='text-[#fff] font-thin' htmlFor={name}>{label}</label>
                <Field
                    className=" bg-[#202124] text-[#ffffff]  font-thin border-white/20 rounded placeholder:italic placeholder:text-sm placeholder:text-slate-400   focus:outline-none focus:border-black shadow-xl  focus:border-transparent focus:ring-0"
                    id={name}
                    name={name}
                    {...rest}
                    placeholder={placeholder}
                />
                <ErrorMessage name={name} component={TextError} />
            </div>
        </>
    )
}

export default Input

