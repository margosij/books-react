import React from "react"
import Thumbnail from "../Thumbnail"
import { Container, Row, Col } from "../Grid"
import "./style.css"
import SaveBtn from "../SaveButton"
import API from "../../utils/API"
// import API from "../../utils/"

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>
}

// export function handleFormSubmit({ event }) {
//     event.preventDefault()
//     if(this.state.bookSearch) {
//         API.saveBook({
//             title: this.state.title,
//             authors: this.state.authors,
//             image: this.state.image,
//             date: this.state.date
//         })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err))
//     }
// }

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

    const handleFormSubmit = (event, bookID) => {
        event.preventDefault() 
        if (1 === 1){
            API.saveBook({
                key: key,
                title: title,
                authors: authors,
                image: image,
                date: date
            })
            .then(res => loadBooks(res))
            .catch(err => console.log(err))
        }
    }
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={image} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <SaveBtn onClick={e => handleFormSubmit(e.key)} />
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
