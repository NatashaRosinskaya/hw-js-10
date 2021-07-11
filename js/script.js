let Light = function(){
    let status = false;
    
    this.enable = function(){
        status = true;
    };

    this.disable = function(){
        status = false;
    };

    this.getStatus = function(){
        return status;
    };
};

let Lightbulb = function (){
    Light.apply(this, arguments);
   
        let status = false;
        let parentGetStatus = this.getStatus;

        this.on = function(){ 
            if (parentGetStatus () == true){           
            status = true            
        }
        }

        this.off = function(){            
            status = false;        
        }

        this.getStatus = function(){
            parentGetStatus.call(this);

            if (status == true && parentGetStatus() == true) return true;
            return false;
        }

        this.get = function (){
            this.power = +prompt ('Введите мощность лампочки, Вт');
            this.cost = +prompt ('Введите стоимость электроэнергии за 1квт');
            
    
            if (this.getStatus() == true && parentGetStatus() == true){
                this.workTime = +prompt ('Введите время работы лампочки, ч');
            } else{
                this.workTime = 0;
            };
    
            this.ex();
        }
        this.ex = function(){
            this.res = (this.power / 1000) * this.cost * this.workTime;
           
            this.result ();
        };
        this.result = function(){
    
            if (this.workTime == 0 || this.workTime == undefined || this.getStatus() == false){
                console.log ('Лампочка не включена');
            } else {
                console.log (`Лампочка проработала ${this.workTime} часов. Стоимость потраченной электроэнергии составит ${this.res} рублей.`)
            }
        }
    }
        

let lightbulb = new Lightbulb ();
lightbulb.enable();
lightbulb.on();

lightbulb.get();

//Дополнительное (??)
let Dom = function (){
    this.create = function(){

        let title = document.createElement('title');
        title.innerHTML = 'HW-10';
        document.head.appendChild(title);
      
        let doc = document.createElement('div')
        doc.classList.add('container')
        doc.innerHTML = ` <div class="information">
                               <h2 class = "title"> Lorem ipsum!</h3>
                               <p class="discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officiis, voluptate tenetur tempora nisi ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officiis, voluptate tenetur tempora nisi ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus officiis, voluptate tenetur tempora nisi ad!</p>
                               <button class = "btn"> More </button>
                            </div>`
        document.body.appendChild(doc)

        let btnOpen = document.querySelector('.btn')
        btnOpen.addEventListener('click', (event)=>{
            alert ('Read more?')
        })
        let style = document.createElement('style');
        style.innerHTML =`
                *{
                    padding: 0;
                    margin: 0;
                }
                .container{
                    max-width: 1280px;
                    width: 80%;
                    margin: 0 auto;
                }
                body{
                    font-family: 'Arvo', serif;
                }
                .title{
                    font-size: 44px;
                    line-height: 48px;
                    font-weight: normal;
                    text-align: center;
                }
                .discription{
                    font-size: 14px;
                    line-height: 26px;
                    margin-top: 35px;
                    color: #9FA3A7;
                }               
                .btn{
                    font-family: 'Arvo', serif;
                    margin-top: 30px;
                    width: 150px;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 15px;
                    text-transform: uppercase;
                    background-color: white;
                    border: 2px solid black;
                    padding: 10px 0;
                    border-radius: 55px;
                    letter-spacing: 2.4px;
                }
                .btn:hover{
                    opacity: 0.5;
                    cursor: pointer;
                }`;
            document.head.appendChild(style);
    }
    }
let dom = new Dom();
dom.create()

