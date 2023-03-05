import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';



export default function GraphComponent({
  data
}){
  console.log(data)
  return (
  <XYPlot width={500} height={500}>
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
    data = {[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
    // data={data}
    style={{
      strokeLinejoin: 'round',
      strokeWidth: 4,
    }}
  />
  </XYPlot>
  )
}