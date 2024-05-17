import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <>
    <h1>Ooppss..!!!</h1>
    <h2>Some thing went wromg..!!!</h2>
    <h3>{err.status}: {err.statusText}</h3>
    </>
  )
}
export default Error