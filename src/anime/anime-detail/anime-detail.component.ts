import { Component, OnInit,Input } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent implements OnInit {
  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit(): void {
  }
}
