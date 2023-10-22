
export default function InfoSignUp(props) {

    return (
    <body>
        <div className="everything">
        <p className="info">Information</p>
        <input className="name" type="text" placeholder="Displayed name"/>
        <input className="name" type="text" placeholder="Menu name"/>
        <p>Phone Number</p>
        <input className="price" type="text" placeholder="000-000-0000"/>
        <p>Venmo</p>
        <input className="price" type="text" placeholder="@Username"/>
        <p className="money">Price</p>
        <input className="price" type="text" placeholder="$0"/>
        <div className="start">
            <p>Start Date</p>
            <input className="time" type="text" placeholder="MM/DD/YY"/>
            <p>Start Time</p>
            <input className="time" type="text" placeholder="00:00"/>
            <select className="period">
            <option>AM</option>
            <option>PM</option>
            </select>
        </div>
        <p>
            Ingredients
        </p>
        <input className="ingre" type="text" placeholder="Eggs, potatoes, ..."/>

        <p>Allergens</p>
        <input className="ingre" type="text" placeholder="No allergens"/>
        



        <button className="post">
            Post!
        </button>
        </div>
        
        
    </body>
    );

  }

