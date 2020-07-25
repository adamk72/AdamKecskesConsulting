import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

const GetSpecialOffer = () => {
    const initialExitMsg = <p className="call-to-action">Something went wrong with the delivery attempt. Please try again in a short while.</p>

    const [email, setEmail] = useState('')
    const [submit, setSubmit] = useState(false)
    const [exitMsg, setExitMsg] = useState(initialExitMsg)

    const sendEmail = () => {
        setSubmit(true)

        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ email }
            )
        };

        fetch('http://localhost:5000/nodemailer', options)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    setExitMsg(<p className="call-to-action">Thanks! You will be receiving an email with a link shortly.</p>)
                }
            })
            .catch((error) => { console.log("error: ", error.message); })



        return;
    }

    return (
        <div className="special-offer">
            {submit ? exitMsg
                : <div> <p className="call-to-action">Get my paper on which questions non-coders should be asking their software devs:</p>
                    <form>
                        <label>Email</label>
                        <input name="emailInput" placeholder="Enter email" type='email' onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="success" onClick={() => sendEmail()} > Submit</Button>
                    </form>
                </div>
            }
        </div>
    )

}


export default GetSpecialOffer