import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';



export default function GraphComponent({
  data
}){
  return (
  <XYPlot width={630} height={380}>
  <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
  <VerticalGridLines style={{stroke: '#B7E9ED'}} />
  <XAxis
    title="X Axis"
    style={{
      line: {stroke: '#ADDDE1'},
      ticks: {stroke: '#ADDDE1'},
      text: {stroke: 'none', fontWeight: 600}
    }}
  />
  <YAxis title="Y Axis" />
  <LineSeries
    className="first-series"
    data={data}
    style={{
      strokeLinejoin: 'round',
      strokeWidth: 4,
    }}
  />
  </XYPlot>
  )
}