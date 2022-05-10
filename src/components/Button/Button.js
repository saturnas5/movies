import React from "react";
import clsx from "clsx";

const Button = (props) => {
    const {className, value, type = 'submit', ...rest} = props
    const clasName = clsx({
        btn: true
    }, className)

    return <input type='submit' className={clasName} value={value} {...rest}/>
}

export default Button;