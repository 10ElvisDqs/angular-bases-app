import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

  name = signal('Iron Man');
  age= signal(23);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()} `;
  });

  changeHero() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(18);
   }
  resetForm() {
  this.name.set('Iron Man');
  this.age.set(23)
  }
}
