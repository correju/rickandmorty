import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters/characters.service';
import { Characters } from '../interfaces/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less']
})
export class CharactersComponent implements OnInit {
  public characters : Array<any>;
  private map : any = new Map();
  public currentPage : number = 1;
  public maxPage : number = 1;
  public urlNext : string;
  public urlPrev : string;
  constructor(private getCharacters: CharactersService) { }

  nextPage() {
    this.currentPage =  this.currentPage === this.maxPage ? this.maxPage : this.currentPage + 1;
    if (this.urlNext) {
      this.getCharaters(this.urlNext);
    }
  }
  prevPage() {
    this.currentPage =  this.currentPage === 1 ? 1 : this.currentPage - 1;
    if (this.urlPrev) {
      this.getCharaters(this.urlPrev);
    }
  }
  getCharaters(url: string) {
    const characters = this.map.get(url);
    if (!characters) {
      this.getCharacters.get(url).subscribe((data: Characters) => {
        this.map.set(url, data.results);
        this.urlNext = data.info.next;
        this.urlPrev = data.info.prev;
        this.maxPage = data.info.pages;
        this.characters = data.results;
      });
    } else {
      this.characters = characters;
    }
  }

  ngOnInit() {
    this.getCharaters('https://rickandmortyapi.com/api/character/?page=1');
  }

}
