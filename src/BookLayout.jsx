import React from "react"
import { Link, Outlet } from "react-router-dom"

const BookLayout = () => {
  return (
    <>
      <Link to="/books/1">Book1</Link>
      <br />
      <Link to="/books/2">Book2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <br />
      <Outlet context={{ hello: "world" }} />
      {/*when we click on links it will
      display desired page*/}
    </>
  )
}

export default BookLayout
