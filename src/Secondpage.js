import React from "react";

import 'moment-timezone';

import {useState,useEffect} from 'react';
import web3 from './web3';

import bdooracle from "./bdooracle";
import boardroom from "./Boardroom";

import share from "./share";
import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";

function MyVerticallyCenteredModal1(props) {
  
  var [setdeposite] = useState("");
  

  const Deposited = async (event) =>{
    event.preventDefault();
 // var x=document.getElementById("mymodal").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te=document.getElementById("tid").value;
    alert(te)
    te=te*1000000000;
    
    setdeposite(await boardroom.methods.deposit(te).send({
      from: accounts[0]
     
    }));
    //setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
    
  } 



  return (


    
    <Modal
      {...props}
      style={{width:"500px" , marginLeft:"400px"}}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        Deposite your amount...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
       {/* <h4 style={{textAlign: "center"}}></h4>*/}
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Deposited}>Deposite</Button>
      </Modal.Footer>
    </Modal>
  );
}
    
function MyVerticallyCenteredModal2(props) {
  
  var [setwithdraw] = useState("");
  
  const Withdraw = async (event) =>{
    event.preventDefault();
    //var x1=document.getElementById("mymodal1").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te1=document.getElementById("tid1").value;
    alert(te1);
    te1=te1*1000000000;
    

    setwithdraw(await boardroom.methods.withdraw(te1).send({
      from: accounts[0]
     
    }));
  }



  return (


    
    <Modal
      {...props}
      style={{width:"500px" , marginLeft:"400px"}}
 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal1"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        withdraw your deposited coin !!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
        {/*<h4 style={{textAlign: "center"}}></h4>*/}
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid1" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Withdraw}>Withdraw</Button>
      </Modal.Footer>
    </Modal>
  );
}
    


function Secondpage() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  var [getCurrentEpoch] = useState("");
  var [getnextEpoch,setepoch1] = useState("");

  //var [nextseigniorage,setnextseigniorage] = useState("");

  
  
  //var [rate,setrate] = useState("");
  var [twap] = useState("");
  //var [twap1,settwap1] = useState("");
  var [d] = useState("");

  var [deposited] = useState("");
  var [locked] = useState("");
  var [setapprove] = useState("");
  //var [setdeposite] = useState("");
  var [amount,setamount]= useState("");
  //const [tid,setId] = useState("");
  //const [tid1] = useState("");
  //const [setSeigniorage] = useState("");
  //var [setwithdraw] = useState("");
  var [bal] = useState("");
  var [setclaim] = useState("");
  var[ear,setear] = useState("");
  

      const approve = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        setapprove(await share.methods.approve("0x804BBB8c0316c933E789f3A2FEbDb6Cac9a06f8E","999999999900000000000000000000000000000").send({
          from: accounts[0]
         
        }));
      }   //0x804BBB8c0316c933E789f3A2FEbDb6Cac9a06f8E
     /*const Deposited = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te=document.getElementById("tid").value;
        alert(te)
        setdeposite(await boardroom.methods.deposit(te).send({
          from: accounts[0]
         
        }));
        setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
        
      }
      const Withdraw = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te1=tid1;
        alert(te1)
        setwithdraw(await boardroom.methods.withdraw(te1).send({
          from: accounts[0]
         
        }));
      }*/
      const Claim = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        setclaim(await boardroom.methods.claimReward().send({
          from: accounts[0]
         
        }));
        alert("Rewards claimed");
      }
      
      //useEffect(()=>{bal1()},[]);
      useEffect(()=>{check()},);

      var check=async()=>{
        alert("completed");  
        setepoch1(await bdooracle.methods.nextEpochPoint().call());

        d=new Date(getnextEpoch * 1000);
        var d1=(d.toLocaleTimeString('en-US'));

      // var dateStringWithTime = moment(d).format('HH:MM:SS');

       
        alert(d1)
        document.getElementById("nextepo").innerHTML =d1;
      }
  var bal1 = async () => {
    

      const accounts = await  web3.eth.getAccounts();
    setear(await boardroom.methods.pendingBlack(accounts[0]).call()); 
      
  };
  useEffect(()=>{bal1()},[ear]);
  return (
    <div className="light">
      
<center>
<br></br>
<h2 class="dark1"><b>Deposite your Seigniorage Share</b>
</h2> 

  <br></br>

		<form onSubmit={bal1} id="create-course-form" >

   
</form>
<br/>

<div class="container">
  <div class="row">
  <div class="col align-self-start">
    <label class="epoch">Epoch :<span>{getCurrentEpoch}</span></label>
  </div>
  </div>
  <br/>

  <div class="row">
    <div class="col">
      <label class="ll"  width="100%">nextEpochPoint<br/><span id="nextepo"><br/></span></label>

    </div>
    <div class="col">
      <label class="ll">eBNBmom Price(TWAP)<br/>$<span>{((twap/100000000000000000)/(73.66)).toFixed(2)

      }</span></label>
    </div>
  </div><br/>
  <br/>
  <div class="row">
    <div class="col">
      <label class="ll"> SeBNBmom Deposited<span><br/>{deposited}</span></label>
    </div>
    <div class="col">
      <label class="ll">Locked value<span><br/>{locked}</span></label>
    </div>
  </div>
</div>
<br/>
<br/>
         <p>
         <b> First we need to approve then only we are able to call deposite and Withdraw</b> <br /><br/>
           <button onClick={approve} class="btn btn-primary">Approve</button>
         </p> <br />
        <div class="container row">
          <div class="col">
            <div class="ll1">
              <br/><br/>
            <Button variant="primary" onClick={() => setModalShow1(true)}>
            Deposite
        </Button>
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /><br/>
        <br/>
          <b>Your deposited amount<br /> {bal}</b>
          <br/>
          <Button variant="primary" onClick={() => setModalShow2(true)}>
          Withdraw
        </Button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
        <br/>
            </div>
          </div>
          <div class="col ll2">
            <br/>
            <br/>
          <b>Your Earned amount  :{ear/1000000000}</b><br /><br/>
  <button  class="btn btn-primary" onClick={Claim}>ClaimRewards </button>
     <br/>
     <br/>
          </div>
        
         
         
         
        </div>
<br></br>
<br/>
     
      
<br></br>
<br></br>
</center>

<br></br>
<br></br>
 </div>      
  );
}

export default Secondpage;
