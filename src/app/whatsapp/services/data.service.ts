import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { SeguridadDatos } from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  consulta = environment.urlApisslThomasConsulta;
  whatsapp = environment.urlApisslThomasSend;
  ApiKeyApissl = environment.ApiKeyApissl;
  constructor( private http: HttpClient, private security: SeguridadDatos) { }

  isJsonString(jsonToParse: any) {
    try {
      JSON.parse(jsonToParse);
    } catch (e) {
      return false;
    }
    return true;
  }

  MasterGETPOST(headersData: any, url: string, post?: boolean, body?: any) {
    return new Promise(async (resolve: any, reject: any) => {
      if (post) {
        console.log(headersData); 
        console.log(body); 
        this.security.EncrypDataHash(headersData).then((headers: any) => {
          this.http.post(url, body, { headers }).subscribe((res: any) => {
            let jsonres;
            try {
              if (this.isJsonString(res)) {
                jsonres = JSON.parse(res)
                // console.log('Metodo :>> ', headersData.method, 'res sin json:>> ', res, 'respuesta de los metodos en jsonres:>> ', jsonres);
              } else {
                jsonres = res
                // console.log('Metodo :>> ', headersData.method, 'res sin json:>> ', res, 'respuesta de los metodos en jsonres:>> ', jsonres);
              }
              resolve(jsonres);
            }catch (error) {
              console.log(error)
            }
          })
        }).catch((error: any) => {
          reject(error)
        })
      }
      else {
        this.security.EncrypDataHash(headersData).then((headers: any) => {
          // se debe cambiar por axion para colocarle un timeout
          this.http.get(url, { headers }).subscribe((res: any) => {
            let jsonres;
            try {
              if (this.isJsonString(res)) {
                jsonres = JSON.parse(res)
                // console.log('Metodo :>> ', headersData.method, 'res sin json:>> ', res, 'respuesta de los metodos en jsonres:>> ', jsonres);
              } else {
                jsonres = res
                // console.log('Metodo :>> ', headersData.method, 'res sin json:>> ', res, 'respuesta de los metodos en jsonres:>> ', jsonres);
              }
              resolve(jsonres);
            } catch (error) {
              console.log(error)
            }
          })
        }).catch((error: any) => {
          reject(error)
        })
      }

    })
  }

  getPromo() {
    return new Promise(async (resolve: any, reject: any) => {
      const headersData = {
        method: `GetAllPromo`,
        token: this.ApiKeyApissl,
        platform: "PROMOS"
      };
      this.MasterGETPOST(headersData, this.consulta).then((data: any) => {
        resolve(data);
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  SendWaNotif(Content: string, Number: string) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        let Phone = Number
        const DataWa = {
          "lic": environment.lic,
          "Mensaje": Content,
          "Phone": Phone,
          "Archivos": [
            {
              "filename": "",
              "path": ""
            }
          ]
        }
        const headersData = {
          method: `SendWhats`,
          token: this.ApiKeyApissl,
          platform: "whatsapp",
        };
        this.MasterGETPOST(headersData, this.whatsapp, true, DataWa).then((data: any) => {
          resolve(data);
          console.log(data)
        }).catch((error: any) => {
          reject(error)
        })

        if (Phone) {
          resolve(true)
        }

      } catch (error) {
        reject(error)
      }
    })
  }
}
