import { Button } from 'bootstrap'
import React from 'react'

function GotItButton(props) {
  return (
    <div>
      <button  onClick={props.actionProvider.handleGotIt} className='btn btn-outline-primary'>Got it!</button>
    </div>
  )
}

export default GotItButton
