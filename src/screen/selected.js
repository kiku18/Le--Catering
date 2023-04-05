import Allfoods from "./Allfoods";
import Scard from "../components/Scard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useContext, useState } from "react";

const Selected = () => {
  const [filter, setFilter] = useState({});
  const [allJson, setAllJson] = useState(Allfoods);
  const [pricefilter, setPriceFilter] = useState({});
  // let allJSON = Allfoods.filter(it => it.FoodId === "french" || "italian");
  const navigate = useNavigate();
  let { setIsLogin } = useContext(AuthContext);
  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    setIsLogin(false);
  };
  const setValues = (ev) => {
    console.log(ev.target.checked, ev.target.name);
    let filterObj = {
      ...filter,
      [ev.target.name]: ev.target.checked,
    };
    setFilter(filterObj);

console.log(Object.values(filterObj).includes(true))
if (Object.values(filterObj).includes(true)){
  let filteredAllJson = Allfoods.filter((it) => {
    return filterObj[it.FoodId];
  });
  console.log(filteredAllJson)
  setAllJson(filteredAllJson);
} else{
  setAllJson(Allfoods)
}
  };
  console.log(filter);
  // new setPrice Value
   const setPriceValues = (ev) =>{
    let filteredObj = {
      ...pricefilter,
      [ev.target.name]: ev.target.checked,
     };
     setPriceFilter(filteredObj);
 console.log(Object.values(filteredObj).includes(true))
if (Object.values(filteredObj).includes(true)){
  let pricefilteredAllJson = Allfoods.filter((it) => {
    return filteredObj[it.price];
  });
  console.log(pricefilteredAllJson)
  setAllJson(pricefilteredAllJson);
} else{
  setAllJson(Allfoods)
}
  };
  console.log(pricefilter);
// }

  return (
    <>
      <body class="w3-content" style={{ maxWidth: "1200px" }}>
        {/* Top header */}
        <header className="w3-container w3-xlarge">
          <p className="w3-left w3-text-brown">Place Your Order!</p>
          <p className="w3-right">
            <button
              className="w3-margin-right w3-button w3-teal w3-border w3-border-purple w3-round-xxlarge w3-small"
              onClick={() => logout()}
            >
              Logout
            </button>
          </p>
          <p className="w3-right">
            <i
              className="fa fa-shopping-cart w3-margin-right"
              style={{ color: "orange" }}
            />
          </p>
        </header>

        {/* Image header */}
        <div className="w3-display-container w3-container">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="bg-food"
            style={{ width: "100%" }}
          />
          <div
            className="w3-display-topleft w3-text-white"
            style={{ padding: "24px 48px" }}
          >
            <h1 className="w3-jumbo w3-hide-small">Cooking gone wrong?</h1>
            <h1 className="w3-hide-large w3-hide-medium">Unexpected guests?</h1>
            <h1 className="w3-hide-small"> Hungry?</h1>
            <p>
              <a
                href="#jeans"
                className="w3-button w3-black w3-padding-large w3-large"
              >
                ORDER NOW
              </a>
            </p>
          </div>
        </div>

        {/*Empty gap */}
        <div className="w3-container" id="gap">
          <p />
        </div>
        {/*Filter Options */}
        <div className="w3-container" id="options">
          <form className="w3-container w3-card-4">
            <h2>Choose by filtering</h2>
            <div className="w3-row-padding">
              <div className="w3-half">
                <label className="w3-text-brown">Filter by Cuisine</label>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="french"
                    onChange={setValues}
                  />
                  <label> French</label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="italian"
                    onChange={setValues}
                  />
                  <label> Italian</label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="deutsch"
                    onChange={setValues}
                  />
                  <label> German</label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="english"
                    onChange={setValues}
                  />
                  <label> English</label>
                </p>
              </div>
              <div className="w3-half">
                <label className="w3-text-brown">Filter by Price</label>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="14.99"
                    onChange={setPriceValues}
                  />
                  <aria-label> {"<"} $15</aria-label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="19.99"
                    onChange={setPriceValues}
                  />
                  <aria-label>
                    {" "}
                    {">"} $15 and {"<"} $20
                  </aria-label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="21.59"
                    onChange={setPriceValues}
                  />
                  <aria-label>
                    {" "}
                    {">"} $20 and {"<"} $24
                  </aria-label>
                </p>
                <p>
                  <input
                    className="w3-check"
                    type="checkbox"
                    name="24.99"
                    onChange={setPriceValues}
                  />
                  <aria-label> {">"} $24</aria-label>
                </p>
              </div>
            </div>
          </form>
        </div>
        {/*Empty gap */}
        <div className="w3-container" id="gap">
          <p />
        </div>
        {/*Food section */}
        <div className="w3-row">
          {allJson.map((it) => {
            return (
              <Scard
                title={it.title}
                price={it.price}
                image={it.url}
                key={it.id}
              />
            );
          })}

          {/* Footer */}
          <footer className="w3-center w3-padding-64 w3-hover-opacity-off">
            <a href="#home" className="w3-button w3-light-grey">
              <i className="fa fa-arrow-up w3-margin-right" />
              To the top
            </a>
            <div className="w3-xlarge w3-section">
              <i className="fa-brands fa-square-facebook w3-hover-opacity " />{" "}
              <i className="fa-brands fa-instagram w3-hover-opacity" />{" "}
              <i className="fa-brands fa-snapchat w3-hover-opacity" />{" "}
              <i className="fa-brands fa-pinterest-p w3-hover-opacity" />{" "}
              <i className="fa-brands fa-twitter w3-hover-opacity" />{" "}
              <i className="fa-brands fa-linkedin-in w3-hover-opacity" />
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Selected;
