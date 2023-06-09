import React from 'react';
import {XYPlot, XAxis, YAxis, GradientDefs, LineSeries} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';



export default function GraphComponent({
  data
}){
  if (data.length !== 0){
    console.log(data)
    const start = data[0].y

    const minVal = data.reduce((previous, current) => {
      return current.y > previous.y ? current : previous;
    });
    const maxVal = data.reduce((previous, current) => {
      return current.y < previous.y ? current : previous;
    });

    let numerator = start - minVal.y
    let denominator = maxVal.y - minVal.y

    let percentage = (numerator / denominator) * 100

    let firstQtemp = percentage / 2
    let thirdQtemp = percentage + (percentage / 2)

    let firstQ = firstQtemp + "%"
    let thirdQ = thirdQtemp + "%"
    const mid  = percentage + "%"
    const zero = "0%"

    return (
    <XYPlot width={630} height={380}>
    {/* <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
    <VerticalGridLines style={{stroke: '#B7E9ED'}} /> */}
    <XAxis
      title="X Axis"
      style={{
        line: {stroke: "black"},
        ticks: {stroke: '#ADDDE1'},
        text: {stroke: 'none', fontWeight: 600}
      }}
    />
    <YAxis 
      title="Y Axis" 
      color="black"
    />
    
    <GradientDefs> 
      <linearGradient id="myGradient" gradientTransform="rotate(90)" > 
        <stop offset={zero} stopColor="#38ef7d" /> 
        <stop offset={firstQ} stopColor="green" /> 
        <stop offset={firstQ} stopColor="green" /> 
        <stop offset={mid} stopColor="black" /> 
        <stop offset={mid} stopColor="black" /> 
        <stop offset={thirdQ} stopColor="red" /> 
        <stop offset={thirdQ} stopColor="red" /> 
        <stop offset="100%" stopColor="#c21e1e" /> 
        {/* <stop offset="76%" stopColor="#CA0016" /> 
        <stop offset="100%" stopColor="#CA0016" />  */}
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
  
}