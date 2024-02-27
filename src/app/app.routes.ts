import { Routes } from '@angular/router';
import { AuthGuard } from './gards/auth.guard';
import { UserGuard } from './gards/user.guard';
import { AdminGuard } from './gards/admin.guard';

export const routes: Routes = [


    {
        path: '',
        loadComponent: () =>
            import('./layout/app-layout/app-layout.component').then(
                (m) => m.AppLayoutComponent
            ),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./components/home/home.component').then(
                        (m) => m.HomeComponent
                    ),
            },
            {
                path:'competitions'
                ,loadComponent: () =>
                    import('./components/competitions/competitions.component').then(
                        (m) => m.CompetitionsComponent
                    ),canActivate: [UserGuard]
            },
            {
                path:'mycompetitions'
                ,loadComponent: () =>
                    import('./components/mycompetitions/mycompetitions.component').then(
                        (m) => m.MycompetitionsComponent
                    ),
            },
            {
                path: 'competition-details/:code',
                loadComponent: () =>
                    import('./components/competition-details/competition-details.component').then(
                        (m) => m.CompetitionDetailsComponent
                    ),
            },
            {
                path: 'podium/:param',
                loadComponent: () =>
                    import('./components/podium/podium.component').then(
                        (m) => m.PodiumComponent
                    ),
            },
            {
                path: '403',
                loadComponent: () =>
                    import('./components/errors/403/403.component').then(
                        (m) => m.ForbiddenComponent
                    ),
            },

            {
                path:'login',
                loadComponent: () =>
                    import('./components/login/login.component').then(
                        (m) => m.LoginComponent
                    ),canActivate: [AuthGuard]

            },
            {
                path:'register',
                loadComponent: () =>
                    import('./components/signup/signup.component').then(
                        (m) => m.SignupComponent
                    ),

            },

        ]
    },
    {
        path: 'admin',
        loadComponent: () =>
            import('./layout/admin-layout/admin-layout.component').then(
                (m) => m.AdminLayoutComponent
            ),canActivate: [AdminGuard],
        children: [
            {
                path: 'competitions',
                loadComponent: () =>
                    import('./components/competition/competition.component').then(
                        (m) => m.CompetitionComponent
                    ),
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./components/dashboard/dashboard.component').then(
                        (m) => m.DashboardComponent
                    ),
            },
            {
                path: 'members',
                loadComponent: () =>
                    import('./components/member/member.component').then(
                        (m) => m.MemberComponent
                    ),
            },
            {
                path: 'competition-details/:code',
                loadComponent: () =>
                    import('./components/competition-details/competition-details.component').then(
                        (m) => m.CompetitionDetailsComponent
                    ),
            },
            {
                path: 'podium/:param',
                loadComponent: () =>
                    import('./components/podium/podium.component').then(
                        (m) => m.PodiumComponent
                    ),
            },
        ],
    },
    {
        path:'error',
        loadComponent: () =>
            import('./layout/error-layout/error-layout.component').then(
                (m) => m.ErrorLayoutComponent
            ),
        children: [
            {
                path: '403',
                loadComponent: () =>
                    import('./components/errors/403/403.component').then(
                        (m) => m.ForbiddenComponent
                    ),
            },
        ],
    }
];
