import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Photo Title";
  image1 =
    "https://www.launchcode.org/assets/homepage/desktop-computer-133c1d5afdb40b0fa1d6bf8cc3bece17d85b685ac21dd0da068433aa5ef885a2.png";
  image2 =
    "https://www.launchcode.org/assets/dabomb-562825789d0850a41ddd8ef7eb0d0222d9ef99cd54594ee5e820cb6070fb9477.svg";
  image3 =
    "https://www.launchcode.org/assets/homepage/glasses-green-regular-5e09a997df6799538d2ae4e3875b3b3f17eafadea856f836b88eb2bf1137e708.png";

  constructor() {}

  ngOnInit() {}
}
