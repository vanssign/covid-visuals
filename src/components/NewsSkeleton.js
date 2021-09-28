import React from 'react'
import Skeleton from "react-loading-skeleton";
export default function NewsSkeleton() {
    return (
        <>
        <div className="fs-sm-min container">
          <br />
          <div className="container">
            <div className="row bg-dark border rounded-top">
              <div className="col">
                <button
                  to="/news/0"
                  className="btn"
                >
                  <i className="fa fa-lg fa-globe"></i>{" "}
                  <small>XX</small>
                  <div className="make-it-small">
                    <Skeleton />
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn">
                  <i className="fa fa-lg fa-share-alt"></i>
                  <div className="make-it-small">
                    <Skeleton />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="border-right border"
            style={{ minHeight: 250 }}
          >
            <Skeleton height={250} />
          </div>
          <div className=" border-right border-left rounded-0 p-4">
            <div>
              <div className="font-weight-bolder p-2">
                <Skeleton />
              </div>
              <div>
                <Skeleton count={7} />
              </div>
              <small className="text-muted">
                <Skeleton />
              </small>
              <br />
              <small className="text-info">
                <Skeleton />
                <br />
                <i className="fa fa-chevron-circle-right fa-3x"></i>
              </small>
            </div>
          </div>
          <div className="bg-dark text-white rounded-bottom">
            <Skeleton width={100} />
          </div>
          <br />
        </div>
      </>
    )
}
