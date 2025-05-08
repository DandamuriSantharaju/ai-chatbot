import { Component } from '@angular/core';
import { AnimiapiService } from '../animiapi.service';
@Component({
  selector: 'app-aichatboot',
  standalone: false,
  templateUrl: './aichatboot.component.html',
  styleUrl: './aichatboot.component.css'
})
export class AichatbootComponent {
// inp:string=''
// apiRes:any=''
// data:any=[]
// constructor(public as:AnimiapiService){}
// sendtoapi(){
//   this.as.askapi(this.inp).subscribe((res:any)=>{this.apiRes=res.candidates[0].content.parts[0].text
//     console.log(res);
//     this.data.push({
//       user:this.inp,
//       bot:this.apiRes
//       })
//       this.inp=''
//   })
// }


inp: string = '';
apiRes: string = '';
data: { user: string, bot?: string, typedBot?: string, loading?: boolean }[] = [];

constructor(public as: AnimiapiService) {}

sendtoapi() {
  if (!this.inp.trim()) return;

  // Add user message with a loading effect
  this.data.push({ user: this.inp, loading: true });

  let currentIndex = this.data.length - 1;
  let userInput = this.inp;
  this.inp = '';

  // Call API to get response
  this.as.askapi(userInput).subscribe((res: any) => {
    this.apiRes = res.candidates[0].content.parts[0].text;

    // Simulate a 5-second delay before displaying the response
    setTimeout(() => {
      this.data[currentIndex].loading = false;
      this.data[currentIndex].bot = this.apiRes;
      this.data[currentIndex].typedBot = '';

      // Apply typing effect
      this.typingEffect(this.apiRes, currentIndex);
    }, 5000);
  });
}

// Function for the typing effect
typingEffect(text: string, index: number) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      this.data[index].typedBot += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50); // Typing speed (adjust as needed)
}
}
