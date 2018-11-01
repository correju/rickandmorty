import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters/characters.service';
import { Character } from '../interfaces/character';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent implements OnInit {
  public character:Character = {
    image:'',
    name: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    species: '',
    status: '',
    gender: ''
  };
  public keys: Array<any> = [
    {title: 'name', key: 'name'},
    {title: 'species', key: 'species'},
    {title: 'status', key: 'status'},
    {title: 'gender' , key: 'gender'},
    {title: 'location', key: 'location'},
    {title: 'origin', key: 'origin'}
  ];
  constructor(private route:ActivatedRoute, private getCharacters: CharactersService) { }
  getCharacter(id: number) {
    this.getCharacters.getSingle(id).pipe(map(res => {
      const a = {...res};
      a.location = a.location.name;
      a.origin = a.origin.name;
      return a
    })).subscribe((response:any) => {
      this.character = response;
      console.log(response);
    });
  }
  ngOnInit() {
    this.getCharacter(this.route.snapshot.params.id);
  }

}
