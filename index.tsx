import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import dropboxV2Api from 'dropbox-v2-api';

const dropbox = dropboxV2Api.authenticate({
    client_id: 'APP_KEY',
    client_secret: 'APP_SECRET',
    redirect_uri: 'REDIRECT_URI',
    state: 'OPTIONAL_STATE_VALUE'
});
//generate and visit authorization sevice
const authUrl = dropbox.generateAuthUrl();
//after redirection, you should receive code
dropbox.getToken(code, (err, result, response) => {
    //you are authorized now!
    //your optional state, given in authenticate: response.query.state
});

interface Drive {

}

class DropBoxV2ApiDrive implements Drive {
  private dropbox: any;

  public constructor(sedropboxssion: any) {
    this.dropbox = dropbox;
  }

  public dir(path: string, successCallback: (result: any) => void, failureCallback:(err: string) => void) {
    this.dropbox({
        resource: 'files/list_folder',
        parameters: {
          "path": path,
      }
    }, (err: any, result: any, response: any) => {
        if(err){ failureCallback(err); }
        else { successCallback(result); }
    });
  }
}