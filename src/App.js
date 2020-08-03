import React,{useState,useEffect} from 'react'
function App(){
    /*Rendering user input to the screen on button click*/ 
    const [player,setPlayer]=useState('')//Create a state variable which is initially an empty string
const [playerArray,setPlayerArray]=useState([])//Create a state variable which is an empty array initially
    function handleChange(event){
        event.preventDefault();
        setPlayer(event.target.value)//Inside handleChange, modify the empty string variable to contain every letter of the input field
    }
    function handleSubmit(event){
        event.preventDefault();
        let playersList=[...playerArray]//Inside handleSubmit, create a new array variable which copies the empty state array variable
        playersList.push(player)//To the new array variable, push the string entered by the client
        setPlayerArray(playersList)//Now modify the state array variable to contain the new array variable
        setPlayer('')
    }
    return (
        <div>
            <h1 className="bg-warning" style={{textAlign:"center",color:"floralwhite"}}>Score Board</h1>
            <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
                <label><b>Enter player name:</b></label>
                <input type="text" style={{borderRadius:"25px"}} placeholder="Player Name" onChange={handleChange} value={player}/>
                <button type="submit">Add Player</button>
            </form>
            <p>{playerArray.map((player)=>{{/*Inside the return of the functional component, map through each element of
    the state array variable and render it to the screen using any valied jsx tags*/}
        return (player)
    })}</p>
        </div>
    )
}
export default App