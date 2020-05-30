import { Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { CargasComponent } from './cargas/cargas.component';


export const IMAGESROUTE: Routes = [

    { path: 'fotos', component: FotosComponent },
    { path: 'cargaFotos', component: CargasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fotos' }


];