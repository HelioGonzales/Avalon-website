import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'merch',
        loadChildren: () =>
          import('./components/merch/merch.module').then((m) => m.MerchModule),
      },
      {
        path: 'merch-detail/:id',
        loadChildren: () =>
          import('./components/merch-detail/merch-detail.module').then(
            (m) => m.MerchDetailModule
          ),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('./components/music/music.module').then((m) => m.MusicModule),
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./components/video/video.module').then((m) => m.VideoModule),
      },
      {
        path: 'shows',
        loadChildren: () =>
          import('./components/shows/shows.module').then((m) => m.ShowsModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./components/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./components/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./components/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./components/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
