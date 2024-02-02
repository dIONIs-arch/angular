import { Component} from '@angular/core';
import { DateService } from '../shared/date.service';

import { CommonModule } from "@angular/common";
import { MomentPipe } from "../shared/momemt.pipe";

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [MomentPipe, CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  
  constructor(public dateService: DateService) {  }

  go(dir: number) {
    this.dateService.changeMonth(dir)
  }
}
