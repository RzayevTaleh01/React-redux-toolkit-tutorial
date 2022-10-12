import React from 'react'

export default function Whether(props) {
  return (
    <div>whether: {props.change}</div>
  )
}
Whether.defaultProps ={
    change: "c"
}