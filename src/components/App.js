
import React , {useEffect , useState} from "react";
import './../styles/App.css';

const App = () => {

  const [data , setData] = useState([]);

  async function getInfo(){
    let resp = await fetch("https://reqres.in/api/users")
    let userData = await resp.json()
    setData(userData.data);
 }

  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{display:"flex" , justifyContent:"space-between"}}>
          <b>Blue Whales</b>
          <button className="btn" onClick={getInfo}>Get User list</button>
        </div>
        <table style={{width:"100vw"}}>
          <tr style={{background:"gray" , color:"white"}}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
          
            {
              data.map((value)=>{
                console.log(value)
                return(
                  <tr>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td><img src={value.avatar}/></td>
                  </tr>
                )
              })
            }
          
        </table>
        
    </div>
  )
}

export default App
