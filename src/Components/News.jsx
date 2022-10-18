/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 18,
  };
  static ProTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    // console.log("hello i am a constructor")
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      total: 0,
    };
  }
  //   HandleNext = async () => {
  //     window.scrollTo(0, 0);
  //     if (
  //       !(
  //         this.state.page + 1 >
  //         Math.ceil(this.state.totalResults / this.props.pageSize)
  //       )
  //     ) {
  //       let url = `https://newsapi.org/v2/top-headlines?country=${
  //         this.props.country
  //       }&category=${
  //         this.props.category
  //       }&apiKey=12b080b765ea4ca19ae44e7191267633&page=${
  //         this.state.page + 1
  //       }&pageSize=${this.props.pageSize}`;
  //       this.setState({ loading: true });
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       // console.log(parsedData)
  //       this.setState({
  //         loading: false,
  //         page: this.state.page + 1,
  //         articles: parsedData.articles,
  //         total: parsedData.totalResults,
  //       });
  //
  //     }
  //   };

  //   HandlePrev = async () => {
  //     window.scrollTo(0, 0);
  //     if (!(this.state.page - 1 === 0)) {
  //       let url = `https://newsapi.org/v2/top-headlines?country=${
  //         this.props.country
  //       }&category=${
  //         this.props.category
  //       }&apiKey=12b080b765ea4ca19ae44e7191267633&page=${
  //         this.state.page - 1
  //       }&pageSize=${this.props.pageSize}`;
  //       this.setState({ loading: true });
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       console.log(parsedData);
  //       this.setState({
  //         loading: false,
  //         page: this.state.page - 1,
  //         articles: parsedData.articles,
  //         total: parsedData.totalResults
  //       });
  //     }
  //
  //   };
  async componentDidMount() {
    // life cycle method..... runs after render method!
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    // console.log(parsedData)
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    // this.updateNews()
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    // console.log(this.state.articles.length !== this.state.total);
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      total: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className=" news" style={{ marginTop: "70px" }}>
          <h2
            className="my-3"
            style={{ textAlign: "center", marginTop: "100px" }}
          >
            NewsBreaker - Top{" "}
            <b>
              {this.props.category.charAt(0).toUpperCase() +
                this.props.category.slice(1)}{" "}
            </b>{" "}
            headlines
          </h2>

          {this.state.loading && <Spinner />}
          {/* this is condition syntax*/}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.total}
            loader={<Spinner />}
          >
            <div className="container my-1">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3 cl" key={element.url}>
                      <NewsItem
                        source={element.source.name}
                        date={element.publishedAt}
                        author={element.author}
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 100)
                            : ""
                        }
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
