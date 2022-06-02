import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../component/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroe.interace';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers: any[] = [
    {
      id: 'DC Comics',
      descripcion: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      descripcion: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    alt_img: '',
    characters: '',
    first_appearance: ''
  };

  titulo:string = 'Agregar Heroe';

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')){
      this.titulo = 'Editar Heroe';
      this.activatedRoute.params.pipe(
        switchMap( ({id}) => this.heroeService.getHeroe(id)
        )
      ).subscribe(
        (heroe) => {
          this.heroe = heroe;
        }
      );
    }
  }

  guardar(){
    if(this.heroe.id){
      this.heroeService.actualizarHeroe(this.heroe).subscribe( () => {
        this.mostrarSnackBar('Heroe actualizado');
      });
    }  else {
      this.heroeService.guardarHeroe(this.heroe).subscribe(
        (heroe) => {
          this.mostrarSnackBar('Heroe guardado');
          this.router.navigate(['/heroes/editar',heroe.id]);
        }
      );
    }
    if(this.heroe.superhero.trim().length === 0){ return }
  }

  borrar(){
    this._dialog.open(ConfirmarComponent, { width: '250px',data: this.heroe.superhero}).afterClosed().subscribe(
      (confirmado) => {
        if(confirmado){
          this.heroeService.borrarHeroe(this.heroe).subscribe(
            () => {
              this.mostrarSnackBar('Heroe borrado');
              this.router.navigate(['/heroes']);
            }
          );
        }
      }
    );
  }

  mostrarSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar', {
      duration: 2000,
    });
  }

}
