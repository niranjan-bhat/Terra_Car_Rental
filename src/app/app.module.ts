import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PopularCarsComponent } from './components/popular-cars/popular-cars.component';
import { PopularCarTypesComponent } from './components/popular-car-types/popular-car-types.component';
import { FactsComponent } from './components/facts/facts.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { PackagePricingComponent } from './components/package-pricing/package-pricing.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { CarOverviewComponent } from './components/car-overview/car-overview.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, HeroComponent, HowItWorksComponent, PopularCarsComponent, PopularCarTypesComponent, FactsComponent, RecommendationComponent, PackagePricingComponent, SearchBannerComponent, CarOverviewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
