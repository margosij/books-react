import React from "react"
import Thumbnail from "../Thumbnail"
import { Container, Row, Col } from "../Grid"

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    image = "https://placehold.it/100x100",
    title,
    authors,
    link,
    date
}) {
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Author: {authors}</p>
                        <a rel="noopener noreferrer" target="_blank" href={link}>Here's the Link!</a>
                        <p>Date: {date}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}
