import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
// import { GrDocumentDownload } from 'react-icons/gr'

const GetSpecialOffer = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')

    const handleSubmit = (e) => {
        sendEmail(callback);
    }
    const callback = () => {
        return output
    }

    const sendEmail = (cb) => {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
            // body: JSON.stringify({ })
        };

        fetch('http://localhost:5000/test', options)
            .then(res => res.json())
            .then(json => { setOutput({ name: json.name, id: json.id }) })
        console.log(output)


        return;
    }

    return (

        <div className="special-offer">
            <span className="call-to-action">Get my whitepaper on which questions non-coders should be asking their software devs:</span>
            <form>
                <label>Email</label><br />
                <input name="emailInput" placeholder="Enter email" type='email' onChange={(e) => setInput(e.target.value)} />
                <Button variant="success" onClick={() => handleSubmit()} > Submit</Button>
            </form>
            <p>{output.name}</p>

        </div>
    )

}


export default GetSpecialOffer