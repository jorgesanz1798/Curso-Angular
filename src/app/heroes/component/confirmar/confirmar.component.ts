import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  nombre:string ='';

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.nombre = data;
  }

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true);
  }
  cerrar() {
    this.dialogRef.close();
  }

}
