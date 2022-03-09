import React from 'react'
import EditProfile from '../components/EditProfile';
import EditReview from '../components/EditReview';
import ReviewsList from '../components/ReviewsList';
import Searches from '../components/Searches';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


//This is what the website looks like for non-logged in people.

export default function LoggedInHomePage() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <center><h1 style={{ color: 'paleturquoise' } }>TV Reviews</h1></center>
            <div className="app">
                <Searches />
                <EditReview />
                <ReviewsList username={'isAlsoWarrick'} wantFeed={true}/>
            </div>
        </main>
    )
}
