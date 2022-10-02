import React, { useState, useEffect } from 'react';
import './GitHubUser.css';

export default function GitHubUser() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users')
            setUsers(await response.json())
            // console.log(users)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>List of GitHub Users</h2>
            <div className='row mt-5'>

                {
                    users.map(data =>
                        <div className='col-4 mb-5' key={data.id}>
                            <div className="card" >
                                <img src={data.avatar_url} className="card-img-top size" alt="..." />
                                <div className="card-body">
                                    <h4>Name :- {data.login}</h4> 
                                    <h4>Articles :- 38</h4>
                                    <h4>Followers :- 2.5M</h4>
                                    <h4>Ratings :- 4.5</h4>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>

    )
}
