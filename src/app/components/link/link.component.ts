import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "link-icon",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
})
export class LinkComponent implements OnInit {
  @Input("width")
  width: number = 1;
  @Input("height")
  height: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
