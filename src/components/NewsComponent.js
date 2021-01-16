import React from 'react';
// For RenderImgs Carousel
import {UncontrolledCarousel} from 'reactstrap';
import {withRouter} from 'react-router-dom'
// For RenderNewsInfo
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

function RenderNews(props) {
  
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src="https://fuselabcreative.com/wp-content/themes/fuselab/img/loading.gif"/>
                    </div>
                </div>

            </div>
        )
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{
                        props.errMess
                    }</h4>
                </div>
            </div>

        )
    } else if (props.news) {
        console.log("props.indexCount is");
        console.log(props.indexCount);
        return (
        <div className="fs-sm-min container" >
            <br/>
        <div className="container">
         <div className="row border rounded-top">
            <div className="col">
                <Link to="/indian-states">
                    <i className="fa fa-globe"></i>
                    <div className="make-it-small">Change Countary</div>
                </Link>
                <small className="text-reset">
               countaryName
               </small>
            </div>
                <div className="col">
                    <i className="fa fa-share-alt"></i>
                    <div className="make-it-small">Share(webshareapi)<span className="d-none d-md-block">
                            this news</span>
                    </div>
                </div>   
        </div>
        </div>
        <img className="img-fluid border" src={`${props.news.urlToImage}`}></img>
        <Card className="rounded-0">
                <CardBody>
                    <CardTitle>{
                        props.news.title
                    }
                  </CardTitle>
                    <CardText>
                        <p>{
                            props.news.description
                        }</p>
                       
                    </CardText>

                    <small className="text-muted">
                        <span className="d-md-none">Swipe up to</span>
                        explore next news in 
                        countaryName
                        <br/>
                        <Link to={
                            `/news/${
                                props.indexCount + 1
                            }`
                        }>
                            <i className="fa fa-chevron-circle-up d-md-none fa-2x"></i>
                            <i className="fa fa-chevron-circle-right fa-3x d-none d-md-block"></i>
                        </Link>
                    </small>
                </CardBody>
            </Card>
            <a href={`${props.news.url}`}>
            <div className='bg-dark text-white rounded-bottom'>
                Read entire article at&nbsp;
                {
                props.news.source.name
            } </div>
            </a>
            <br/>
            <br/>
            </div>
        )

    }
}


export default withRouter(RenderNews)