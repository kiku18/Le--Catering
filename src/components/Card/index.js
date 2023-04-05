const Card =(props) => {

    return(

       <div className="w3-quarter">
         <img src={props.image} alt="Sandwich" style={{width: '100%'}} />
         <h3>{props.title}</h3>
         <p>{props.desc}</p>
       </div>
    );
}

export default Card;