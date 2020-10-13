import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Programs } from 'src/app/shared/pojo/launchPrograms';

@Component({
  selector: 'app-launchprograms',
  templateUrl: './launchprograms.component.html',
  styleUrls: ['./launchprograms.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LaunchprogramsComponent implements OnInit {

  @Input()program:Programs;
  constructor() { }

  ngOnInit(): void {
  }

}
