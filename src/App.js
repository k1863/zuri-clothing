import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage.jsx";
import NavContainer from "./components/NavContainer/NavContainer.jsx";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage.jsx";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
  }

  render() {
 return (
   <div>
     <NavContainer currentUser={this.state.currentUser} />
     <Switch>
       <Route exact path="/" component={Homepage} />
       <Route path="/shop" component={ShopPage} />
       <Route path="/signin" component={SignInSignUpPage} />
     </Switch>
   </div>
 );
  }
 
}

export default App;
