import React from 'react'
import Swal from "sweetalert2";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resgisterName: "",
      registerEmail: "",
      resgisterPassword: "",
    };
  }

  onEmailChange = event => {
    this.setState({ registerEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ resgisterPassword: event.target.value });
  };
  onNameChange = event => {
    this.setState({ resgisterName: event.target.value });
  };
  onSubmitRegister = () => {
    const name = this.state.resgisterName.toLowerCase()
    const email = this.state.registerEmail.toLowerCase();
    const password = this.state.resgisterPassword.toLowerCase();
    if (email.length < 4 || name.length < 3 ||  password.length < 4 || email.includes('@') === false) {
      return;
    }

    fetch("http://10.0.0.10:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.resgisterName.toLowerCase(),
        email: this.state.registerEmail.toLowerCase(),
        password: this.state.resgisterPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.includes('already exists')){
          Swal.fire("Error", "Email already exists.", "error")
        }
        else if (user[0].email === email && user[0].name === name) {
          this.props.loadUser(user[0])
          Swal.fire("Good job!", `${name} You Register Sucessfully! Welcome. `, "success");
          setTimeout( () => this.props.onRouteChange("home"), 1000);
        }
        else {
          Swal.fire("Error", "Sorry, Could Not Register.. ", "error")
        }
      })
      .catch(err => console.log(err));
  };

  onEnterPress = event => {
    if (event.keyCode === 13) {
      document.getElementById("submit").click();
    }
  }







  
  render() {
    return(
      <form onSubmit={event => event.preventDefault()}>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="center f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input
                onChange={this.onNameChange}
                className="pa2 input-reset ba bg-transparent shadow-4 w-100"
                type="text"
                name="name"
                id="name"
                minLength = '3'
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent shadow-4 w-100"
                type="email"
                name="email-address"
                id="email-address"
                minLength = '4'
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                onChange= {this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent shadow-4 w-100"
                type="password"
                name="password"
                id="password"
                minLength = '4'
                required
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick = {this.onSubmitRegister}
              className="b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
    </form>
    )
  }

}


export default Register