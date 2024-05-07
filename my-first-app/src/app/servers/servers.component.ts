import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //it is also possible to select by attribute
  //selector: '[app-server]'
  //or by class
  //selector: '.app-server'
  //also possible to define inline templates
  templateUrl: './servers.component.html',
  /* template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  //method executed when the component is created
  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
