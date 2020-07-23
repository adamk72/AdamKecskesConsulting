import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
// import { GrDocumentDownload } from 'react-icons/gr'

const GetSpecialOffer = () => {
    const [input, setInput] = useState('')



    return (

        <div className="special-offer">
            <span className="call-to-action">Get my whitepaper on which questions non-coders should be asking their software devs:</span>
            <form>
                <input name="emailInput" placeholder="Enter email" onChange={(e) => { setInput(e.target.value); console.log(input) }} />&nbsp;&nbsp;&nbsp;
                <Button variant="success">Submit</Button>
            </form>

        </div>
    )

}


export default GetSpecialOffer