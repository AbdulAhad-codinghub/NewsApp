import React, { Component } from 'react';
export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsUrl, author, date, source } = this.props;

        return <div className='my-3'>
            <div className="card" style={{ alignContent:'normal' , height: "500px" ,  }}>
                <div style={{
                    display : 'flex',
                    justifyContent : 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                <span
                    className="badge rounded-pill bg-danger" >{source}  
                </span>
                </div>
                <img src={imgurl ? imgurl : "https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888?k=20&m=1197831888&s=612x612&w=0&h=HFWpcI1kIwr_GwwRSqOHlpf9r-BAartlbFtshuCY4Zw="} className="card-img-top" alt="..." style={{ height: "250px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Publisher- {author ? author : 'Unknown'}</h6>
                    <p className="card-text">{description}...</p>
                    <p className="card-text" style={{color : 'red'}}>Last Updated- {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>;
    }
}
export default NewsItem;