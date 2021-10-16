import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(
            props.category
        )} - NewsMonkey`;
        updateNews();

    }, [])

    const fetchMoreData = async () => {
        // a fake async api call like which sends
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false)
    };


    return (
        <>
            <div className="container my-4">
                <div className="row " style={{ padding: "80px 20px 30px 20px" }}>
                    <h2 className="text-center">
                        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headline
            </h2>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="row" style={{ height: "100%" }}>
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : ""}
                                        description={
                                            element.description ? element.description : ""
                                        }
                                        imgUrl={
                                            element.urlToImage ? (
                                                element.urlToImage
                                            ) : (
                                                <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fdummy.tcdw.org%2F&psig=AOvVaw3zyRWKTM-oBzAEZ0UFewuR&ust=1634431087583000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjnobXYzfMCFQAAAAAdAAAAABAK" />
                                            )
                                        }
                                        newsUrl={element.url}
                                        author={element.author ? element.author : "unkonown"}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        </>
    );

}

export default News;
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    page: "1",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};