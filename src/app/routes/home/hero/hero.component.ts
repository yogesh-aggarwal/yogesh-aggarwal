import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { TweenLite } from "gsap";

@Component({
  selector: "hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss", "./hero.component_media.scss"],
})
export class HeroComponent implements OnInit {
  @ViewChild("name")
  name: ElementRef;
  @ViewChild("teaser")
  teaser: ElementRef;
  @ViewChild("description")
  description: ElementRef;
  @ViewChild("socials")
  socials: ElementRef;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    
  }
}
