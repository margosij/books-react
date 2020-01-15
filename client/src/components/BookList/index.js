import React from "react"
import Thumbnail from "../Thumbnail"
import { Container, Row, Col } from "../Grid"
import "./style.css"
import SaveBtn from "../SaveButton"
import API from "../../utils/API"

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    key,
    image = "https://placehold.it/100x100",
    title,
    authors,
    link,
    date
}) {
    const loadBooks = (res) => {
        console.log("Load Book", res)
    }

    const handleFormSubmit = event => {
        event.preventDefault() 
            API.saveBook({
                key: key,
                title: title,
                link: link,
                authors: authors[0],
                image: image,
                date: date
            })
            .then(res => loadBooks(res))
            .catch(err => console.log(err))
    }
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <SaveBtn onClick={handleFormSubmit} />
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