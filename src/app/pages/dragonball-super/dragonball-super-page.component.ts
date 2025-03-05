import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../service/dragonnball.service';


@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

}
