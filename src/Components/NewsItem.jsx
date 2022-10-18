/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import './NewsItem.css'
import AOS from "aos";
AOS.init();
AOS.init({
  offset: 10,
  delay: 100,
  easing: "ease-out-back",
});

export default class NewsItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    // console.log(typeof(description),typeof(title))
    return (
      <>
        <div className="my-2" data-aos="zoom-in-up">
          <div className="card">
            <span style={{zIndex:'1',left:'50%',fontSize:'0.9rem'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
            <img
              src={
                imgUrl
                  ? imgUrl
                  : "data:image/png;base64,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"
              }
              className="card-img-top"
              alt="--image--"
            />
            <div className="card-body">
              <h6 className="card-title">
                <b>{title}...</b>
              </h6>
              <hr />
              <p style={{ fontSize: "0.8rem" }} className="card-text">
                {description}...
              </p>
              <a
                color="#2f66fd"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
                rel="noreferrer"
              >
                Read More...
              </a>
            </div>
            <div className="time my-2">
              <p style={{ fontSize: "0.8rem" }} className="card-text">
                <small className="text-muted">
                  {author ? "By" : "Published"} {author ? author : ""} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
