import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimiapiService {
  constructor(public hc:HttpClient){}
  askapi(que:string){
    return this.hc.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAPSeqtXs4YmY7tftFYzrahsjZmX-c-qfA',
    {
      "contents": [{
        parts:[{text:`"You are an AI chatbot that only answers questions about animations and cartoons. 
    If the user asks anything unrelated, politely refuse. Now, answer this:"`+que}]
        }]
        }
      )
  }
}
