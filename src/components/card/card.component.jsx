//import { Component } from "react";
import './card.styles.css';


//const Card = ({props}) => { destructure return(); }; structure
const Card = ({monster}) => {
    const {id,name,email} = monster;
    
    return(
    <div>
          <div className='card-container' key={id}>
            <img 
            alt= {`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=200x200`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        
    </div>
    );

};

// class Card extends Component{
//     render(){
//         const {id,name,email} = this.props.monster;
//         return(
//             <div>
//             <div className='card-container' key={id}>
//             <img 
//             alt= {`monster ${name}`} 
//             src={`https://robohash.org/${id}?set=set2&size=200x200`}
//             />

//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//             </div>
//         )
//     }
// }

export default Card;

