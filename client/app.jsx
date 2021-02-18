// import react from 'react';
// import react-dom from 'react-dom'; not needed as this is imported from a cdn in the index.html file

// import axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props) // this sends the appropriate props to the react component constructor
    this.state = {
      name: "",
      email: "",
      password: "",
      addressLnOne: "",
      addressLnTwo: "",
      phone: "",
      creditCard: "",
      expiration: "",
      cvv: "",
      zipCode: "",
      currentForm: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.axiosRequest = this.axiosRequest.bind(this);

  }

  handleClick = (event) => {
    event.preventDefault();
    // this will be the click event for the rendering of the
    console.log('starting the checkout process');
    this.setState({
      currentForm: this.state.currentForm + 1
    })
  }

  // this will be the handle change event to alter the state back in the parent App
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  axiosRequest = (state) => {
    axios.post('http://localhost:3002/', state)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // this will be the button which is pressed at the end of completing each form
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('STATE ON SUBMISSION', this.state);
    if (this.state.currentForm < 3) {
      this.setState({
        currentForm: this.state.currentForm + 1
      })
    } else {
      console.log('Form being submitted', JSON.stringify(this.state));
      // perform an ajax or axios post request to the server
      this.axiosRequest(this.state);
      this.setState({
        "name": "",
        "email": "",
        "password": "",
        "addressLnOne": "",
        "addressLnTwo": "",
        "phone": "",
        "creditCard": "",
        "expiration": "",
        "cvv": "",
        "zipCode": "",
        "currentForm": 0
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
      <input type="textarea" name="name" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="email">Email</label>
      <br></br>
      <input type="textarea" name="email" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="password">Password</label>
      <br></br>
      <input type="textarea" name="password" onChange={handleChange}></input>
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
      <input type="textarea" name="addressLnOne" onChange={handleChange}></input>
      <br></br>
      <label for="addressLnTwo">Address Line Two</label>
      <br></br>
      <input type="textarea" name="addressLnTwo" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="phone">Phone Number</label>
      <br></br>
      <input type="textarea" name="phone" onChange={handleChange}></input>
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
      <input type="textarea" name="creditCard" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="expiration">Expiration Date</label>
      <br></br>
      <input type="textarea" name="expiration" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="cvv">CVV code</label>
      <br></br>
      <input type="textarea" name="cvv" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <label for="zipCode">Billing Zip Code</label>
      <br></br>
      <input type="textarea" name="zipCode" onChange={handleChange}></input>
      <br></br>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('app'));