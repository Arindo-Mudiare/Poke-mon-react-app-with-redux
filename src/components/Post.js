import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

export default class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post card postpad">
        <h4 className="card-title red-text uppercase">
          {this.state.post.title}
        </h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <>
        <hr />
        <Link to={"/"} className="btnpad">
          <a className="waves-effect waves-light btn red">Back to home</a>
        </Link>

        <div className="container postpad">{post}</div>
      </>
    );
  }
}
