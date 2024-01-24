import React from "react"
import { useOutletContext, useParams } from "react-router-dom"

function Book() {
  const { id } = useParams()
  const obj = useOutletContext() /*returns everything we passed to outlet*/
  return (
    <h1>
      Book {id} {obj.hello}
    </h1>
  )
}

export default Book
