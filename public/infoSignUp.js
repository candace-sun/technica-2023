
import './infoSignUp.css'; 

export default function InfoSignUp(props) {
    document.body.style = 'background: #e8ffef;';
    return (
        <div className="wrapper">
    <div className="infoSignUp-body">


<div class="infoSignUp-everything">
  <p class="info">Information</p>
  <input class="infoSignUp-name" type="text" placeholder="Displayed name" required/>
  <input class="infoSignUp-name" type="text" placeholder="Menu name" required/>
  <p>Phone Number</p>
  <input class="price" type="tel" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
  <p>Venmo</p>
  <input class="price" type="text" placeholder="@Username" required/>
  <p>Room Number</p>
  <input class="price" type="text" placeholder="0000" required/>
  <p>Floor Number</p>
  <input class="price" type="text" placeholder="0" required/>
  <p class="money">Price</p>
  <input class="price" type="text" placeholder="$0"/>
  <div class="start">
    <p>Start Date</p>
    <input class="time" type="date" placeholder="MM/DD/YY" required/>
    <p>Start Time</p>
    <input class="time" type="time" placeholder="00:00" required/>
  </div>
  <p>
    Ingredients
  </p>
  <input class="ingre" type="text" placeholder="Eggs, potatoes, ..." required/>

  <p>Allergens</p>
  <input class="ingre" type="text" placeholder="No allergens"/>
  


  <button onclick="openForm()" class="post">
    Post!
  </button>
    </div>
    </div>
    </div>
    );

  }

