import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';



@NgModule({
  declarations: [AnimeListComponent,AnimeDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[AnimeListComponent],
})
export class AnimeModule { }
