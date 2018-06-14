import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { ConnaissancesComponent } from "./connaissances/connaissances.component";
import { FormationsResolvers } from "./FormationResolver";
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from './constantes';
import { FormationComponent } from './formation/formation.component';
import { LoggedInGuardGuard } from './logged-in-guard.guard';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_DETAIL + "/:idDetail", component: DetailComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
            {
                path: PATH_DETAIL_FORMATIONS, component: FormationComponent, resolve : {formations:FormationsResolvers}
            },
            { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent, canActivate: [LoggedInGuardGuard] },
        ]
    }
];