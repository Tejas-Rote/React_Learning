import React, { Component } from 'react'
import { gapi } from "gapi-script";
export class GoogleAuth extends Component {
    state = {isSignedIn:null};


    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'474078911687-156b4r5tsopf9e0pr981sd7et7ud4qmg.apps.googleusercontent.com', 
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        });
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>Dont know shit</div>
        } else if(this.state.isSignedIn){
            return <div>Signed In !!</div>
        }
        else{
            return <div>NOt signed in !!</div>;
        }
    }

  render() {
    return (
      <div>
      {/* GoogleAuth */}
      {this.renderAuthButton}
      </div>
    )
  }
}

export default GoogleAuth