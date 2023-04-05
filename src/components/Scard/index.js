const Scard = (props) => {
  return (
    <div className="w3-col l3 s6">
      <div className="w3-container">
        <div className="w3-display-container">
          <img src={props.image} alt="food" style={{ width: "100%" }} />
          <span className="w3-tag w3-display-topleft w3-yellow">New</span>
          <div className="w3-display-middle w3-display-hover">
            <button className="w3-button w3-black">
              Order now <i className="fa fa-shopping-cart" />
            </button>
          </div>
        </div>
        <p>
          {props.title}
          <br />
          <b>${props.price}</b>
        </p>
      </div>
    </div>
  );
};

export default Scard;
