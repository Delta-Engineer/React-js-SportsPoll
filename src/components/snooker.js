import React from 'react';
import PostData from '../data/test-assignment.json'

   

export default class Snooker extends React.Component {
   
    state = {

        // TEAM logos arranged in magnitude of the JSON data given 
        teamImages:[
            "https://i.ebayimg.com/images/g/EQEAAOSwP~tW2CsL/s-l300.jpg",
            "http://www.snookerisland.com/blog/wp-content/uploads/2011/11/gaz-allen2.jpg",
            "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/01/sei_47815487-c09f.jpg?quality=90&strip=all&zoom=1&resize=644%2C455&ssl=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5XcemjtSeV8zYbdbIkrtcwzzS8oFoJbQYs8Ph9hxprqNRDDnHA",
            "https://cdn3.iconfinder.com/data/icons/success-outline/64/success-coin-throphy-winner-512.png"



        ],

        teamStyle: {
            width: 200,
            height: 200,
            marginLeft: 30,
            marginRight: 30
        },
        
        teamArray: 0,
        match: "",
        HomeCounter: 0,
        AwayCounter: 0,
        DrawCounter: 0,
        resetState: false 
    };

   render(){
    const {teamStyle}=this.state
    
    var teamArray = 0
    //*Math.round function to get an remove float and get an intiger for display in the poll stats.
    var homePoll = Math.round(this.state.HomeCounter/(this.state.HomeCounter + this.state.AwayCounter + this.state.DrawCounter)*100)
    var drawPoll = Math.round(this.state.DrawCounter/(this.state.HomeCounter + this.state.AwayCounter + this.state.DrawCounter)*100)
    var awayPoll = Math.round(this.state.AwayCounter/(this.state.HomeCounter + this.state.AwayCounter + this.state.DrawCounter)*100)
    //SWITCH statement for relevant images per button in the JSON loop 
    switch(this.state.match){
        case "Ding Junhui - Allen, Gareth":  teamArray = 0 ;break
        case "Trump, Judd - Lines, Peter": teamArray = 2 ;break
        //eslint-disable-next-line
        default: 
    }

    
        return(
        <header className="Body-header">
            <div>
                 <h2>Snooker</h2>
                 <h3>Choose Game</h3>
                 {/*Match buttons for menu interface below header interface*/}
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Ding Junhui - Allen, Gareth", resetState: true} ) }} >Ding Junhui - Allen, Gareth</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Trump, Judd - Lines, Peter", resetState: true}) }}>Trump, Judd - Lines, Peter</button>
                 
                 {/*Fetch JSON data and use it to display per each relevant match button clicked, display data such as match name, home name, 
                away name, cup name, game place name and game status. Also includes polling stats in the JSON loop*/}
                 {
                     PostData.map((postDetail, index) =>{ 
                         return (postDetail.name === this.state.match ?  
                            <div>
                                
                                <h2>
                                {postDetail.group}
                                </h2>                                
                                    Playing in {postDetail.country}
                                
                                <p>Game {postDetail.state}</p>                            
                                <h3>                                                                 
                                    {postDetail.name}  
                                </h3>
                                <p>
                                <button className="team-button" onClick={()=> {this.setState({HomeCounter: this.state.HomeCounter +1})}}>
                                    <img style={teamStyle} 
                                    src = {this.state.teamImages[teamArray]} alt={postDetail.homeName}/>  
                                </button>
                                <button className="team-button" onClick = {()=>{this.setState({DrawCounter: this.state.DrawCounter +1})}}>
                                    <img style={teamStyle} 
                                    src = {this.state.teamImages[4]} alt="Draw"/>  
                                </button>
                                <button className="team-button" onClick={()=>{this.setState({AwayCounter: this.state.AwayCounter +1});}}>
                                    <img style={teamStyle}
                                    src = {this.state.teamImages[teamArray+1]} alt={postDetail.awayName}/> 
                                </button>
                                </p>
                            {/*JSON Polling stats */}
                            {this.state.HomeCounter + this.state.DrawCounter + this.state.AwayCounter !== 0 ?
                                 <div>
                                 <h5>
                                 {postDetail.homeName}: {homePoll}%
                                 </h5>
                                 <h5>
                                  Draw: {drawPoll}%   
                                   </h5>
                                  <h5>
                                  {postDetail.awayName}: {awayPoll}%
                                  </h5> </div> : null }   
                                  
                                  {this.state.resetState === true ? this.setState({HomeCounter: 0 , DrawCounter: 0, AwayCounter: 0, resetState: false}) : null}  
                                  
                                   
                            </div> : null)
                            
                            
     
                     } ) }
            </div>
        </header>
           
        );
        
}}
