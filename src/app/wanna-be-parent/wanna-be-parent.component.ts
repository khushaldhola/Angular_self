import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanna-be-parent',
  templateUrl: './wanna-be-parent.component.html',
  styleUrls: ['./wanna-be-parent.component.css']
})
export class WannaBeParentComponent implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}