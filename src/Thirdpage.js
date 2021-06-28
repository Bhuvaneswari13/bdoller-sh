import React from "react";
//import history from "./utils/history";
import download from "./download.png";
import BDO from "./BDO.png";


import { Link } from "react-router-dom";

function Thirdpage() {

  

  
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      //const accounts = await  web3.eth.getAccounts();
            
     alert("completed");    

    
      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<br/><br/>

<br/>
<div class="card2" style={{backgroundColor: "black",boxShadow:"1px 1px 10px 2px #fa3455 inset" }}>
<form onSubmit={onSubmitNFT} id="create-course-form" >

</form><br />
<div class="row ml-5">
<div class="col-1 ml-5">
<img src={BDO} width="60px" height="60px" margin-right="-20px"/>

</div>
<div class="col-1 ml-n5">
<img src={download} width="60px" height="60px"/>

  </div>

  </div><br/>
<p><b><h4>Pancake PRABH/BUSD</h4></b></p> 
<p>Deposit CAKE-LP PRABH/BUSD<br />
Earn eBNBshare</p>
<br />
<Link exact to="/Fourthpage">
<button class="btn btn-primary">
                Deposit
              </button>
</Link>

</div>


<br></br>
<br></br>

              
</center>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
	  
      </div>      
  );
}

export default Thirdpage;
