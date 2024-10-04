import { useState } from "react";
import AnimalView from "./AnimalView";

const randomAnimal = ()=>{
    const animals = ["dog", "cat", "bird", "cow","dog","gator","horse"];
    return animals[Math.floor(Math.random()*animals.length)];
}

function App(){

    const[animal,setAnimal] = useState([])

    const handleClick =()=>{
        setAnimal([...animal,randomAnimal()])
    }

    const reUsable = animal.map((ani)=>{
        return <AnimalView type={ani}/>
    })

    return(
        <div>
            
            <button onClick={handleClick}>add Animal</button>
             <p>{reUsable}</p>
            


        </div>
    )
}

export default App;