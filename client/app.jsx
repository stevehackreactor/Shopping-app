// import react from 'react';
// import react-dom from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props) // this sends the appropriate props to the react component constructor
    this.state = {
      name: "steve",
      email: "google@yahoo.spam",
      password: "potatoes",
      addressLnOne: "123 wallaby ln",
      addressLnTwo: "hawaii",
      phoneNum: "123-123-1223",
      card: "11111112222",
      cvv: "123",
      zip: "99999",
      currentForm: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleClick = (event) => {
    event.preventDefault();
    // this will be the click event for the rendering of the
    console.log('starting the checkout process');
    this.setState({
      currentForm: this.state.currentForm + 1
    })
  }

  handleChange = (event) => {
    // this will be the handle change event to alter the state back in the parent App
    // uses e.target.value
  }

  // this will be the button which is pressed at the end of completing each form
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('stand in for submission');
    if (this.state.currentForm < 3) {
      this.setState({
        currentForm: this.state.currentForm + 1
      })
    } else {
      this.setState({
        currentForm: 0
      })

    }
  }



  render() {
    // insert jsx here (javascript and xml)
    // this will render a form to the page
    //must include a return statement

    return (
      <div>
        <h1>Amazon Procrastination Purchases</h1>
        <hr></hr>
        <LandingPage currentForm={this.state.currentForm} handleClick={this.handleClick}/>
        <FormOne currentForm={this.state.currentForm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <FormTwo currentForm={this.state.currentForm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <FormThree currentForm={this.state.currentForm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )

  }
}

var LandingPage = ({currentForm, handleClick}) => {
  if (currentForm !== 0) {
    return null;
  }
  return (
    <div>
      <h1>Landing Page</h1>
      <button id="beginCheckout" onClick={handleClick}>Begin Checkout</button>
    </div>
  )
}

var FormOne = ({currentForm, handleChange, handleSubmit}) => {
  if (currentForm !== 1) {
    return null;
  }

  return (
    <div>
    <form>
      <label for="name">Name</label>
      <br></br>
      <input type="textarea" name="name"></input>
      <br></br>
      <br></br>
      <label for="email">Email</label>
      <br></br>
      <input type="textarea" name="email"></input>
      <br></br>
      <br></br>
      <label for="password">Password</label>
      <br></br>
      <input type="textarea" name="password"></input>
      <br></br>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
    </div>
  )
}


var FormTwo = ({currentForm, handleChange, handleSubmit}) => {
  if (currentForm !== 2) {
    return null;
  }

  return (
    <div>
    <form>
      <label for="addressLnOne">Address Line One</label>
      <br></br>
      <input type="textarea" name="addressLnOne"></input>
      <br></br>
      <label for="addressLnTwo">Address Line Two</label>
      <br></br>
      <input type="textarea" name="addressLnTwo"></input>
      <br></br>
      <br></br>
      <label for="phone">Phone Number</label>
      <br></br>
      <input type="textarea" name="phone"></input>
      <br></br>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
    </div>
  )
}


var FormThree = ({currentForm, handleChange, handleSubmit}) => {
  if (currentForm !== 3) {
    return null;
  }

  return (
    <div>
    <form>
      <label for="creditCard">Credit Card</label>
      <br></br>
      <input type="textarea" name="creditCard"></input>
      <br></br>
      <br></br>
      <label for="expiration">Expiration Date</label>
      <br></br>
      <input type="textarea" name="expiration"></input>
      <br></br>
      <br></br>
      <label for="cvv">CVV code</label>
      <br></br>
      <input type="textarea" name="cvv"></input>
      <br></br>
      <br></br>
      <label for="zipCode">Billing Zip Code</label>
      <br></br>
      <input type="textarea" name="zipCode"></input>
      <br></br>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('app'));