import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: [
    "./get-in-touch.component.scss",
    "./get-in-touch.component_media.scss",
  ],
})
export class GetInTouchComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
