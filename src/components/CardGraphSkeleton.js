import React from 'react'
import Skeleton from "react-loading-skeleton";
import { Line } from "react-chartjs-2";
export default function CardGraphSkeleton({chartData}) {
    return (
        <>
        <div className="bg-grad text-white">
          <Skeleton />
        </div>
        <div className="container-fluid">
          <br />
          <p className="lead">
            <span className="font-weight-bolder"></span>
            <Skeleton />
          </p>
          <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 pt-4">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
          </div>
          </div>

          <small className="text-muted">
            <Skeleton />
          </small>
          <br />
          <br />
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                <Line data={chartData} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
