import React from "react"
import { Routes, Route, useRoutes } from "react-router-dom"
import Home from "./Home"
import BookList from "./BookList"
import Book from "./Book"
import NewBook from "./NewBook"
import NotFound from "./NotFound"
import { Link } from "react-router-dom"
import BookLayout from "./BookLayout"
import BookRoutes from "./BookRoutes"
function App() {
  {
    /* we can also define routes using useRoutes hook */
  }

  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])
  return (
    <>
      <Routes location="/">
        {/*even if routes changes in url h1 remain same */}
        <Route
          path="/"
          element={<h1>With same route two content can be displayed</h1>}
        ></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />

        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
/* 
1. using <Route /> assign path and which component to render when path is set. But notice we have to manually change the path in search bar. to avoid it use navigation in our app.

2. Link component is used to achieve that. This replaces anchor tag in our app.Essentially this is an anchor tag, but it is used to redirect our page without having to reload the page.

3. when we create newbook gave a path /books/new, this is similar to /books/:id, so when we render /books/new why it doesn't show book new instead of newBook bcoz react router knows which routes to use, it prefers hardcoded url over dynamic. This is called route specificity.

4. Nested Routes: all the routes starting with same name (books) could be nested below. 
*/
