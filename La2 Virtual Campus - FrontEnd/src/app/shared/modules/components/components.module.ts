import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from '../../components/notfound/notfound.component';

import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

// Sacar Mas a delante por el Navbar Final
import { MaterialModule } from '../material/material.module';

import { SuccessComponent, FailedComponent, } from '@fte/shared/components';

const components = [NotfoundComponent, FooterComponent, SuccessComponent, FailedComponent,];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [...components]
})
export class ComponentsModule { }
