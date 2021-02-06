'use strict'

let data =new XMLHttpRequest();

//console.log(data)

let data2 ="https://jsonplaceholder.typicode.com/users";

//console.log(data2)

//console.log(data)
let bbc = document.getElementById('vamsi');

data.onreadystatechange = function(){
    if(data.readyState === 4){
        let table =  JSON.parse(data.response);
        console.log(table);

let ra=function(value){
    let p1 =document.createElement('td');
    p1.innerText=value;
    return p1;

}

table.forEach((a,b) => {
    let krish =document.createElement('tr');
     
    let cir=[ra(b+1)];
    for(let q in a){




        if(q === 'address'){

let {geo,...address}=a[q]
address=Object.values(address);
geo=Object.values(geo);
a[q]=geo + address;

        }


        if(q === 'company'){

            a[q]=Object.values(a[q])

        }


        cir.push(ra(a[q]));
    }
    krish.append(...cir);
    bbc.append(krish)

    
});
       

        

    //    let bbc = document.getElementById('vamsi');


    //     let krish =document.createElement('tr');
    //     let p1 =document.createElement('td');
    //     let p2 =document.createElement('td');
    //     let p3 =document.createElement('td');
    //     let p4 =document.createElement('td');
    //     let p5 =document.createElement('td');
    //     let p6 =document.createElement('td');
    //     let p7 =document.createElement('td');
    //     let p8 =document.createElement('td');

    //     p1.innerText = qw.id;
    //     p2.innerText = qw.name;
    //     p3.innerText = qw.username;
    //     p4.innerText = qw.email;
    //     p5.innerText = qw.address;
    //     p6.innerText = qw.phone;
    //     p7.innerText = qw.website;
    //     p8.innerText = qw.company;

    //      krish.append(p1,p2,p3,p4,p5,p6,p7,p8);

        
    //  bbc.append(krish);
    }
}

data.open("get",data2);
data.send();