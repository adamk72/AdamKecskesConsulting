import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

const GetSpecialOffer = () => {
    const [input, setInput] = useState('')
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        setSubmit(true)
        sendEmail();
    }

    const sendEmail = () => {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
            // body: JSON.stringify({ })
        };

        fetch('http://localhost:5000/nodemailer', options)
            .catch((error) => console.log(error.message))
        return;
    }

    return (

        <div className="special-offer">
            {submit ? <p className="call-to-action">Thanks! You will be receiving an email with a link shortly.</p>

                : <div> <p className="call-to-action">Get my paper on which questions non-coders should be asking their software devs:</p>
                    <form>
                        <label>Email</label>
                        <input name="emailInput" placeholder="Enter email" type='email' onChange={(e) => setInput(e.target.value)} />
                        <Button variant="success" onClick={() => handleSubmit()} > Submit</Button>
                    </form>
                </div>
            }

        </div>
    )

}


export default GetSpecialOffer