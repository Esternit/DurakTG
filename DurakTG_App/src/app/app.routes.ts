import { Routes } from '@angular/router';
import { MenuComponent } from './common_ui/menu/menu.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EarnPageComponent } from './pages/earn-page/earn-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';

export const routes: Routes = [
  {path: "", component: MenuComponent, children: [
    {path: "", component: MainPageComponent},
    {path: "games", component: GamesPageComponent},
    {path: "profile", component: ProfilePageComponent},
    {path: "earn", component: EarnPageComponent},
    {path: "market", component: MarketPageComponent}
  ]}
];
