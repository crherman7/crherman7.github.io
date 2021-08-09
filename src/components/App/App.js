import React from 'react';
import './App.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-container">
          <Logo className="App-header-logo" />
          <p className="App-header-text">BarRadar</p>
        </div>
        <div className="App-preview">
          <p className="App-preview-text">
            Explore happy hours near you. Your drinks are waiting.
          </p>
          <img
            onClick={() =>
              window.open('https://apps.apple.com/us/app/barradar/id1578779351')
            }
            className="App-download"
            src={require('../../assets/download.svg').default}
            alt="download"
          />
          <div className="App-preview-images">
            <img
              className="App-preview-image"
              src={require('../../assets/mock_1.png').default}
              alt="preview"
            />
            <img
              className="App-preview-image"
              src={require('../../assets/mock_2.png').default}
              alt="preview"
            />
          </div>
        </div>
        <div className="App-privacy">
          <p className="App-privacy-header">Privacy Policy</p>
          <p className="App-privacy-subheader">Overview</p>
          <p className="App-privacy-body">
            This Privacy Policy describes how your personal information is
            handled in BarRadar for iOS.
          </p>
          <p className="App-privacy-subheader">
            We Collect No Personal Information Using Our Applications
          </p>
          <p className="App-privacy-body">
            We do not collect, use, save, or have access to any of your personal
            data recorded in BarRadar for iOS. Individual settings relating to
            the BarRadar app are not personal and are stored only on your
            device.
          </p>
          <p className="App-privacy-body">
            You will be asked to provide access to your location, but this is
            only so you can view the happy hours near your location. We don’t
            process that information at all and have no access to it.
          </p>
          <p className="App-privacy-subheader">Contact</p>
          <p className="App-privacy-body">
            If you have any questions regarding this Privacy Policy, you get
            reach us at{' '}
            <a href="mailto:contact@barradar.io" className="link">
              contact@barradar.io
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
