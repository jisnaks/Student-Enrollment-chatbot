import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
    return (
        <div className='container text-center m-5'>
            <h1>Enter into Student Info System</h1>
            <Link to="/chatbotpg">
                <button className='btn btn-primary'>Enroll Now</button>
            </Link>

        </div>
    )
}

export default Page1
