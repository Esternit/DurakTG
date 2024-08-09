import { Component } from '@angular/core';
import { QuickGameSmallComponent } from '../../common_ui/GamesPage/quick-game-small/quick-game-small.component';
import { TourneysGameComponent } from '../../common_ui/GamesPage/tourneys-game/tourneys-game.component';
import { TrainingsGameComponent } from '../../common_ui/GamesPage/trainings-game/trainings-game.component';
import { GameLineComponent } from '../../common_ui/GamesPage/game-line/game-line.component';
import { SearchLineComponent } from '../../common_ui/GamesPage/search-line/search-line.component';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [QuickGameSmallComponent, TourneysGameComponent, TrainingsGameComponent, GameLineComponent, SearchLineComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss'
})
export class GamesPageComponent {

}
