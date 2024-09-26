import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/form/register/register.component';
import { LoginComponent } from './pages/form/login/login.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { MainComponent } from './Main/main/main.component';
import LayoutComponent from './pages/layout/layout.component';

export const routes: Routes = 
[
    // {
    //     path: 'register',
    //     title: 'Register',
    //     component: RegisterComponent
    // },
    // {
    //     path: 'login',
    //     title: 'Login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'tutorial',
    //     title: 'Tutorial',
    //     component: TutorialComponent
    // },
    // {
    //     path: '',
    //     component: RegisterComponent,
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'main', 
    //     title: 'Main',
    //     component: MainComponent
    // }

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path:'**', pathMatch:'full', redirectTo:'/home' },

    {
        path: '',
        component: LayoutComponent,
        children:
        [
            {
                path:'home', 
                title: 'Layout',
                // component: LayoutComponent
                loadComponent: () => import('./pages/layout/layout.component') 
            }
        ]
    }

    // dasgfsgSG
    // KJGLKALFFASGDG
    // HVLHVL
];
