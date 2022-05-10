import React from "react";
import clsx from "clsx";

const Button = (props) => {
    const {className, value, type = 'submit', ...rest} = props
    const clasName = clsx({
        btn: true
    }, className)

    return (
        <div className='btn-fig'>
            <input type={type} className={clasName} value={value} {...rest}/>
        </div>
    )
}

export default Button;