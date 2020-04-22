import { Component, OnInit } from '@angular/core';
import { gsap ,Power2} from 'gsap';
@Component({
  selector: 'pc-nh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.to("img1", {x: 100, ease: "power2.in"});
  }

}
