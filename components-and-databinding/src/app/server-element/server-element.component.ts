import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  // receive data form other components, also can specify the name of the parameter
  @Input('serverElement') element: {type: string, name: string, content: string};
}
