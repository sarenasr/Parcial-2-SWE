import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent implements OnInit{

  selected: Boolean = false;
  animes:  Array<Anime> = [];

  constructor(private animeService: AnimeService) {}

  getAnimes(): void{
    this.animeService.getAnimes().subscribe(animes =>{ this.animes = animes});
  }

  selectedAnime!: Anime;
  
  onSelected(anime: Anime): void{
    this.selected = true;
    this.selectedAnime = anime;
  }

  ngOnInit(){
    this.getAnimes();
  }
}
