import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) imagePath!: string;

  get imagePath() {
    return "assets/users/" + this.avatar;
  }
  onSelectUser() {}
}
