import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../common_ui/profile-card/profile-card.component';
import { FriendBlockComponent } from '../../common_ui/ProfilePage/friend-block/friend-block.component';
import { AdvertBannerComponent } from '../../common_ui/ProfilePage/advert-banner/advert-banner.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileCardComponent, FriendBlockComponent, AdvertBannerComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
