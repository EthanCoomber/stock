import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,GradientDefs, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';



export default function GraphComponent({
  data
}){
  console.log(data)
  console.log(data[0].y)
  return (
  <XYPlot width={630} height={380}>
  {/* <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
  <VerticalGridLines style={{stroke: '#B7E9ED'}} /> */}
  <XAxis
    title="X Axis"
    style={{
      line: {stroke: "#ADDDE1"},
      ticks: {stroke: '#ADDDE1'},
      text: {stroke: 'none', fontWeight: 600}
    }}
  />
  <YAxis title="Y Axis" />
  
  <GradientDefs> 
    <linearGradient id="myGradient" gradientTransform="rotate(90)" > 
      <stop offset="0%" stopColor="#74A04C" /> 
      <stop offset="25%" stopColor="#74A04C" /> 
      <stop offset="25%" stopColor="#e5a218" /> 
      <stop offset="76%" stopColor="#e5a218" /> 
      <stop offset="76%" stopColor="#CA0016" /> 
      <stop offset="100%" stopColor="#CA0016" /> 
    </linearGradient> 
  </GradientDefs>
  <LineSeries
    color="url(#myGradient)"
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