import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //it is also possible to select by attribute
  //selector: '[app-server]'
  //or by class
  //selector: '.app-server'
  //also possible to define inline templates
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
