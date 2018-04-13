import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../service/about.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  appVersion = '';

  constructor(private aboutService: AboutService, public authService: AuthService) {
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
