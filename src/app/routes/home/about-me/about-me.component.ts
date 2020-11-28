import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss", "./about-me.component_media.scss"],
})
export class AboutMeComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
