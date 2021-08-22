import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackByPin } from './components/track-by-pin.component/track-by-pin.component.component';
import { TrackByDistrict } from './components/track-by-district.component/track-by-district.component.component';
import { DemoComponent } from './components/demo/demo.component';
import { SearchByPinComponent } from './components/search-by-pin/search-by-pin.component';
import { SearchByDistrictComponent } from './components/search-by-district/search-by-district.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    TrackByPin.ComponentComponent,
    TrackByDistrict.ComponentComponent,
    DemoComponent,
    SearchByPinComponent,
    SearchByDistrictComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VaccineModule { }
