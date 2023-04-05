import './Food.css';
import { Link, Outlet } from "react-router-dom";

const Food = () => {
    return (
        <div className='Food-container'>
     {/* !PAGE CONTENT! */}
     
     <div className="w3-main w3-content w3-padding" style={{maxWidth: '1200px', marginTop: '100px'}}>

      
       {/* !FOOD NAVIBAR! */}
       <div className="w3-row w3-large w3-light-grey">
        <div className="w3-col s3">
        <Link to='french' className="w3-button w3-block">French</Link>
        </div>
        <div className="w3-col s3">
        <Link to='italia' className="w3-button w3-block">Italian</Link>
        </div>
        <div className="w3-col s3">
        <Link to='deutsch' className="w3-button w3-block">German</Link>
        </div>
        <div className="w3-col s3">
        <Link to='english' className="w3-button w3-block">English</Link>
        </div>
      </div>
      
     </div>
  <Outlet></Outlet>
</div>
 
    );
}

export default Food;