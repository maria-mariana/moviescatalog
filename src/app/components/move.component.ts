
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from './models/movies';


@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss'],

})
export class MoveComponent implements OnInit {
  @Input () moveConfig: any;
  @Input() movies:Movies | any;
  @Input() title: string | any;





  constructor() { }

  ngOnInit(): void {
  }

}
