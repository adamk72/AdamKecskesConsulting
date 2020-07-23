import React from 'react';
import { Button } from 'react-bootstrap'
import { GrDocumentDownload } from 'react-icons/gr'

const GetSpecialOffer = () => {

    return (

        <div className="special-offer">
            <span class="call-to-action">Get my whitepaper on which questions non-coders should be asking their software devs:</span>
            <form>
                <input name="emailInput" placeholder="Enter email" />&nbsp;&nbsp;&nbsp;
                <Button variant="success">Submit</Button>
            </form>

        </div>
    )

}


export default GetSpecialOffer