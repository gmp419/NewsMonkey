import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "100%" }}>
        <div>
          <span
            class="badge bg-danger"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
        <img src={imgUrl} className="card-img-top" alt="it's me" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
