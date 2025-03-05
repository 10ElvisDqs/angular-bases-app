import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter = signal(10);


  incrementBy(value: number):void {
    this.counter.update(  current => current + value);
  }
  decrementBy(value: number):void {
    this.counter.update(  current => current + value);
  }

  reset():void{
    this.counter.set(10);
  }
}
