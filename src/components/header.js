import React, {Component} from "react";
import Football from "./football";
import Snooker from "./snooker";
import Handball from "./handball";
import IceHockey from "./ice_hockey"
import Tennis from "./tennis"

class Header extends Component{
    //INTERACTIVE MENU SELECTOR WITH IMAGES 

 state = {
     images: [
        //football icon 
        "https://www.logospng.com/images/40/football-clubs-40797.png",
        //snooker icon 
        "http://simpleicon.com/wp-content/uploads/eight-ball.png",
         //handball icon
        "https://freepngimg.com/download/handball/29984-9-handball.png",
        //ice hockey icon
        "https://images.vexels.com/media/users/3/144999/isolated/preview/e34282e9532372f784f18b2e5763cec7-silhueta-separatista-de-jogador-de-h--quei-by-vexels.png",
       // tennis icon
        "https://static.thenounproject.com/png/8887-200.png"
     ],
     style: {
        width: 100,
        height: 100,
        marginLeft: 70,
        marginRight: 70
    },

    pressed: ""
 };



    render(){
        const {style}=this.state
        return(
            
            <header className="App-header">
                <h1>SPORTS POLL</h1>
                <div>

                {/* INTERACTIVE IMAGE ARRAY BUTTONS*/}
                   <button onClick={()=>{this.setState({pressed: "football"});}}> 
                        <img style ={style}
                            src ={this.state.images[0]} alt='Football'/>                               
                    </button>
                    <button onClick={()=>{this.setState({pressed: "snooker"});}}> 
                        <img style ={style}
                            src ={this.state.images[1]} alt='Snooker'/>
                    </button>
                    <button onClick={()=>{this.setState({pressed: "handball"});}}> 
                        <img style ={style}
                            src ={this.state.images[2]} alt='Handball'/>
                    </button>
                    <button onClick={()=>{this.setState({pressed: "ice hockey"});}}> 
                        <img style ={style}
                            src ={this.state.images[3]} alt='Ice Hockey'/>
                    </button>
                    <button onClick={()=>{this.setState({pressed: "tennis"});}}> 
                        <img style ={style}
                            src ={this.state.images[4]} alt='Tennis'/>
                    </button>
                    {this.state.pressed ==="football" ? <Football/> : null}
                    {this.state.pressed ==="snooker" ? <Snooker/> : null}
                    {this.state.pressed ==="handball" ? <Handball/> : null}
                    {this.state.pressed ==="ice hockey" ? <IceHockey/> : null}
                    {this.state.pressed ==="tennis" ? <Tennis/> : null}

                </div>
            </header>
        );
    }
}
export default Header;