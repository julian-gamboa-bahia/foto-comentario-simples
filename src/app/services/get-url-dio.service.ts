/*
Entrega a lista de urls
o que permitirá:

1) Compartilhar no Linkedin
*/

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/*
Serviço SIMPLES para consultar uma API que lista-se urls cuja saída:
JSON
*/

export class GetUrlDioService {

  url =
    "https://cv-julian-2022.s3.us-west-2.amazonaws.com/conteudo_pasta/linkedinJANEIRO_31.json";


// injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    // Obtém a lista de URLs

    getUrl_dio(etiqueta: String): Observable<String[]> {
      return this.httpClient.get<String[]>(this.url) //+etiqueta+".json")
        .pipe(
          retry(2),
          catchError(this.handleError))
    }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}


////////////////////////////////////////////////
