import { LightningElement } from 'lwc';

export default class Calc extends LightningElement {
     fnum = undefined;
     snum;
    
    handleChange(event) {
      
        if (this.fnum != undefined )
        {
        this.fnum = this.fnum+(event.target.value);
       


        }
        else{
            this.fnum = (event.target.value);
            
        }
        this.snum = eval(this.fnum);
        

        
    }

    buttonClicked(event) {
     
        if (this.fnum != undefined )
        {
        this.fnum = this.fnum+(event.target.value);
        

        }
        else{
            this.fnum = (event.target.value);

            
        }
       
        this.snum = eval(this.fnum);

       
    }
    handleClick(event){

        this.snum=undefined;
        this.fnum =undefined;
    
           
       }
       Calculate(event){

           this.fnum = this.snum

       }
}