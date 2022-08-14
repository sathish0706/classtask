let api=fetch("https://jsonplaceholder.typicode.com/posts");
api.then((data)=>data.json())
.then((data1)=>foo(data1));


function foo(val){
    for(let i=0; i<10; i++){
        var div=document.createElement("div");
        div.innerHTML=`<div id=div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${val[i].id}</h5>
          <h5 class="card-title">${val[i].title}</h5>
          <h5 class="card-title">${val[i].body}</h5>
        </div>
      </div>`
      document.body.append(div);
    }
}
