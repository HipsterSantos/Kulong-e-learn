import { Component, OnInit } from '@angular/core';
import { gsap , Power2} from 'gsap';
@Component({
  selector: 'pc-nh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.from('.img1', {y: -200, duration: 3 ,  opacity: 0 , ease: 'power2.in'});
    gsap.from('.img2', {duration: 6, x: -200, ease: 'power3.out', opacity: 0});
  }

}
