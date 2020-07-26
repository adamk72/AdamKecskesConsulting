const getFile = (file) => {
    let exitStatus = { status: 0, message: "OK" }

    const options = {
        headers: {
            'Accept': 'application/pdf',
            'Content-Type': 'application/pdf',
        },
        method: 'GET',
    };
    fetch(`http://localhost:5000/files?file=${file}`, options)
        .then(response => {
            if (response.statusText === 'OK') {
                response.blob();
                exitStatus = { status: 1, message: "OK" }
            } else {
                throw Error(response.statusText)
            }
        }
        )
        .then(blob => {
            // 1. check for blob
            // 2. Create blob link to download
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${file}`);
            // 3. Append to html page
            document.body.appendChild(link);
            // 4. Force download
            link.click();
            // 5. Clean up and remove the link
            link.parentNode.removeChild(link);
        })
        .catch((error) => {
            exitStatus = { status: -1, message: "OK" }
        })

    return exitStatus
}

export default getFile
