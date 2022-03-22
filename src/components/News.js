import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize : 6,
    category: 'general'

  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string

  } 

  articles= []
     constructor(props){
        super(props);
        console.log("Hello I am Constructor from News Component ");
        this.state = {
          articles : this.articles,
          loading :false,
          page : 1,
          totalResults : 0 
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-News`;

    }
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews(pageNo){
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json()
      this.props.setProgress(50);
      console.log(data);
      this.setState({
        articles : parsedData.articles,
         totalResults :parsedData.totalResults,
         loading:false
        })
        this.props.setProgress(100);
    }
    async componentDidMount(){
      this.updateNews();
    }
    fetchMoreData = async () => {
      this.setState(
        {page:this.state.page + 1}
      )
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(data);
      this.setState({
        articles : this.state.articles.concat(parsedData.articles),
         totalResults :parsedData.totalResults        })
    };
  //   handlePrevious= async()=>{
  //     this.setState({
  //       page : this.state.page - 1 
  //       })
  //     this.updateNews();
      
  //   }
  //   handleNext= async()=>{
  //     this.setState({
  //        page : this.state.page + 1 
  //     })
  //     this.updateNews();
  // }
  render() {
    return (
      <>
      <h1  className="text-center" style={{margin: "35px 0px",marginTop: '90px'}}>NewsMonkey - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
    {this.state.loading && <Spinner/>}

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
       <div className="container">
        <div className='row'>
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <NewsItem title ={element.title?element.title.slice(0,45):""}  description = {element.description?element.description.slice(0,88):""} imgurl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>
        })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled ={this.state.page<=1} type="button" className ="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
        <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className ="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
    </>
    )
  }
}
export default News;
