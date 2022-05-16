import { NgModule } from "@angular/core";
import { TerminalModule } from "./terminal/terminal.module";

@NgModule({
    imports: [TerminalModule],
    declarations: [],
    exports: [TerminalModule]
})
export class ComponentsModule {}