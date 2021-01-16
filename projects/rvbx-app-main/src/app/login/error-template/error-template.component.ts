import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rvbx-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.scss']
})
export class ErrorTemplateComponent implements OnInit {

  constructor() { }

  dadoRecebidoRota = history.state.template;

  ngOnInit(): void {
  }

}
