import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
var CryptoJS = require("crypto-js");

@Injectable({
    providedIn: "root"
})
export class SeguridadDatos {
    constructor() { }

    key: string = environment.Key;

    //Encripta la los datos
    public encrypt(str: string){
      let encrypted = CryptoJS.AES.encrypt(str, this.key, {
        keySize: 16,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
    //   console.log(str)
      return encrypted.toString();
    }

    private EncrypObj(obj: any) {
        const newObj: any = {};

        for(let keyName in obj) {
            if(obj[keyName] instanceof Array || obj[keyName] instanceof Object) {
                obj[keyName] = this.EncrypObj(obj[keyName]);
            }
            else newObj[keyName] = String(this.encrypt(obj[keyName]));
        }
        return newObj;
    }

    // Encripta los datos que que deben ser enviados en una peticion
    public EncrypDataHash(Datos:any){
        return new Promise((resolve,reject)=>{
            try {
                resolve(this.EncrypObj(Datos));
                // Object.entries(Datos).forEach(([keyOriginal, valueKey]: any ,index:number) => {
                //     var Tamano= Object.keys(Datos);
                //     if(typeof valueKey !="number" && valueKey !=""&& valueKey !=undefined && valueKey !=null){
                //         const Encrypt = this.encrypt(valueKey); //Encripto
                //         Datos[keyOriginal] = Encrypt;
                //     }
                //     if(index == Tamano.length-1){
                //         resolve(Datos)
                //     }
                // })
            } catch (error) {
                reject(error);
            }
        })
      }
}