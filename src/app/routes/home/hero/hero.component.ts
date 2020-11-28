import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss", "./hero.component_media.scss"],
})
export class HeroComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
