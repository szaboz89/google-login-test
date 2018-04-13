import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        alert('Logged out');
        window.location.reload();
      },
      error => {
        console.log('Error occured during logout: ' + error);
        alert('Logged out');
        window.location.reload();
      }
    );
  }
}
