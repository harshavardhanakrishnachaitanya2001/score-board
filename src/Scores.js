import React, {useState} from 'react'
import styled from 'styled-components'
const Increment=styled.button`
font-size:20px;
border:none;
background:green;
color:white;
`
const Decrement=styled.button`
font-size:20px;
color:white;
background:red;
border:none;
margin-left:2px;
`

function Scores(props){
    const [score,setScore]=useState(0)
    return (
        <div>
            <p>{props.player}</p>
            <Increment onClick={() => setScore(score + 1)}>Increment</Increment>
            <Decrement onClick={()=>setScore(score-1)} style={{marginRight:"5px"}}>Decrement</Decrement>
            <p style={{display:"inline",marginRight:"15px"}}>{score}</p>
        </div>
    )
}
export default Scores