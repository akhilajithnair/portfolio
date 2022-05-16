import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FloatingNavButtonComponent } from "./floating-nav-button/floating-nav-button.component";

@NgModule({
    exports: [FloatingNavButtonComponent],
    declarations: [FloatingNavButtonComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetsModule {}