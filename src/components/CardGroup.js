import React from "react";

export default function CardGroup(props){
return(
    <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => props.scrollIntoGraph(1)}
              >
                <p>
                  {`${props.Total}`}
                  <br />
                  {`${props.DeltaTotal}`}{" "}
                  <i className="fa fa-lg  fa-arrow-up"></i>
                </p>
                <small>Total</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => props.scrollIntoGraph(2)}
              >
                <p>
                  {`${props.Active}`}
                  <br />
                  {`${Math.abs(props.DeltaActive)}`}{" "}
                  <i className={props.DeltaActive<0?("fa fa-lg fa-arrow-down"):("fa fa-lg fa-arrow-up")}></i>
                </p>
                <small>Active</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => props.scrollIntoGraph(3)}
              >
                <p>
                  {`${props.Recovered}`} <br />
                  {`${props.DeltaRecovered}`}{" "}
                  <i className={"fa fa-lg fa-arrow-up"}></i>
                </p>
                <small>Recovered</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => props.scrollIntoGraph(4)}
              >
                <p>
                  {`${props.Deceased}`}
                  <br />
                  {`${props.DeltaDeceased}`}{" "}
                  <i className="fa fa-lg  fa-arrow-up"></i>
                </p>
                <small>Deceased</small>
              </div>
            </div>
          </div>
          </div>
)
}