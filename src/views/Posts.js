import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({
            posts: data
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1 className="display-3 text-center">Posts</h1>
                    </div>
                    <div className="card-body">
                        {
                            this.state.posts.map(post => {
                                return <div key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
