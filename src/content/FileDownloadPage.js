import React, { useEffect, useState } from 'react'
import getFile from '../utils/getFile'

const FileDownloadPage = ({ match: { params: { id, file } } }) => {
    // http://localhost:3000/#/files/c8ff581e1ec23af7c5eaeac5b178bb7d/Consulting_Questions.pdf
    const [fileStatus, setFileStatus] = useState({})
    const [renderText, setRenderText] = useState(<h1>Processing</h1>)


    // getFile(file)

    useEffect(() => {
        let hashEmail = localStorage.getItem('hashEmail')
        if (hashEmail === id) {
            setRenderText(<h1>We recognize you!</h1>)
            getFile(file)
        } else {
            setRenderText(<h1>Who are you?</h1>)
        }
    }, [])

    return (
        <div>
            {renderText}
            <h1>HELLO</h1>
            <h1>{fileStatus.status}</h1>
            <h1>{fileStatus.message}</h1>
        </div>
    )
}

export default FileDownloadPage
