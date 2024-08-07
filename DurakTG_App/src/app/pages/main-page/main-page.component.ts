import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../common_ui/profile-card/profile-card.component';
import { AdvertBannerComponent } from '../../common_ui/advert-banner/advert-banner.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProfileCardComponent, AdvertBannerComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
