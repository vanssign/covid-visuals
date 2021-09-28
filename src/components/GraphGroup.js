import React from 'react';
import { Line } from "react-chartjs-2";
export default function GraphGroup({ chartData, chartDataActive, chartDataDeceased, chartDataRecovered, chartOptions ,chartDataTests}) {
    return (
        <div className="slider">
            <div className="slides">
                <div id="slide-1">
                    <Line data={chartData} options={chartOptions} />
                </div>
                <div id="slide-2">
                    <Line
                        data={chartDataActive}
                        options={chartOptions}
                    />
                </div>
                <div id="slide-3">
                    <Line
                        data={chartDataRecovered}
                        options={chartOptions}
                    />
                </div>
                <div id="slide-4">
                    <Line
                        data={chartDataDeceased}
                        options={chartOptions}
                    />
                </div>
                {chartDataTests ? (
                    <div id="slide-5">
                        <Line
                            data={chartDataTests}
                            options={chartOptions}
                        />
                    </div>) : (<></>)}
            </div>
        </div>
    )
}
