import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
// import { GrDocumentDownload } from 'react-icons/gr'

const GetSpecialOffer = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {

    }

    return (

        <div className="special-offer">
            <span className="call-to-action">Get my whitepaper on which questions non-coders should be asking their software devs:</span>
            <form>
                <input name="emailInput" placeholder="Enter email" onChange={(e) => setInput(e.target.value)} />&nbsp;&nbsp;&nbsp;
                <Button variant="success" onClick={() => handleSubmit} > Submit</Button>
            </form>

        </div>
    )

}


export default GetSpecialOffer