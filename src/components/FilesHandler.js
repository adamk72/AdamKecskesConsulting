import React, { useState, useEffect } from 'react'

const FilesHandler = ({ match: { params } }) => {

    const initialExitMsg = <p className="call-to-action">Something went wrong with the delivery attempt. Please try again in a short while.</p>

    const [exitMsg, setExitMsg] = useState(initialExitMsg);
    const [loading, setLoading] = useState(true);

    const hashEmail = localStorage.getItem('hashEmail')
    // const response = (hashEmail === params.id) ? <h1>Beuno</h1> : <h1>No Beueno</h1>

    useEffect(() => {
        if (loading)
            getFile()
    }, [])

    const getFile = () => {
        const options = {
            headers: {
                'Accept': 'application/pdf',
                'Content-Type': 'application/pdf',
            },
            method: 'GET',
        };
        fetch(`http://localhost:5000/files?file=${params.file}`, options)
            .then(response => {
                if (response.statusText === 'OK') {
                    response.blob();
                    setExitMsg(<p className="call-to-action">Thanks! You will be receiving an email with a link shortly.</p>)
                }
            }
            )
            .then(blob => {
                // 1. check for blob
                if (blob) {
                    // 2. Create blob link to download
                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `${params.file}`);
                    // 3. Append to html page
                    document.body.appendChild(link);
                    // 4. Force download
                    link.click();
                    // 5. Clean up and remove the link
                    link.parentNode.removeChild(link);
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log("error: ", error.message);
            })
    }

    return (
        <div>
            {exitMsg}
            <h1>{params.id}</h1>
            <h1>{params.file}</h1>
        </div>
    )
}

export default FilesHandler
