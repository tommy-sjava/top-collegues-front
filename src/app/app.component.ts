import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  unCollegueExemple: Collegue = {
    photoURL:
      'http://1.bp.blogspot.com/-rLz2O-wfx9E/VgMuI9NOplI/AAAAAAAAbDs/XSom5XcLA6Q/s1600/sakalli_sevimli_dede.jpg',
    score: 0,
    pseudo: 'DéDé'
  };
}
