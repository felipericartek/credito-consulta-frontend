import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ConsultaCreditosComponent } from './components/consulta-creditos/consulta-creditos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConsultaCreditosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crédito Consulta';
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(err => console.error(err));
