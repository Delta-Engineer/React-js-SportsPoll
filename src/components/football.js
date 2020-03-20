import React from 'react';
import PostData from '../data/test-assignment.json'

   

export default class Football extends React.Component {
   
    state = {

        // TEAM logos arranged in magnitude of the JSON data given 
        teamImages:[
            "https://upload.wikimedia.org/wikipedia/en/f/f4/Chaniafclogo.jpg",
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Panthrakikos.png/230px-Panthrakikos.png",
            "https://upload.wikimedia.org/wikipedia/en/5/5b/Olvol.png",
            "https://www.worldofvolley.com/upload/thumbnail/2019/06/16/784588_paokjpg",
            "https://images-na.ssl-images-amazon.com/images/I/416M1aYpOCL.jpg",
            "https://www.sofascore.com/images/team-logo/football_22757.png",
            "https://www.mightytips.com/wp-content/uploads/2019/06/ezgif.com-resize-41.jpg",
            "http://allaboutwindowsphone.com/images/appicons/201810.png",
            "https://cdn.worldvectorlogo.com/logos/africain-7703.svg",
            "https://www.africatopsports.com/wp-content/uploads/2014/03/Marsa.png",
            "https://cdn.freebiesupply.com/logos/large/2x/karsiyaka-logo-png-transparent.png",
            "http://www.kastamonuspor1966.org/tarihce/sonlogo.png",
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
        case "Chania FC - Panthrakikos Komotini":  teamArray = 0 ;break
        case "Olympiakos Volos - PAOK Thessaloniki": teamArray = 2 ;break
        case "Israel U18 - Ukraine U18": teamArray = 4 ;break
        case "CA Bizertin - Stade Gabesien": teamArray = 6 ;break
        case "Club Africain - AS de la Marsa": teamArray = 8 ;break
        case "Kar\u015f\u0131yaka - Kastamonuspor": teamArray = 10 ;break
        //eslint-disable-next-line
        default: 
    }

    
        return(
        <header className="Body-header">
            <div>
                 <h2>Football</h2>
                 <h3>Choose Game</h3>
                 {/*Match buttons for menu interface below header interface*/}
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Chania FC - Panthrakikos Komotini", resetState: true} ) }} >Chania FC - Panthrakikos Komotini</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Olympiakos Volos - PAOK Thessaloniki", resetState: true}) }}>Olympiakos Volos - PAOK Thessaloniki</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Israel U18 - Ukraine U18", resetState: true}) }}>Israel U18 - Ukraine U18</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "CA Bizertin - Stade Gabesien", resetState: true}) }}>CA Bizertin - Stade Gabesien</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Club Africain - AS de la Marsa", resetState: true}) }}>Club Africain - AS de la Marsa</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Kar\u015f\u0131yaka - Kastamonuspor", resetState: true}) }}>Karşıyaka - Kastamonuspor</button>
                 
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
                                    src = {this.state.teamImages[12]} alt="Draw"/>  
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
