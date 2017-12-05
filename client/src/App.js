import React, {Component} from 'react';

import './App.css';

import Word from './Word';
import MainTitle from './MainTitle';
import Controls from './Controls';
import User from './User';

class App extends Component {

  componentDidMount() {
    /*
    // We need to convert the VAPID key to a base64 string when we subscribe
    // It recieves VAPID public Key and return an array that pushManager understands
    function urlBase64ToUint8Array(base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    var subscribeOptions = {
      //all push messages will be a notification for the user. (any browser supports 'false' for security reasons)
      userVisibleOnly: true,
      // contains VAPID public key
      applicationServerKey: urlBase64ToUint8Array("BA_mzg3PxSy-0VVZbV4es9nmOmT-iTUyxvzGuyj0TP-yrFvotcIJJq2v2yQgbCMIw-wA06w4SQAUMOV0u5ZOOts")
    };

    navigator.serviceWorker.ready.then(function(registration) {
      return registration.pushManager.subscribe(subscribeOptions);
    }).then(function(subscription) {
      // suscription details available here
      console.log('Subscription object: ', subscription);
    });

    // Testing push notifications
    // TODO: Using serviceWorker API lets notifications be desktop and mobile friendly. Navigators without serviceWorker won't show notifications
    if ("Notification" in window && "serviceWorker" in navigator) {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          new Notification('New word found!', {
            body: "A new word was found. You will receive an email with all the information.",
            icon: "/img/icon.png",
            tag: "new-word"
          });
        }
      });
    }
*/
  }

  render() {
    return (<div id="App">
      <MainTitle/>
      <Controls/>
      <User/>
      <div className="left-sidebar"/>
      <main><Word/></main>
      <div className="right-sidebar"/>
      <footer>
        <a href="#">Contact information</a>
        <a href="#">License</a>
        <a href="#">Attribution</a>
      </footer>
    </div>);
  }
}

export default App;
