import React, { Component } from "react"
import Jumbotron from "../components/Jumbotron"
import { Row, Col, Container } from "../components/Grid"
import API from "../utils/API"
import SaveBooks from "../components/appLayout"
import { List } from "../components/List"
import DeleteBtn from "../components/deleteButton"

class Saved extends Component {
    // state = {
    //     savedBooks: [],
    //     loaded: false
    // }


    // componentDidMount() {
    //     this.loadSavedBooks()
    // }

    // loadSavedBooks = () => {
    //     this.setState({ loading: true })
    //     API.getBook().then(res => {
    //         this.setState({ savedBooks: res, loaded: false })
    //     })
    //     .catch(err => console.log(err))
    // }

    // deleteBooks = event => {
    //     API.deleteBook(event.target.id)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    // updateBooks = bookSaved => {
    //     const newBooks = this.state.savedBooks.filter(
    //         book => bookSaved._id !== book.id
    //     )
    //     this.setState({ savedBooks: newBooks, loading: false })
    // }

    render() {
        return (
            <li className="list-group-item">
            <Jumbotron />
            <Container>
            <Row>
                <Col size="xs-4 sm-2">
                    {this.state.savedBooks ? (
                        <List>
                            <DeleteBtn />
                        {this.state.savedBooks.map(book => (
                            <SaveBooks
                            key={book.key}
                            title={book.title}
                            authors={book.authors}
                            image={book.image}
                            link={book.link}
                            date={book.date}
                            />
                        ))}
                        </List>
                    ) : (
                        <h3 className="text-center">No Results to Display</h3>
                    )}

                </Col>
            </Row>
            </Container>
        </li>
        )
    }
}

export default Saved