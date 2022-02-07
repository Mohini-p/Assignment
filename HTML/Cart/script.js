//to get the data from form and set it 
function setData(){
    //var pid=0
    //get main div id 
    var ran = Math.random().toString(16).slice(2);
    var plist = document.getElementById("plist");
    plist.className='plist';

    var newDiv = document.createElement("div");
    newDiv.className = 'box1';
    //newDiv.setAttribute("style","border : 2px solid blue; margin : 5px;");
    plist.appendChild(newDiv);

    var cnt = document.createElement("div");
    cnt.id = "cnt"+ran;
    cnt.setAttribute("style","border : 2px solid blue; margin : 5px; display : flex; padding : 10px;");
    cnt.setAttribute("class","row");
    
    var imgcnt = document.createElement("div");
    imgcnt.setAttribute("class","col-4");
    
    var prcnt = document.createElement("div");
    prcnt.setAttribute("class","col-8");
    prcnt.setAttribute("style","padding :10px; margin-left : 10px;")


    //crating the normal label and getting the data from the form
    
    //div for image 
    /*var imgdiv = document.createElement("div");
    imgdiv.setAttribute("height","250");
    imgdiv.setAttribute("weight","250");
    imgdiv.className="imgdiv";
    imgdiv.setAttribute("id","imgdiv");
    imgcnt.appendChild(imgdiv);*/

    //image
    var imglbl = document.createElement("img");
    var productImage = document.getElementById("pimg");
    var temp = window.URL.createObjectURL(productImage.files[0]);
    console.log(temp);
    imglbl.setAttribute("src",temp);
    imglbl.setAttribute("width","150");
    imglbl.setAttribute("height","150");
    imgcnt.appendChild(imglbl);

    var brk = document.createElement("br");
    imgcnt.appendChild(brk.cloneNode(true));

    //pid
    // var label1 = document.createElement("label");
    // label1.textContent = "Product ID : ";
    // prcnt.appendChild(label1);

    // var pidd = document.createElement("label");
    // pidd.innerText = pid;
    // prcnt.appendChild(pidd);
    // prcnt.appendChild(brk.cloneNode(true));


    //pname
    var label1 = document.createElement("label");
    label1.textContent = "Product Name : ";
    prcnt.appendChild(label1);

    var pn = document.createElement("label");
    pn.innerText = document.getElementById("pname").value;
    prcnt.appendChild(pn);
    prcnt.appendChild(brk.cloneNode(true)); //clonenode = true for using one element multiple times

    //description
    var label2 = document.createElement("label");
    label2.textContent = "Product Description : ";
    prcnt.appendChild(label2);

    var pd = document.createElement("label");
    pd.innerText = document.getElementById("pdesc").value;
    prcnt.appendChild(pd);
    prcnt.appendChild(brk.cloneNode(true));
    //quantity
    var label3 = document.createElement("label");
    label3.textContent = "Product Quantity : ";
    prcnt.appendChild(label3);

    var pq = document.createElement("label");
    pq.innerText = document.getElementById("pqty").value;
    prcnt.appendChild(pq);
    prcnt.appendChild(brk.cloneNode(true));

    //price
    var label4 = document.createElement("label");
    label4.textContent = "Product Price : ";
    prcnt.appendChild(label4);

    var pp = document.createElement("label");
    pp.innerText = document.getElementById("pprice").value;
    prcnt.appendChild(pp);
    prcnt.appendChild(brk.cloneNode(true));


    //button
    var btn1 =document.createElement("button");
    btn1.innerHTML = "Add to Cart";
    btn1.type = "submit";
    btn1.setAttribute("style","margin-top : 45px;");
    btn1.setAttribute("id","addbtn"+ran);

    cnt.appendChild(imgcnt);
    cnt.appendChild(prcnt);
    prcnt.appendChild(btn1);
    plist.appendChild(cnt);
   // pid++;

    // function for adding item in cart
    btn1.onclick = function(){
        var ran = Math.random().toString(16).slice(2);
        var par = this.parentNode.parentNode.id;
        var imgsrc = document.getElementById(par).getElementsByClassName("col-4")[0].getElementsByTagName("img")[0].src;
        var pname = document.getElementById(par).getElementsByClassName("col-8")[0].getElementsByTagName("label")[1].innerHTML;
        var pqty = document.getElementById(par).getElementsByClassName("col-8")[0].getElementsByTagName("label")[5].innerHTML;
        var pprice = document.getElementById(par).getElementsByClassName("col-8")[0].getElementsByTagName("label")[7].innerHTML;

        var qty = prompt("Add Quantity :");
        console.log(qty);
        pqty =  pqty - qty;
        pq.innerText = pqty;

        //main div
        var cart = document.getElementById("cart");
        plist.className='cart';

        var cnt = document.createElement("div");
        cnt.id = "cnt"+ran;
        cnt.setAttribute("style","border : 2px solid blue; margin : 5px; display : flex; padding : 10px;");
        cnt.setAttribute("class","row");
        
        var imgcnt = document.createElement("div");
        imgcnt.setAttribute("class","col-4");
        
        var prcnt = document.createElement("div");
        prcnt.setAttribute("class","col-8");
        prcnt.setAttribute("style","padding :10px; margin-left : 10px;")


        var imglbl = document.createElement("img");
        imglbl.setAttribute("src",imgsrc);
        imglbl.setAttribute("width","150");
        imglbl.setAttribute("height","150");
        imgcnt.appendChild(imglbl);

        var brk = document.createElement("br");
        imgcnt.appendChild(brk.cloneNode(true));

        var label1 = document.createElement("label");
        label1.textContent = "Name : ";
        prcnt.appendChild(label1);

        var pn = document.createElement("label");
        pn.innerText = pname;
        prcnt.appendChild(pn);
        prcnt.appendChild(brk.cloneNode(true));

        var label2 = document.createElement("label");
        label2.textContent = "Quantity x Price : ";
        prcnt.appendChild(label2);

        var pqs = document.createElement("label");
        pqs.innerText = qty;
        prcnt.appendChild(pqs);

        var bld = document.createElement("b");
        bld.innerText = " x ";
        prcnt.appendChild(bld);

        var pp = document.createElement("label");
        pp.innerText = pprice;
        prcnt.appendChild(pp);
        prcnt.appendChild(brk.cloneNode(true));

        var label3 = document.createElement("label");
        label3.textContent = "Total : ";
        prcnt.appendChild(label3);

        var pt = document.createElement("label");
        pt.innerText = Number(qty)  * Number(pprice) ;
        prcnt.appendChild(pt);
        prcnt.appendChild(brk.cloneNode(true));

        var rmbtn =document.createElement("button");
        rmbtn.innerHTML = "Remove from Cart";
        rmbtn.type = "submit";
        rmbtn.setAttribute("style","margin-top : 45px;");
        rmbtn.setAttribute("id","delbtn" + ran);

        prcnt.appendChild(rmbtn);
        cnt.appendChild(imgcnt);
        cnt.appendChild(prcnt);
        cart.appendChild(cnt);

        rmbtn.onclick = function(){
            var btnchild = this.parentNode.parentNode;
            console.log(btnchild,cart);
            cart.removeChild(btnchild);
            console.log(pq,pq.innerHTML);
            pq.innerHTML = Number(pqty)  + Number(qty) ;
        }

    }

}

function formReset(){
    document.getElementById("myForm").reset();
    console.log('reset');
}

