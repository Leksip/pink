import {Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar, SwiperOptions} from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    scrollbar: { draggable: true },
    pagination: { clickable: true },
    centeredSlides: true,
  };
}
