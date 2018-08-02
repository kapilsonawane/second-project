import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers-component',
  templateUrl: './servers-component.component.html',
  styleUrls: ['./servers-component.component.css']
})
export class ServersComponentComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'Server not created yet';
  serverName = '';
  serverCreated = false;
  userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
   }

   onCreateNewServer() {
     this.serverCreated = true;
     this.serverCreationStatus = 'server created successfully';
   }
   onUpdateServer(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
   }
  ngOnInit() {
  }

}
