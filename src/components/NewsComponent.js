import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsSkeleton from "./NewsSkeleton";

function RenderNews(props) {
  
  if (props.isLoading) {
    return (
      <NewsSkeleton/>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.news[0]) {
    var defaultImageUrl ="https://familydoctor.org/wp-content/uploads/2020/03/coronavirus-1200-1.jpg";

      // "https://www.imf.org/-/media/Images/IMF/Topics/COVID19/lending-tracker-fullsize-istock-1213355637.ashx?h=1413&w=2122&la=en";
    var imageUrl = defaultImageUrl;
    if (props.news[0].media) imageUrl = `${props.news[0].media}`;
    const shareData = {
      title: `${props.news[0].title}`,
      text: `${props.news[0].title}. Check out latest covid stats and news at CoVisuals.`,
      url: "https://vanssign.github.io/covid-visuals/",
    };

    return (
      <>
        <div className="fs-sm-min container">
          <br />
          <div className="container">
            <div className="row bg-dark border rounded-top">
              <div className="col">
                <button
                  to="/news/0"
                  className=" btn text-white"
                >
                  <i className="fa fa-lg fa-globe"></i>{" "}
                  <small>{props.news[0].country}</small>
                  <div className="make-it-small">Country</div>
                </button>
              </div>
              <div className="col">
                <button
                  className="btn text-white"
                  onClick={async () => {
                    try {
                      await navigator.share(shareData);
                      console.log("MDN shared successfully");
                    } catch (err) {
                      console.log("Error: " + err);
                    }
                  }}
                >
                  <i className="fa fa-lg fa-share-alt"></i>
                  <div className="make-it-small">
                    Share<span className="d-none d-md-block">this news</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
          id="imageRContainer"
            className="border" 
            style={{ height: 250, overflowY: "hidden", overflowX: "hidden",
            background:`linear-gradient(0deg, rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(${imageUrl})`,backgroundSize:'cover'}}
            onLoad={()=>{
              if(!document.getElementById("imageRContainer").style.background)
              document.getElementById("imageRContainer").style.background=`linear-gradient(0deg, rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(${defaultImageUrl})`;
          }}
          >
            <img
              id="imageR"
              alt="representative news"
              src={imageUrl}
              style={{ objectFit: "fill", height: 250 }}
            onError={()=>{
                document.getElementById("imageR").src=defaultImageUrl;
                document.getElementById("imageRContainer").style.background=`linear-gradient(0deg, rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(${defaultImageUrl})`;            }}></img>
          </div>
          <div className="border-right bg-grad-body border-left rounded-0 p-4">
            <div>
              <div className="text-left font-weight-bolder py-2">
                {props.news[0].title }
              </div>
              <div className="text-left">
                {props.news[0].summary }
              </div>
              <small className="text-center">
                Dated: {props.news[0].published_date}
              </small>
              <br />
              <small className="text-info">
                explore next news in&nbsp;
                {props.news[0].country}
                <br />
                <Link
                  className="text-info"
                  to={`/news/${props.indexCount + 1}`}
                >
                  <i className="fa fa-chevron-circle-right fa-3x"></i>
                </Link>
              </small>
            </div>
          </div>
          <a
            href={`${props.news[0].link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-reset"
          >
            <div className="text-reset bg-dark border px-4 text-left rounded-bottom">
              Read entire article at <br/>
              {props.news[0].clean_url}{" "}
            </div>
          </a>
          <br />
        </div>
      </>
    );
  } else {
    return (
      <div className="container text-center">
        <br />
        Could not fetch anything from API
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(RenderNews);
