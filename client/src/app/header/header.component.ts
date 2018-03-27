import { Component, OnInit, OnChanges } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NGXLogger]
})
export class HeaderComponent implements OnInit {
  isHeader: Boolean = true;
  headerClass: String = 'bg-red';
  constructor(private router: Router, logger: NGXLogger) {
    
    
    // condition based header.
    router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
      if(e['url'].match(/\/shopping\/delta+/g)) {
        this.headerClass = 'bg-blue';
      }
      if(e['url'] == '/') {
        this.isHeader = false;
      }
    });
   }

  ngOnInit() {}

}
