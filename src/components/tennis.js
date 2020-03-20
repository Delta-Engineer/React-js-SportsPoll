import React from 'react';
import PostData from '../data/test-assignment.json'

   

export default class Tennis extends React.Component {
   
    state = {

        // TEAM logos arranged in magnitude of the JSON data given 
        teamImages:[
            "https://www.itftennis.com/media/295085/295085_headshot.jpg",
            "https://www.atptour.com/-/media/tennis/players/head-shot/lr2017/doumbia__sadio_2017.png",
            "https://www.atptour.com/-/media/tennis/players/head-shot/lq/active/bangoura_sekou_2017.png",
            "https://www.atptour.com/-/media/tennis/players/head-shot/2018/patino_luis_getty18.png",
            "https://www.atptour.com/-/media/tennis/players/head-shot/2019/geerts-michael_head_pp2019.png",
            "https://www.atptour.com/-/media/tennis/players/head-shot/2018/roberts_justin_getty18.png",
            "https://www.atptour.com/-/media/tennis/players/head-shot/lq/active/clayton_s_headshot_lq17.png",
            "https://www.itftennis.com/media/299966/299966_headshot.jpg",
            "https://www.wtatennis.com/sites/default/files/styles/340x360/public/player_full_316344.png",
            "https://www.itftennis.com/media/227604/227604.jpg",
            "https://www.tennis.com.au/wp-content/uploads/2012/11/Jess-Moore-700x450.jpg",
            "https://usajaguars.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2012/10/19/MartinMaryAngela_13Practice_11.jpg",
            "https://www.itftennis.com/media/154616/154616.jpg",
            "http://i.imgur.com/jBRoJnz.jpg?2",
            "http://www1.pictures.zimbio.com/gi/Jia+Jing+Lu+Nuernberger+Versicherungscup+2016+DgZ7vSaaM-bl.jpg",
            "https://media.diepresse.com/images/uploads_620/c/f/f/5254399/FE2FF40C-CA8D-44B0-B1F4-A0F7AC4F60E1_v0_h.jpg",
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
        case "Harris, L G M\/Maamoun, K M - Doumbia, S\/Reboul, F":  teamArray = 0 ;break
        case "Bangoura, Sekou - Halebian, Alexios": teamArray = 2 ;break
        case "Pla Malfeito, Jaume - Roberts, Justin": teamArray = 4 ;break
        case "Clayton, Scott - Mridha, J": teamArray = 6 ;break
        case "Buyukakcay, C\/Krunic, A - Kania, P\/Kerkhove, L": teamArray = 8 ;break
        case "Baskova, D\/Podlinska, M - Chernetsova, D\/Perper, A": teamArray = 10 ;break
        case "Stoilkovska, M - Njoze, M": teamArray = 12 ;break
        case "Jia-Jing Lu - Haas, Barbara": teamArray = 14 ;break
        //eslint-disable-next-line
        default: 
    }

    
        return(
        <header className="Body-header">
            <div>
                 <h2>Football</h2>
                 <h3>Choose Game</h3>
                 {/*Match buttons for menu interface below header interface*/}
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Harris, L G M\/Maamoun, K M - Doumbia, S\/Reboul, F", resetState: true} ) }} >Harris, L  - Doumbia, S </button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Bangoura, Sekou - Halebian, Alexios", resetState: true}) }}>Bangoura, Sekou - Halebian, Alexios</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Pla Malfeito, Jaume - Roberts, Justin", resetState: true}) }}>Pla Malfeito, Jaume - Roberts, Justin</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Clayton, Scott - Mridha, J", resetState: true}) }}>Clayton, Scott - Mridha, J</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Buyukakcay, C\/Krunic, A - Kania, P\/Kerkhove, L", resetState: true}) }}>Buyukakcay, C  - Kania, P </button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Baskova, D\/Podlinska, M - Chernetsova, D\/Perper, A", resetState: true}) }}>Baskova, D  - Chernetsova, D </button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Stoilkovska, M - Njoze, M", resetState: true}) }}>Stoilkovska, M - Njoze, M</button>
                 <button className = "Button-style" onClick={()=> {this.setState({match: "Jia-Jing Lu - Haas, Barbara", resetState: true}) }}>Jia-Jing Lu - Haas, Barbara</button>
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
                                    src = {this.state.teamImages[16]} alt="Draw"/>  
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
