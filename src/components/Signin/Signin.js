import React from "react";
import Swal from "sweetalert2";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }
  isEmailValid = email => {
    var res = email.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return false;
    else return true;
  };

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = () => {
    const email = this.state.signInEmail;
    const password = this.state.signInPassword;

    if (password.length < 4 || !this.isEmailValid(email)) {
      return;
    }
    fetch("https://brainiac-face-recognition.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          Swal.fire(
            "Good job!",
            `${user.name} You Signin Sucessfully! Welcome.`,
            "success"
          );
          this.props.loadUser(user);
          setTimeout(() => this.props.onRouteChange("home"), 1000);
        } else {
          Swal.fire("Error", "Wrong Credentials", "error");
        }
      })
      .catch(err => console.log(err));
  };

  onEnterPress = event => {
    if (event.keyCode === 13) {
      this.onSubmitSignIn()
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <form onSubmit={event => event.preventDefault()}>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="center f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 ba bg-transparent shadow-4 w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    required
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 ba bg-transparent shadow-2 w-100"
                    type="password"
                    minLength="4"
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </fieldset>
              <div className="center">
                <input
                  id="submit"
                  onKeyDown={this.onEnterPress}
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3 center">
                <p
                  onClick={() => onRouteChange("register")}
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
      </form>
    );
  }
}

export default Signin;
