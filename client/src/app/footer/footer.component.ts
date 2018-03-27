import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [NGXLogger]
})
export class FooterComponent implements OnInit {
  isHeader: Boolean = true;
  footerClass: String = 'red';
  constructor(private router: Router, logger: NGXLogger) {
    // condition based header.
    router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
      if(e['url'].match(/\/shopping\/delta+/g)) {
        this.footerClass = 'blue';
      }
      if(e["url"] == '/') {
        this.isHeader = false;
      }
    });
   }

  ngOnInit() {
  }

}
