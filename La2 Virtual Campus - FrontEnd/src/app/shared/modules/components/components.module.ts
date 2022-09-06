import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from '../../components/notfound/notfound.component';

import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

// Sacar Mas a delante por el Navbar Final
import { MaterialModule } from '../material/material.module';


const components = [NotfoundComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
