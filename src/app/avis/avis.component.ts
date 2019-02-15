import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() avis:EventEmitter<Avis> = new EventEmitter<Avis>();

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.avis.emit(Avis.AIMER);
  }

  unlike(){
    this.avis.emit(Avis.DéTESTER);
  }

}
