import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 }
  ]);
  addCharacter()
  {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter:Character = {
      id: this.characters().length + 1, name: this.name(), power: this.power(),
    };
    this.characters.update((current) => [
      ...current,
      newCharacter
    ]);
    this.resetFileds();
  }

  resetFileds() {
    this.name.set('');
    this.power.set(0);
  }
}
