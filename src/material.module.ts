import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    exports: [
      A11yModule,
      CdkAccordionModule,
      ClipboardModule,
      PortalModule,
      ScrollingModule,
      CdkStepperModule,
      DragDropModule,
      CdkTableModule,
      CdkTreeModule,
      MatInputModule,
      MatBadgeModule,
      MatSliderModule,
      MatButtonModule,
      MatTableModule,
      MatProgressSpinnerModule
    ]
  })

export class MaterialExampleModule {}