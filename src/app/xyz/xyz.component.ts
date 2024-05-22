import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  @Input() myNameInit !: string;
  @Input() myName = 'Khushal';

  // @Output() outputName = EventEmitter<string> = new EventEmitter<string>();

  @Input() item = '';

  passedName = 'Khushal Dhola';
  isTrue = false;

  constructor() { }

  ngOnInit(): void {
  }

}
