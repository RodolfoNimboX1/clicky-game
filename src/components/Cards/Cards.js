import React from 'react';

const Cards = props => (
<div className="container">

  <div className="row">
    
<div className="card" style={{width: "18rem"}} onClick={() => props.setClicked(props.id)}>
  <img className="card-img-top" src={props.image} alt={props.name} />
  <div className="card-body">
    <p className="card-text">{props.name}</p>
  </div>
</div>


    <div className="col-sm">

<div className="card" style={{width: "18rem"}} onClick={() => props.setClicked(props.id)}>
  <img className="card-img-top" src={props.image} alt={props.name} />
  <div className="card-body">
    <p className="card-text">{props.name}</p>
  </div>
</div>

    </div>
    <div className="col-sm">

<div className="card" style={{width: "18rem"}} onClick={() => props.setClicked(props.id)}>
  <img className="card-img-top" src={props.image} alt={props.name} />
  <div className="card-body">
    <p className="card-text">{props.name}</p>
  </div>
</div>

    </div>

  </div>
</div>
);

export default Cards;