import React from 'react';
import {withRouter} from 'react-router-dom'
// For RenderNewsInfo
import {
    Card,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';
import {Link} from 'react-router-dom';

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
    } else if (props.news[0]) {
        console.log("props.news[0] is");
        console.log(props.news[0]);
        var imageUrl='https://www.imf.org/-/media/Images/IMF/Topics/COVID19/lending-tracker-fullsize-istock-1213355637.ashx?h=1413&w=2122&la=en';
        if(props.news[0].media) imageUrl=`${props.news[0].media}`;
        return (
        <div className="fs-sm-min container" >
            <br/>
        <div className="container">
         <div className="row border rounded-top">
            <div className="col">
                <Link to="/news/0" className="text-info">
                    <i className="fa fa-globe"></i>
                    <div className="make-it-small">Change Country</div>
                </Link>
                <small className="text-muted">
               {props.news[0].country}
               </small>
            </div>
                <div className="col">
                    <i className="fa fa-share-alt"></i>
                    <div className="make-it-small">Share<span className="d-none d-md-block">
                            this news</span>
                    </div>
                </div>   
        </div>
        </div>
        <div className="border-right border-left bg-light">
        <img className="img-fluid" src={imageUrl}></img>
        </div>
        <Card className="rounded-0">
                <CardBody>
                    <CardTitle className="font-weight-bolder">{
                        props.news[0].title
                    }
                  </CardTitle>
                    <CardText>
                        {
                            props.news[0].summary
                        }
                       
                    </CardText>
                    <small className="text-muted">Dated: {props.news[0].published_date}</small>
                    <br/>
                    <small className="text-info">
                        {/* <span className="d-md-none">Swipe up to</span> */}
                        explore next news in&nbsp;
                        {props.news[0].country}
                        <br/>
                        <Link className="text-info" to={
                            `/news/${
                                props.indexCount + 1
                            }`
                        }>
                            {/* <i className="fa fa-chevron-circle-up d-md-none fa-2x"></i> */}
                            {/* <i className="fa fa-chevron-circle-right fa-3x d-none d-md-block"></i> */}
                            <i className="fa fa-chevron-circle-right fa-3x"></i>
                        </Link>
                    </small>
                </CardBody>
            </Card>
            <a href={`${props.news[0].link}`} target="_blank" className="text-reset">
            <div className='bg-dark text-white rounded-bottom'>
                Read entire article at&nbsp;
                {
                props.news[0].clean_url
            } </div>
            </a>
            <br/>
            </div>
        )

    }
}


export default withRouter(RenderNews)