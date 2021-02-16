// import something from 'f1.js'

var ConfirmInfo = props => {
  console.log('on the confirmation page')
  return (
    <div>
      <h2> Please Confirm info then press submit</h2>
      <div>
        <div>Name: {props.AccountInto.name}</div>
        <div>Email: {props.AccountInto.email}</div>
        <div>Password: {props.AccountInto.password}</div>
      </div>
      <div>
        <div>Address: {props.AccountInto.address}</div>
        <div>Line2: {props.AccountInto.line2}</div>
        <div>City: {props.AccountInto.city}</div>
        <div>State: {props.AccountInto.state}</div>
        <div>ZipCode: {props.AccountInto.zip}</div>
        <div>phoneNumber: {props.AccountInto.phone}</div>
      </div>
      <div>
        <div>Credit Card Number: {props.AccountInto.ccNumber}</div>
        <div>Expiration Date: {props.AccountInto.expirDate}</div>
        <div>CVV {props.AccountInto.cvv}</div>
        <div>Billing Zip {props.AccountInto.billingZip}</div>
      </div>
      <form onSubmit={props.completeCheckout}>
        <input type="submit" value="Complete Checkout" />
      </form>
    </div>
  )
}

var Form3 = props => {
  console.log('loading form 3')
  return (
    <div>
    <form onSubmit={props.handleNext}>
      <div>Credit Card Info</div>
      <label>Credit Card Number
        <input type="text" value={props.AccountInto.ccNumber} onChange={props.ccNumberChange}/>
      </label>
      <label>Expiration Data
        <input type="text" value={props.AccountInto.expirDate} onChange={props.expirDateChange}/>
      </label>
      <label>CVV Number
        <input type="text" value={props.AccountInto.cvv} onChange={props.cvvChange}/>
      </label>
      <label>Billing Zip Code
        <input type="text" value={props.AccountInto.billingZip} onChange={props.billingZipChange}/>
      </label>
      <input type="submit" value="Next" />
    </form>
  </div>
  )
}


var Form2 = props => {
  console.log('loading form 2')
  return (
    <div>
      <form onSubmit={props.handleNext}>
        <div>Shipping Information</div>
        <label>Address
          <input type="text" value={props.AccountInto.address} onChange={props.addressChange}/>
        </label>
        <label>line 2
          <input type="text" value={props.AccountInto.line2} onChange={props.line2Change}/>
        </label>
        <label>city
          <input type="text" value={props.AccountInto.city} onChange={props.cityChange}/>
        </label>
        <label>state
          <input type="text" value={props.AccountInto.state} onChange={props.stateChange}/>
        </label>
        <label>zip code
          <input type="text" value={props.AccountInto.zip} onChange={props.zipChange}/>
        </label>
        <label>phone number
          <input type="text" value={props.AccountInto.phone} onChange={props.phoneChange}/>
        </label>
        <input type="submit" value="Next" />
      </form>
    </div>
  )
}


var Form1 = props => {
  console.log('loading form 1')
  //F1 collects name, email, and password for account creation.co
  return (
    <div>

    <form onSubmit={props.handleNext}>
      <div>AccountCreation</div>
      <label>Name
        <input type="text" value={props.AccountInto.name} onChange={props.nameChange}/>
      </label>
      <label>email
        <input type="text" value={props.AccountInto.email} onChange={props.emailChange}/>
      </label>
      <label>password
        <input type="text" value={props.AccountInto.password} onChange={props.passwordChange}/>
      </label>
      <input type="submit" value="Next" />
    </form>
    </div>
  )
}

var Checkout = props => {
  return (
    <div>
    <div>Ready To Checkout?</div>
    <form onSubmit={props.handleNext}>
      <label>Checkout</label>
      <input type="submit" value="Checkout" />
    </form>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: 'Tim',
      email: 'td@mail.com',
      password: 'password',
      address: '123 Alma',
      line2: 'line2',
      city: 'san jose',
      state: 'ca',
      zip: 95111,
      phone: 1234567890,
      ccNumber: 1234123412341234,
      expirDate: '01/22',
      cvv: 372,
      billingZip: 95111
    }
  }

  handleNext(event) {
    event.preventDefault()
    let temp = this.state.page
    console.log(`the current page is ${temp}`)
    temp++
    console.log(temp)
    this.setState({
      page: temp
    })
    console.log(`changing to ${temp}`)
  }

  completeCheckout(event) {
    event.preventDefault()
    //post request to server
    $.ajax({
      type: "POST",
      url: "http://localhost:3000",
      data: this.state
    })
      .done((returnVal)=>{
        console.log("HELLO")
        console.log(returnVal)
        this.setState({
          page: 0,
          previous: returnVal
        })
      })
      //gets saved on server
    //reset client to initial blank state, ready to go again
  }

  //1 source of truth tracking change through the application
  nameChange (event) { this.setState({name: event.target.value}) }
  emailChange (event) { this.setState({email: event.target.value}) }
  passwordChange (event) { this.setState({password: event.target.value}) }
  addressChange (event) { this.setState({name: event.target.address}) }
  line2Change (event) { this.setState({email: event.target.line2}) }
  cityChange (event) { this.setState({password: event.target.city}) }
  stateChange (event) { this.setState({name: event.target.state}) }
  zipChange (event) { this.setState({email: event.target.zip}) }
  phoneChange (event) { this.setState({password: event.target.phone}) }
  ccNumberChange (event) { this.setState({ccNumber: event.target.city}) }
  expirDateChange (event) { this.setState({expirDate: event.target.state}) }
  cvvChange (event) { this.setState({cvv: event.target.zip}) }
  billingZipChange (event) { this.setState({billingZip: event.target.phone}) }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    if (this.state.page === 0) {
      if (this.state.previous) {
        return (
          <div>
            <Checkout handleNext={this.handleNext.bind(this)}/>
            <div>Very Ugly, but this is all of the saved checkout data</div>
            <div>{JSON.stringify(this.state.previous)}</div>
          </div>
        )
      }
      return (
        <div>
          <Checkout handleNext={this.handleNext.bind(this)}/>
        </div>
      )
    } else if (this.state.page === 1) {
      return (
        <div>
          <Form1
            AccountInto={this.state}
            handleNext={this.handleNext.bind(this)}
            nameChange={this.nameChange.bind(this)}
            emailChange={this.emailChange.bind(this)}
            passwordChange={this.passwordChange.bind(this)}
          />
        </div>
      )
    } else if (this.state.page === 2) {
        return (
          <div>
            <Form2
              AccountInto={this.state}
              handleNext={this.handleNext.bind(this)}
              addressChange={this.addressChange.bind(this)}
              line2Change={this.line2Change.bind(this)}
              cityChange={this.cityChange.bind(this)}
              stateChange={this.stateChange.bind(this)}
              zipChange={this.zipChange.bind(this)}
              phoneChange={this.phoneChange.bind(this)}
            />
          </div>
        )
    } else if (this.state.page === 3) {
      return (
        <div>
        <Form3
          AccountInto={this.state}
          handleNext={this.handleNext.bind(this)}
          ccNumberChange={this.ccNumberChange.bind(this)}
          expirDateChange={this.expirDateChange.bind(this)}
          cvvChange={this.cvvChange.bind(this)}
          billingZipChange={this.billingZipChange.bind(this)}
        />
      </div>
      )
    } else if (this.state.page === 4) {
      return (
        <div>
          <ConfirmInfo
            AccountInto={this.state}
            completeCheckout={this.completeCheckout.bind(this)}
          />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))