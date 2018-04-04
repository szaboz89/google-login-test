import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  appVersion = '';

  constructor(private aboutService: AboutService) {
  }

  ngOnInit() {
    this.aboutService.getAppVersion().subscribe(
      value => {
        this.appVersion = value.text();
      },
      error => {
        console.log('Error occurred: ' + error);
      }
    );
  }
}
