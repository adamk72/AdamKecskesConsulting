
const getFile = (file, callback) => {

    const options = {
        headers: {
            'Accept': 'application/pdf',
            'Content-Type': 'application/pdf',
        },
        method: 'GET',
    };
    fetch(`http://localhost:5000/files?file=${file}`, options)
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                return false;
            }
        })
        .then(blob => {
            if (blob !== false) {
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
                return callback(200)
            } else return callback(404)
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}

export default getFile
