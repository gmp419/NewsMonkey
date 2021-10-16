import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "100%" }}>
          <span class="position-absolute top-0 start-100 translate-middle badge bg-success" style={{zIndex: 1,left: "95%"}}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="it's me" />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
