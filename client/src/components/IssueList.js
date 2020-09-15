import React, { Component } from "react";
import axios from "axios";

export default class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      numOfPages: [],
    };
  }

  redirect = () => {
    this.props.history.push("/add-issue");
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get("/api/list-issue?page=1");
      console.log(res.data);
      this.setState({
        issues: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  deleteIssue = async (e) => {
    const { id } = e.target;
    console.log(e.target);
    try {
      await axios.delete(`/api/delete-issue/${id}`);
      this.props.history.push("/");
      alert(`Issue deleted successfully`);
    } catch (err) {
      alert(`Failed to delete Issue`);
    }
  };
  editIssue = async (e) => {
    const { issues } = this.state;
    const { id } = e.target;
    console.log(e.target);

    const index = issues.findIndex((issue) => issue._id === id);

    this.props.history.push({
      pathname: "/edit-issue",
      state: {
        id,
        userName: issues[index].name,
        data: issues[index].description,
      },
    });
  };
  render() {
    const { issues, numOfPages } = this.state;
    return (
      <div className="issue-list-container">
        <div className="header">GITHUB ISSUES PAGE</div>
        <div className="issue-button-container">
          <button className="issue-button" onClick={this.redirect}>
            ADD NEW ISSUE
          </button>
        </div>
        <div className="all-issues-container">
          {issues.map((issue) => (
            <div key={issue._id} className="issue-body">
              <div className="issue-name">{issue.name}</div>
              <div className="issue-description">{issue.description}</div>

              <div className="file-time">{issue.date}</div>

              <abbr title="Delete">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/delete-844-902124.png"
                  alt="delete logo"
                  id={issue._id}
                  className="file-delete-icon"
                  onClick={this.deleteIssue}
                  style={{ width: "2%" }}
                />
              </abbr>

              <abbr title="Edit">
                <img
                  src="https://www.kindpng.com/picc/m/154-1541177_edit-document-button-comments-edit-button-icon-png.png"
                  id={issue._id}
                  alt="Edit logo"
                  className="file-delete-icon edit-icon"
                  onClick={this.editIssue}
                  style={{ width: "2%" }}
                />
              </abbr>
            </div>
          ))}
        </div>
        <div className="pagenation-container">
          {numOfPages.map((num) => (
            <div
              key={num}
              id={num}
              className="page-number"
              onClick={this.pageChange}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
