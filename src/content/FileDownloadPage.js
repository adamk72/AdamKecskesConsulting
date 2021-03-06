import React, { useEffect, useState } from 'react'
import getFile from '../utils/getFile'
import ResponsiveContainer from '../components/ResponsiveContainer';
import LiteTitle from './LiteTitle';
import { Alert } from 'react-bootstrap'

const FileDownloadPage = ({ history, match: { params: { id, file } } }) => {
    const [renderText, setRenderText] = useState(null)
    const [fileState, setFileState] = useState(0)
    const [needToLoad, setNeedToLoad] = useState(true)

    useEffect(() => {
        if (needToLoad) {
            let hashEmail = localStorage.getItem('hashEmail')
            if (hashEmail === id) {
                getFile(file, (res) => setFileState(res))
                setNeedToLoad(false)
            } else {
                setRenderText("Sorry, we don't recognize this device. Did you try and sign up for the download on another computer?")
            }
        }

        if (fileState > 0) {
            if (fileState === 200) {
                setRenderText("If you have an questions or comments, feel free to send me an email. I'll be redirecting you to the home page in a few moments.")
            } else if (fileState === 404) {
                setRenderText("Looks like there was a network error. Please try again later. Feel free to send me an email if you have an questions.")
            }
            setTimeout(() => {
                history.push('/')
            }, 8000);
        }
    }, [id, file, needToLoad, history, fileState])

    return (
        <ResponsiveContainer>
            <LiteTitle />
            <div className="file-dl-page">
                {fileState === 200 ?
                    <div className="success"><h1>Enjoy reading!</h1><Alert variant="success">{renderText}</Alert></div>
                    :
                    fileState === 404 ? <div className="error">
                        <h1>Whoops! We're having a little trouble.</h1>
                        <Alert variant="danger">{renderText}</Alert>
                    </div>
                        :
                        <div>
                            <h1>Whoops! We're having a little trouble.</h1>
                            <Alert variant="warning">{renderText}</Alert>
                        </div>}
            </div>
        </ResponsiveContainer>
    )
}

export default FileDownloadPage
