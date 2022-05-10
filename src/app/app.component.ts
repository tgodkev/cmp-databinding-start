import { Component } from "@angular/core";
import { OddComponent } from "./odd/odd.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "testserver", content: "just a test" },
  ];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  even = 0;

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  addCount(newValue: number) {
    this.even++;
    if (newValue % 2 === 0) {
      this.evenNumbers.push(newValue);
    } else {
      this.oddNumbers.push(newValue);
    }
  }
}
