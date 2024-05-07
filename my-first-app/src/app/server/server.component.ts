//component shoul be inside its own folder, and the files named componentName.component.extension
import { Component } from "@angular/core";

//angular component decorator
@Component({
    //the name of the html selector, usually named app-componentName
    selector: 'app-server',
    //pointer to the html file
    templateUrl: './server.component.html'
})
//component is a class
export class ServerComponent {

}