import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.scss"],
})
export class GithubComponent implements OnInit {
  @Input("width")
  width: number = 1;
  @Input("height")
  height: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
