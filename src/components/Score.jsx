import React from 'react'
import { connect } from 'react-redux'

function Score(props) {
  console.log("score component::::",props)
  function getScore(balls){
    var wickets=0;
    var runs = 0;
    balls.forEach((b)=>{
      if(b==='wk'){
        wickets++
      }
      else{
        if(b==='wd'||b==='nb'||b==='by'||b==='lb'){
          runs=runs+1;
        }
        else{
          runs = runs+b
        }
      }
    })
    return `${runs}/${wickets}`;
  }
  return (
    <div className='betterview'>
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:0})}}>0</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:1})}}>1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:2})}}>2</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:3})}}>3</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:4})}}>4</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:5})}}>5</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:6})}}>6</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:'wd'})}}>wd</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:'nb'})}}>nb</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:'by'})}}>by</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:'lb'})}}>lb</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'ADDBALL',payload:'wk'})}}>wk</button>&nbsp;&nbsp;&nbsp;
      <h1>Score:{getScore(props.score.balls)}</h1>
    </div>
  )
}

export default connect(store=>store)(Score)