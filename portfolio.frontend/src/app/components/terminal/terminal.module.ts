import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TerminalComponent } from "./terminal.component";

@NgModule({
    imports: [CommonModule]
,    exports: [TerminalComponent],
    declarations: [TerminalComponent]
})
export class TerminalModule {}