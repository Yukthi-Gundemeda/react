import {useState} from 'react'

function About(){
	const[city,setCity]=useState("Vijayawada");
	const[country,setCountry]=useState("Paris")
	return(
		<div>
		{/*<h1>{country}</h1>
		<h2>{city}</h2>*/}
		
		<input
		   onChange={(e)=>setCity(e.target.value)}/><br/>
		<input
		   onChange={(e)=>setCountry(e.target.value)}/>
		   <button onClick={()=>console.log(city,country)}>Submit</button>
		</div>
		 )
}
export default About