import React from 'react'
import clsx from 'classnames'

const TextBody = ({ title, children, className }) => {
    return (
        <div className={clsx("text-body", className)} >
            <h1 className="title">{title}</h1>
            <p className="center text-justify text-body subtitle" >{children}</p>
        </div>
    )
}
export default TextBody
