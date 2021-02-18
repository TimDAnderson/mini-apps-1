myFunc()

//confirm info component
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

//form 3 component
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

//form2 component
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

//form1 component
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

//checkout component
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

//App, this state is source of truth
class App extends React.Component {
  constructor(props) {
    super(props);
    //starting with dummy data in state, no need to have blank
    this.state = {
      dbTracker: null,
      page: 0,
      name: '',
      email: '',
      password: '',
      address: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      ccNumber: '',
      expirDate: '',
      cvv: '',
      billingZip: ''
    }
  }

  handleNext(event) {
    if (event) {event.preventDefault()}
    let temp = this.state.page
    temp++
    this.setState({ page: temp })
    console.log(`changing to ${temp}`)
    $.ajax({
      type: "POST",
      url: "http://localhost:3000",
      data: this.state
    })
      .done((returnVal)=>{
        this.setState({ previous: returnVal })
      })
  }

  completeCheckout(event) {
    event.preventDefault()
    this.handleNext()
    this.setState({ page: 0 })
    this.componentDidMount()
  }

  //1 source of truth tracking change through the application
  nameChange (event) { this.setState({name: event.target.value}) }
  emailChange (event) { this.setState({email: event.target.value}) }
  passwordChange (event) { this.setState({password: event.target.value}) }
  addressChange (event) { this.setState({address: event.target.value}) }
  line2Change (event) { this.setState({line2: event.target.value}) }
  cityChange (event) { this.setState({city: event.target.value}) }
  stateChange (event) { this.setState({state: event.target.value}) }
  zipChange (event) { this.setState({zip: event.target.value}) }
  phoneChange (event) { this.setState({phone: event.target.value}) }
  ccNumberChange (event) { this.setState({ccNumber: event.target.value}) }
  expirDateChange (event) { this.setState({expirDate: event.target.value}) }
  cvvChange (event) { this.setState({cvv: event.target.value}) }
  billingZipChange (event) { this.setState({billingZip: event.target.value}) }


  //get a unique dbTracker ID and add it to this instance's state
  componentDidMount() {
    console.log('componentdidmount')
    $.ajax({
      url: "http://localhost:3000/id"
    })
      .done((returnVal)=>{
        let dbTracker = returnVal[returnVal.length - 1]._id
        this.setState({ dbTracker })
      })
  }


  //render component based off of this.state.page
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