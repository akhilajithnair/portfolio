import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TerminalModel } from '../../models/terminal.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  terminalTextCollection: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTerminalText();
  }

  getTerminalText() {
    this.http
      .get<TerminalModel>('assets/contents/terminal.en.json')
      .subscribe((response: TerminalModel) => {
        const collection = response.text.split(';');
        collection.forEach((item, i) => {
          setTimeout(() => {
            this.terminalTextCollection.push(item);
          }, i * 2000);
        })
      });
  }
}
