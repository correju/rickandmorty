import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.less']
})
export class CharacterItemComponent implements OnInit {
  @Input() character : any;
  constructor() { }

  ngOnInit() {
    console.log(this.character);
  }

}
