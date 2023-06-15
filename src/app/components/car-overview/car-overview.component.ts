import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.scss'],
})
export class CarOverviewComponent {
  @Input() model_name: string | undefined;
  @Input() model: string | undefined;
  @Input() fuel: string | undefined;
  @Input() transmission: string | undefined;
  @Input() year: number | undefined;
  @Input() color: string | undefined;
  @Input() price: number | undefined;
  @Input() body: string | undefined;
  @Input() milage: number | undefined;
  @Input() make: string | undefined;
  @Input() enginePower: string | undefined;
  @Input() img: string | undefined;
  @Input() persons: number | undefined;
}