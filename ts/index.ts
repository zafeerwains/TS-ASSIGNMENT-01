const id=document.getElementById('jsonIdData')!
 // const tbl='<tr><th scope="row" ></th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>'
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res =>{
    for(let i=0;i<res.products.length;i++){
        id.innerHTML+='<tr><td>'+res.products[i].id+'</td><td>'+res.products[i].title+'</td><td>'+res.products[i].description+'</td><td>'+res.products[i].brand+'</td>'+'</td><td>'+res.products[i].category+'</td></tr>'
    }
} );
