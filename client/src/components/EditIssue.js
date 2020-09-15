import React, { Component } from "react";
import axios from "axios";

export default class EditIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.state.userName,
      description: this.props.location.state.data,
    };
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  submitForm = async (e) => {
    e.preventDefault();

    const { name, description } = this.state;
    const { id } = this.props.location.state;
    try {
      const user = {
        name,
        description,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.put(`/api/update-issue/${id}`, user, config);
      alert("Issue updated.")
      this.props.history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };
  render() {
    return (
      <div className="form-container">
        <div className="header">UPDATE ISSUE</div>
        <form className="form" onSubmit={this.submitForm}>
          <input
            type="text"
            className="form-input"
            name="name"
            value={this.state.name}
            placeholder="Project name"
            onChange={this.handleChange}
          />
          <textarea
            className="form-input textarea"
            name="description"
            value={this.state.description}
            placeholder="Issue Description"
            onChange={this.handleChange}
          />
          <input className="submit-button" type="submit" value="Update Issue" />
        </form>
      </div>
    );
  }
}
