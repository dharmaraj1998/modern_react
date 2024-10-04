import Protcard from "./Protcard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png"


function App(){

    return(
        <div>
            <h1>card</h1>
            <div>
            <Protcard title = "alexa" address ="@hiejfdsnjdi" imageSrc = {AlexaImage}/>
            <Protcard title ="corona" address ="@hidhjeid" imageSrc = {CortonaImage}/>
            <Protcard title ="siri" address ="@joidsjfoej" imageSrc = {SiriImage}/>

            </div>
            


        </div>
    )
}

export default App;