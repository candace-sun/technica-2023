import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const onBackButtonEvent = (e) => {

  e.preventDefault();var currentLocation = window.location.pathname;

  history.push('${currentLocation}/mypage/new')};

  useEffect(() => {window.addEventListener('popstate', onBackButtonEvent);return () => {window.removeEventListener('popstate', onBackButtonEvent);

  };}, [])
  
class MealForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

function writeUserData(userId, name, email, ingredients, price, start, end) {
  const db = getDatabase();
  set(ref(db, 'hosts/' + userId), {
    name: name,
    email: email,
    ingredients : ingredients,
    price: price,
    start: start,
    end: end
  });
}