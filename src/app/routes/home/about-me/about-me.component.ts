import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { TweenLite } from "gsap";

@Component({
  selector: "about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss", "./about-me.component_media.scss"],
})
export class AboutMeComponent implements OnInit {
  @ViewChild("section")
  section: ElementRef;
  @ViewChild("heading")
  heading: ElementRef;

  constructor(public dataService: DataService) {}

  animate() {
    const transitions = {
      opacity: 0,
      y: 40,
      transform: "rotateX(30deg)",
      duration: 0.1,
      scrollTrigger: this.section.nativeElement,
    };
    TweenLite.from(this.heading.nativeElement, 1, transitions);
    // TweenLite.from(this.name.nativeElement, 1, {
    //   ...transitions,
    //   delay: 0.1,
    // });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate();
    });
  }
}
