import React from 'react'
import Searches from '../components/Searches';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


//This is what the website looks like for non-logged in people.

export default function NonLoggedInHomePage() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1 style={{ color: 'paleturquoise' }}>TV Recs</h1>
            <div className="app">
                <Searches />
                <SignIn />
                <SignUp />

            </div>



        </main>
    )
}
