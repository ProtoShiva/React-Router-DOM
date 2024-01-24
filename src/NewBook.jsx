import React from "react"
import { useOutletContext } from "react-router-dom"

function NewBook() {
  const obj = useOutletContext()
  return <h1>NewBooks {obj.hello}</h1>
}

export default NewBook
