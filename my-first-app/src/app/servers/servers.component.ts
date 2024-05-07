import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //also posible to define inline templates
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
