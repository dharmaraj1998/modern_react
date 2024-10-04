import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgImg = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}
function AnimalView({type}){
    const [like,setLike] = useState(0)

    const handleClick = ()=>{
        setLike(like + 1)

    }
    return (
        <div>
          <img onClick={handleClick} src={svgImg[type]} alt="svgImages" />
          <img src={heart} style={{width : 10 + 10 *like + "px"}} alt="like"/>
        </div>
    )
}
export default AnimalView;
