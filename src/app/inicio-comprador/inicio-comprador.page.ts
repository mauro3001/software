import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CatalogoService } from './catalogo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-inicio-comprador',
  templateUrl: './inicio-comprador.page.html',
  styleUrls: ['./inicio-comprador.page.scss'],
})
export class InicioCompradorPage implements OnInit {
  fecha: string;

  entradas: Array<{
    fecha: string;
    fechaTexto: string;
    texto: string;
  }>;

  entradaActual: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  };

  constructor(public toastController: ToastController, private productoService: CatalogoService) {
    moment.locale('es-col');
    this.fecha = moment().format();
    this.cargarEntradas();
  }

  cargarEntradas(){
    const fecha = moment(this.fecha).format('DD-MM-YY');

    this.entradas = JSON.parse(localStorage.getItem('entradas'));
    if(this.entradas){
      const entradaActual = this.entradas.find((elemento)=>elemento.fecha === fecha);
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada(){
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.entradaActual={
      fechaTexto: dia + ' de ' + mes + ' del ' + year,
      fecha: this.fecha,
      texto: ''
    };
  }

  async guardar(entradaActual: {
    fecha: string;
    fechaTexto: string;
    texto: string;
  }){
    const fecha = moment(this.fecha).format('DD-MM-YY');

    if(this.entradas){
      const item = this.entradas.find((elemento)=>elemento.fecha === fecha);

      if(item){
        localStorage.setItem('entradas', JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }
    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });

    toast.present();
  }

  guardarItem(entrada: {fecha: string; fechaTexto: string; texto: string}){
    this.entradas.push(entrada);
    localStorage.setItem('entradas', JSON.stringify(this.entradas));
  }

  
  autocomplete: { input: string };

  productos=[];
  calific=[];


  updateSearchResults() {
     console.log(this.autocomplete.input);    //search input will display
  }

  ngOnInit() {
    this.productos=this.productoService.getProductos();
    this.calificacion();
  }
  ionViewWillEnter(){
    this.productos=this.productoService.getProductos();
    this.calificacion();
  }
  calificacion(){
    const prod=this.productoService.getProductos();
    for (let i=0; i<prod.length; i++) {
      this.calific[i]=this.productoService.getCalificacion(prod[i].id);
    }
  }
}
