import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

export default class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 50)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img className="image" src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text uppercase">
                  {post.title}
                </span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts don Set Bros</div>
    );
    return (
      <div className="container home">
        <h4 className="center red-text">Breaking News Today</h4>
        {postList}
      </div>
    );
  }
}
