import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components-angular-material/inputs/inputs.component';
import { ButtonsComponent } from './components-angular-material/buttons/buttons.component';
import { IconsComponent } from './components-angular-material/icons/icons.component';
import { BadgeComponent } from './components-angular-material/badge/badge.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DOCUMENT } from '@angular/common';
import { EliminarComponent } from './eliminar/eliminar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputsComponent, ButtonsComponent, IconsComponent, BadgeComponent, MatButtonToggleModule, EliminarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-angular-v1';


  constructor(@Inject(DOCUMENT) private document: Document) { }



  onValChange(value: any) {
    const BODY = this.document?.querySelector('body');
    BODY?.classList.remove('o-light-theme');
    BODY?.classList.remove('o-system-theme');
    BODY?.classList.remove('o-dark-theme');
    BODY?.classList.toggle(value);

  }

  CambiarApariencia() {

  }
}
