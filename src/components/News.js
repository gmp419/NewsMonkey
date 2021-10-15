import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',  
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,  
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page: 1,

        }
        
    }

    async componentDidMount ()  {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=15e0b46e56374f00890c58ba7f135c3c&page=1&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
          
    }

    handleNextClick = async ()=>{
        let condition = this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize);
        if (!condition) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=15e0b46e56374f00890c58ba7f135c3c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(this.state.page)

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
        }
    }
    handlePreviousClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=15e0b46e56374f00890c58ba7f135c3c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }


    render() {                
        return (
            <>          
            <div className="container my-4">
                <h2 className="text-center">NewsMonkey - Top Headline</h2>
                {this.state.loading&&<Spinner/>}
                <div className="row style={{height: '100%'}}">
                        {!this.state.loading&&this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "it's me"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                </div>
                <div className="container d-flex justify-content-end">
                    <button type="button" className="btn btn-dark m-2" disabled= {this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Prev</button>
                    <button type="button" className="btn btn-success m-2" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
            </>
        )
                
    }
}

export default News
