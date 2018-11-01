import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters/characters.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  private subscriber : any;
  public randomCharacters: Array<any> = [];
  constructor(private getCharacters: CharactersService) { }
  private getData () {
    this.getCharacters.get().subscribe((data: any) => {
      for (let i = 0; i < 3; i++) {
        const random : number = Math.floor(Math.random()*data.results.length);
        this.randomCharacters.push(data.results[random]);
      }
      console.log(this.randomCharacters);
    });
  }
  ngOnInit() {
   this.getData();
  }

}
