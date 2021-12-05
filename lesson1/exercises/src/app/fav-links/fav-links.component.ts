import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  favLinks: Array[] = [
    "https://www.launchcode.org/",
    "https://developer.mozilla.org/en-US/",
  ];
  constructor() {}

  ngOnInit() {}
}
