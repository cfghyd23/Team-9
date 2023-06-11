import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <div>AdminHome

<br/>

      <Link to='/registerBB'>
        <Button>
            Register Blood Bank
        </Button>
        </Link>
    </div>
  )
}
