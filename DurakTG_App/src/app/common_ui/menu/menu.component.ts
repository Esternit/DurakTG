import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuButtonClicked=true;
  gamesButtonClicked=false;
  profileButtonClicked=false;
  earnButtonClicked=false;
  marketButtonClicked=false;

  MenuClick() {
    this.menuButtonClicked=true;
    this.gamesButtonClicked=false;
    this.profileButtonClicked=false;
    this.earnButtonClicked=false;
    this.marketButtonClicked=false;
  }

  GamesClick() {
    this.menuButtonClicked=false;
    this.gamesButtonClicked=true;
    this.profileButtonClicked=false;
    this.earnButtonClicked=false;
    this.marketButtonClicked=false;
  }

  ProfileClick() {
    this.menuButtonClicked=false;
    this.gamesButtonClicked=false;
    this.profileButtonClicked=true;
    this.earnButtonClicked=false;
    this.marketButtonClicked=false;
  }

  EarnClick() {
    this.menuButtonClicked=false;
    this.gamesButtonClicked=false;
    this.profileButtonClicked=false;
    this.earnButtonClicked=true;
    this.marketButtonClicked=false;
  }

  MarketClick() {
    this.menuButtonClicked=false;
    this.gamesButtonClicked=false;
    this.profileButtonClicked=false;
    this.earnButtonClicked=false;
    this.marketButtonClicked=true;
  }

}
