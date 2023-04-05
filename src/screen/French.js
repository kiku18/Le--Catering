import Card from '../components/Card';
import Allfoods from './Allfoods';
import './Food.css';


const French = () => {
    let frenchJSON = Allfoods.filter(it => it.FoodId === "french");
    return (
        <div className='Food-container'>
     {/* !PAGE CONTENT! */}
     <div className="w3-main w3-content w3-padding" style={{maxWidth: '1200px', marginTop: '100px'}}>
       
      <div className="w3-row-padding w3-padding-16 w3-center" id="food">
        {frenchJSON.map(it => {
          return <Card title={it.title} desc={it.body} image={it.url} key={it.id} />

        })

        }
      </div>
     
   </div>
  
</div>
 
    );
}

export default French;