import { useState } from "react"

export default function Fetch(){

    const [jokeSetup,setJokeSetup]= useState('')
    const [jokeDelivery,setJokeDelivery]=useState('')
    const getData = async()=>{
        const response = await fetch('https://v2.jokeapi.dev/joke/Any')
        const data = await response.json()
        if(data.type === "twopart"){
            setJokeSetup(data.setup)
            setJokeDelivery(data.delivery)
        }
        else{
            setJokeSetup(data.joke)
             setJokeDelivery('')
        }
    }
    return(
        <>
        <h1>{jokeSetup}</h1>
        <h2>{jokeDelivery}</h2>
        <button onClick={getData}>Click Here</button>
        </>
    )
    

    // return(
    //     <h1>Hello</h1>
    // )
}