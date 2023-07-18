import { FormControl, Validators } from '@angular/forms';
import { MainService } from './main.service';


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { PhotoService } from 'src/app/photo.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MessageService]
})

export class MainComponent implements OnInit {

  images!: any[];

  mfg!: FormGroup;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  value1: number = 42723;
  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));


  loading = false;
  buttionText = "ENVIAR";

  constructor(
    private mainService: MainService,
    private primengConfig: PrimeNGConfig,
    private photoService: PhotoService,
    public messageService: MessageService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.images = this.photoService.Image;


    this.mfg = this.fb.group({
      nome: ['',Validators.required],
      email: ['',Validators.required],
      telefone: [''],
      assunto: [''],
      textoLivre: [''],
    });
  }


  send() {
    this.loading = true;
    this.buttionText = "enviando...";
    this.mainService.sendEmail(this.mfg).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${this.mfg.controls['nome'].value} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso!', detail: 'Solicitação enviada!' });
      },
      err => {
        console.log(err);
        this.loading = false;
        this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Atenção!', detail: 'Erro, tente novamente.' });
        this.buttionText = "ENVIAR";
      }, () => {
        this.loading = false;
        this.buttionText = "ENVIAR";
      }
    );

  }


}

