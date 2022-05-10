import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() newValueAdded = new EventEmitter<number>();
  constructor() {}
  count = 0;
  interval;
  ngOnInit(): void {}

  addNewValue() {
    this.interval = setInterval(() => {
      this.count++;
      this.newValueAdded.emit(this.count);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
