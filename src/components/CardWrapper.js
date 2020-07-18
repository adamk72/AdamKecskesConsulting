import React from 'react'
import { Card } from 'react-bootstrap'

const CardWrapper = ({ icon, title, subtitle, children, className }) => {
    return (
        <Card className={className}>
            <Card.Title className="mt-2">{icon}
                {title}<br />
                <small className="text-muted mt-2">{subtitle}</small>
            </Card.Title>
            <Card.Body>{children}</Card.Body>
        </Card>
    )
}

export default CardWrapper
