import { Component, Input, OnInit } from '@angular/core';
import { Recolector } from 'src/app/interfaces/recolector';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-cardrecolector',
  templateUrl: './cardrecolector.component.html',
  styleUrls: ['./cardrecolector.component.scss']
})
export class CardrecolectorComponent implements OnInit {
  @Input() recolector: Recolector;
  constructor() { }

  ngOnInit(): void {
    

  }

}
