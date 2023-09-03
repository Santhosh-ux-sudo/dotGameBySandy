const SPACE=document.querySelectorAll(".space")
const BTN=document.querySelectorAll(".button")
const info=document.querySelector(".info")

let total_btns=BTN.length
let lines=[]
let j,u,d,r,l,s,happen=false,happen2=false
let text='E'


for(let i=0;i<180;i++){
    lines.push(0)
}

for(let i=0;i<total_btns;i++){
    if(i>=0 && i<9){
        BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1
            u=i
            l=i+9
            r=i+10
            d=i+19
            s=which_space(u)
            check_status(u,l,r,d,s)
            if(happen==false){
                change_player()
            }
        })
    }
    else if(i>=171 && i<180){
        BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1
            u=i-19
            d=i
            l=i-10
            r=i-9
            s=which_space(u) 
            check_status(u,l,r,d,s)
            if(happen==false){
                change_player()
            }
        })
    }
    else if(i%19==9){
        BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1
            u=i-9
            d=i+10
            l=i
            r=i+1
            s=which_space(u) 

            check_status(u,l,r,d,s)
            if(happen==false){
                change_player()
            }
        })
    }
    else if(i%19==18){
        BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1
            u=i-10
            d=i+9
            l=i-1
            r=i
            s=which_space(u)

           check_status(u,l,r,d,s)
           if(happen==false){
                change_player()
            }
        })
    }
    else if(i%19<9){
         BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1
            u=i
            l=i+9
            r=i+10
            d=i+19
            s=which_space(u)
            check_status(u,l,r,d,s)
           
            
            u=i-19
            d=i
            l=i-10
            r=i-9
            s=which_space(u)
            
            check_status2(u,l,r,d,s)

            if(happen==false && happen2==false){
                change_player()
            }
            
        })
    }
    else{
        BTN[i].addEventListener("click",function(){

            add_active(i)
            lines[i]=1

            u=i-9
            d=i+10
            l=i
            r=i+1 
            s=which_space(u)

            check_status(u,l,r,d,s)
            
            u=i-10
            d=i+9
            l=i-1
            r=i   
            s=which_space(u)

            check_status2(u,l,r,d,s)

            if(happen==false && happen2==false){
                change_player()
            }

        })
    }
}


function which_space(x){
    let y
    y=(Math.floor(x/19)*9)+(x%19)
    return y
}

function add_active(x){
    BTN[x].classList.add("active")
}

function check_status(a,b,c,d,e){
    if(lines[a]==1 && lines[b]==1 && lines[c]==1 && lines[d]==1){
        SPACE[e].textContent=text
        happen=true
    }else{
        happen=false
    }
}

function check_status2(a,b,c,d,e){
    if(lines[a]==1 && lines[b]==1 && lines[c]==1 && lines[d]==1){
        SPACE[e].textContent=text
        happen2=true
    }else{
        happen2=false
    }
}

function change_player(){
    if(text=='E'){
        text='S'
        info.textContent="S"
    }else{
        text='E'
        info.textContent="E"
    }
    
}




