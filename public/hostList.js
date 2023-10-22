import logo from './logo.svg';
import Stack from 'react-bootstrap/Stack';
import Host from './components/host.js';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HostList() {

  //hosts?.map((host,i)=>(
  //  <Host key={i} name={host.name} date={host.date} price={host.price} menu={host.menu} dietary={host.dietary}/>
  //))

  return (
    <div className='body'>
      <h3>Current listings for <b>Commons 7</b>:</h3><br/>

      <Stack direction="horizontal" gap={3}>
      
          <Host name={"Rachel"} date={"10/23/23"} time={"8:00AM"} price={"$5"} menu={"Eggs, toast, omelettes"} dietary={"No allergens"}/>
          <Host name={"Joe"} date={"10/24/23"} time={"9:00AM"} price={"$6"} menu={"Banana bread, oranges, muffin"} dietary={"Peanut"}/>
          <Host name={"Candace"} date={"10/23/23"} time={"10:00AM"} price={"$7"} menu={"French toast, tomatoes and eggs"} dietary={"No allergens"}/>
      </Stack>
    </div>
  );
}

export default HostList;
