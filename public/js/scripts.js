var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 var answer = "", i,  A = new Array();
 
    A["q"]="љ"; A["w"]="њ"; A["e"]="е"; A["r"]="р"; A["t"]="т"; A["y"]="ѕ"; A["u"]="у"; A["i"]="и"; A["o"]="о"; A["p"]="п"; A["["]="ш";
    A["]"]="ѓ"; A[""]="ж"; A["a"]="а"; A["s"]="с"; A["d"]="д"; A["f"]="ф"; A["g"]="г"; A["h"]="х"; A["j"]="ј"; A["k"]="к";  A["l"]="л";
    A[";"]="ч"; A["'"]="ќ"; A["z"]="з"; A["x"]="џ"; A["c"]="ц"; A["v"]="в"; A["b"]="б"; A["n"]="н"; A["m"]="м";
    
function productvalidation() {
    var name = document.getElementById("name").value;
    var prodavnica = document.getElementById("prodavnica").value;
    var grad = document.getElementById("grad").value;
    var cena = document.getElementById("cena").value;
    
    var nameGroup = document.getElementById("name-group");
    var prodavnicaGroup = document.getElementById("prodavnica-group");
    var gradGroup = document.getElementById("grad-group");
    var cenaGroup = document.getElementById("cena-group");
    
    var uslov;
    
    if (name == null || name == "") {
        nameGroup.className = "form-group";
        document.getElementById("name-feedback").innerHTML = "";
        nameGroup.className = nameGroup.className + " has-error has-feedback";
        uslov = false;
    }else{
        nameGroup.className = "form-group";
        document.getElementById("name-feedback").innerHTML = "";
        nameGroup.className = nameGroup.className + " has-success has-feedback";
        uslov = true;
    }
    
    if (prodavnica == null || prodavnica == "") {
        prodavnicaGroup.className = "form-group";
        document.getElementById("prodavnica-feedback").innerHTML = "";
        prodavnicaGroup.className = prodavnicaGroup.className + " has-error has-feedback";
        uslov = uslov && false;
    }else{
        prodavnicaGroup.className = "form-group";
        document.getElementById("prodavnica-feedback").innerHTML = "";
        prodavnicaGroup.className = prodavnicaGroup.className + " has-success has-feedback";
        uslov = uslov && true;
    }
    
    if (grad == null || grad == "") {
        gradGroup.className = "form-group";
        document.getElementById("grad-feedback").innerHTML = "";
        gradGroup.className = gradGroup.className + " has-error has-feedback";
        uslov = uslov && false;
    }else{
        gradGroup.className = "form-group";
        document.getElementById("grad-feedback").innerHTML = "";
        gradGroup.className = gradGroup.className + " has-success has-feedback";
        uslov = uslov && true;
    }
    
    if (cena == null || cena == "" || isNaN(cena)) {
        cenaGroup.className = "form-group";
        document.getElementById("cena-feedback").innerHTML = "";
        cenaGroup.className = cenaGroup.className + " has-error has-feedback";
        uslov = uslov && false;
    }else{
        cenaGroup.className = "form-group";
        document.getElementById("cena-feedback").innerHTML = "";
        cenaGroup.className = cenaGroup.className + " has-success has-feedback";
        uslov = uslov && true;
    }
    return uslov;
}

function signupvalidation(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var nameGroup = document.getElementById("name-group");
    var surnameGroup = document.getElementById("surname-group");
    var emailGroup = document.getElementById("email-group");
    var usernameGroup = document.getElementById("username-group");
    var passwordGroup = document.getElementById("password-group");
    
    var uslov;
    
    if (name == null || name == "") {
        nameGroup.className = "form-group";
        document.getElementById("name-feedback").innerHTML = "";
        nameGroup.className = nameGroup.className + " has-error has-feedback";
        document.getElementById("name-feedback").innerHTML = document.getElementById("name-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = false;
    }else{
        nameGroup.className = "form-group";
        document.getElementById("name-feedback").innerHTML = "";
        nameGroup.className = nameGroup.className + " has-success has-feedback";
        document.getElementById("name-feedback").innerHTML = document.getElementById("name-feedback").innerHTML + '<span class="fa fa-check fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = true;
    }
    
    if (surname == null || surname == "") {
        surnameGroup.className = "form-group";
        document.getElementById("surname-feedback").innerHTML = "";
        surnameGroup.className = surnameGroup.className + " has-error has-feedback";
        document.getElementById("surname-feedback").innerHTML = document.getElementById("surname-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && false;
    }else{
        surnameGroup.className = "form-group";
        document.getElementById("surname-feedback").innerHTML = "";
        surnameGroup.className = surnameGroup.className + " has-success has-feedback";
        document.getElementById("surname-feedback").innerHTML = document.getElementById("surname-feedback").innerHTML + '<span class="fa fa-check fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && true;
    }
    
    if (email == null || email == "" || !(re.test(email))) {
        emailGroup.className = "form-group";
        document.getElementById("email-feedback").innerHTML = "";
        emailGroup.className = emailGroup.className + " has-error has-feedback";
        document.getElementById("email-feedback").innerHTML = document.getElementById("email-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && false;
    }else{
        emailGroup.className = "form-group";
        document.getElementById("email-feedback").innerHTML = "";
        emailGroup.className = emailGroup.className + " has-success has-feedback";
        document.getElementById("email-feedback").innerHTML = document.getElementById("email-feedback").innerHTML + '<span class="fa fa-check fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && true;
    }
    
    if (username == null || username == "") {
        usernameGroup.className = "form-group";
        document.getElementById("username-feedback").innerHTML = "";
        usernameGroup.className = usernameGroup.className + " has-error has-feedback";
        document.getElementById("username-feedback").innerHTML = document.getElementById("username-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && false;
    }else{
        usernameGroup.className = "form-group";
        document.getElementById("username-feedback").innerHTML = "";
        usernameGroup.className = usernameGroup.className + " has-success has-feedback";
        document.getElementById("username-feedback").innerHTML = document.getElementById("username-feedback").innerHTML + '<span class="fa fa-check fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && true;
    }
    
    if (password == null || password == "") {
        passwordGroup.className = "form-group";
        document.getElementById("password-feedback").innerHTML = "";
        passwordGroup.className = passwordGroup.className + " has-error has-feedback";
        document.getElementById("password-feedback").innerHTML = document.getElementById("password-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && false;
    }else{
        passwordGroup.className = "form-group";
        document.getElementById("password-feedback").innerHTML = "";
        passwordGroup.className = passwordGroup.className + " has-success has-feedback";
        document.getElementById("password-feedback").innerHTML = document.getElementById("password-feedback").innerHTML + '<span class="fa fa-check fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && true;
    }
    return uslov;
}

function convertName() {
    answer = "";
    var element = document.getElementById("name");
    var word = element.value.toLowerCase();

    for (i in word){
     if (word.hasOwnProperty(i)) {
       if (A[word[i]] === undefined){
         answer = answer + word[i];
       } else {
         answer = answer + A[word[i]];
       }
     }
    }
    element.value = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

function convertProdavnica() {
    answer = "";
    var element = document.getElementById("prodavnica");
    var word = element.value.toLowerCase();

    for (i in word){
     if (word.hasOwnProperty(i)) {
       if (A[word[i]] === undefined){
         answer = answer + word[i];
       } else {
         answer = answer + A[word[i]];
       }
     }
    }
    element.value = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

function convertGrad() {
    answer = "";
    var element = document.getElementById("grad");
    var word = element.value.toLowerCase();

    for (i in word){
     if (word.hasOwnProperty(i)) {
       if (A[word[i]] === undefined){
         answer = answer + word[i];
       } else {
         answer = answer + A[word[i]];
       }
     }
    }
    element.value = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

function convertPrezime() {
    answer = "";
    var element = document.getElementById("surname");
    var word = element.value.toLowerCase();

    for (i in word){
     if (word.hasOwnProperty(i)) {
       if (A[word[i]] === undefined){
         answer = answer + word[i];
       } else {
         answer = answer + A[word[i]];
       }
     }
    }
    element.value = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

function convertInput() {
    answer = "";
    var element = document.getElementById("search-term");
    var word = element.value.toLowerCase();

    for (i in word){
     if (word.hasOwnProperty(i)) {
       if (A[word[i]] === undefined){
         answer = answer + word[i];
       } else {
         answer = answer + A[word[i]];
       }
     }
    }
    element.value = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}


function product_charts(){
     $.ajax({
            url: "/products/outside-calls/expensiveFive",
            type: "POST",
            processData: false,
            contentType: false,
            dataType:"json",
            success: function(results,status){
                
                var chartdata=results;
                for(var i=chartdata.length; i<5; i++){
                    var proba = {name:"", cena:"0"};
                    chartdata.push(proba);
                }

                Morris.Bar({
                 element: 'najskapi-proizvodi',
                 data: chartdata,
                 xkey: 'name',
                 ykeys: ['cena'],
                 labels: ['Цена'],
                 hideHover:true
                });
                
            }
     });

      $.ajax({
            url: "/products/outside-calls/latestFive",
            type: "POST",
            processData: false,
            contentType: false,
            dataType:"json",
            success: function(results,status){
                
                var chartdata = results;
                for(var i=chartdata.length; i<5; i++){
                    var proba = {name:"", cena:"0"};
                    chartdata.push(proba);
                }

                Morris.Bar({
                 element: 'posledni-proizvodi',
                 data: chartdata,
                 xkey: 'name',
                 ykeys: ['cena'],
                 labels: ['Цена'],
                 hideHover:true
                });
                
            }
     });
}


function loginvalidation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var uslov;
    var usernameGroup = document.getElementById("username-group");
    var passwordGroup = document.getElementById("password-group");
    
    if (username == null || username == "") {
        usernameGroup.className = "form-group";
        document.getElementById("username-feedback").innerHTML = "";
        usernameGroup.className = usernameGroup.className + " has-error has-feedback";
        document.getElementById("username-feedback").innerHTML = document.getElementById("username-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = false;
    }else{
        uslov = true;
    }
    
    if (password == null || password == "") {
        passwordGroup.className = "form-group";
        document.getElementById("password-feedback").innerHTML = "";
        passwordGroup.className = passwordGroup.className + " has-error has-feedback";
        document.getElementById("password-feedback").innerHTML = document.getElementById("password-feedback").innerHTML + '<span class="fa fa-exclamation-circle fa-lg form-control-feedback" aria-hidden="true"></span>';
        uslov = uslov && false;
    }else{
        uslov = true;
    }
    
    return uslov;
    
}

function dragover(ev) {
    ev.preventDefault();
    var dropZone = document.getElementById('drop-zone');
    dropZone.className = 'upload-drop-zone drop';
}
function dragleave(ev) {
    ev.preventDefault();
    var dropZone = document.getElementById('drop-zone');
    dropZone.className = 'upload-drop-zone';
}

function dodrop(event,user)
{
    var dt = event.dataTransfer;
    var files = dt.files;
    var ajaxData = new FormData();
    document.getElementById("drop-zone").innerHTML = '<i class="fa fa-spinner fa-pulse fa-lg"></i>  Processing...';
    var count=files.length;
    if (count>1){
        document.getElementById("drop-zone").innerHTML = "Ве молам внесете само еден баркод!";
        dragleave(event);
    }else{
    ajaxData.append( 'file', files[0] );

        $.ajax({
            url: "/products/1",
            type: "POST",
            data: ajaxData,
            processData: false,
            contentType: false,
            dataType:"json",
            success: function(results,status){
                if(status == "success") {
                   if(results.name!=null){
                    document.getElementById("proba-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  Баркодот '+results.barcode+' е успешно детектиран, следно поднесете ја формата.\
                </div>\
                            <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                  <div class="form-group" id="name-group">\
                    <label for="name" class="col-sm-2 control-label" style="padding-top:25px;">Продукт</label>\
                    <div class="col-sm-10" >\
                        <span style="z-index:999" class="form-edit" aria-hidden="true" onclick="enable_input(\''+results.name+'\');">(промени име)</span>\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="'+results.name+'" onkeyup="convertName()" autocomplete="off" disabled>\
                      <input type="hidden" id="name" name="name" value="'+results.name+'">\
                      <div id="name-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="prodavnica-group">\
                    <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                      <div id="prodavnica-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="grad-group">\
                    <label for="grad" class="col-sm-2 control-label">Град</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                      <div id="grad-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="cena-group">\
                    <label for="cena" class="col-sm-2 control-label">Цена</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                      <div id="cena-feedback"></div>\
                    </div>\
                  </div>\
                  <input type="hidden" id="username" name="username" value="'+user+'">\
                  <input type="hidden" id="barcode" name="barcode" value="'+results.barcode+'">\
                  <input type="hidden" name="post-type" value="addproduct">\
                  <div class="form-group">\
                    <div class="col-sm-offset-2 col-sm-10">\
                      <button type="submit" class="btn btn-default ">Додади Производ</button>\
                    </div>\
                  </div>\
                </form>';}
                else{
                  document.getElementById("proba-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  Баркодот '+results.barcode+' е успешно детектиран, следно поднесете ја формата.\
                </div>\
                            <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                  <div class="form-group" id="name-group">\
                    <label for="name" class="col-sm-2 control-label">Продукт</label>\
                    <div class="col-sm-10" >\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="" onkeyup="convertName()" autocomplete="off">\
                      <div id="name-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="prodavnica-group">\
                    <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                      <div id="prodavnica-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="grad-group">\
                    <label for="grad" class="col-sm-2 control-label">Град</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                      <div id="grad-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="cena-group">\
                    <label for="cena" class="col-sm-2 control-label">Цена</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                      <div id="cena-feedback"></div>\
                    </div>\
                  </div>\
                  <input type="hidden" id="username" name="username" value="'+user+'">\
                  <input type="hidden" id="barcode" name="barcode" value="'+results.barcode+'">\
                  <input type="hidden" name="post-type" value="addproduct">\
                  <div class="form-group">\
                    <div class="col-sm-offset-2 col-sm-10">\
                      <button type="submit" class="btn btn-default ">Додади Производ</button>\
                    </div>\
                  </div>\
                </form>';   
                }
                }
            },
            error  : function() {
                document.getElementById("proba-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
          Баркодот не беше пронајден во сликата.\
        </div>\
            <h4>Drag and drop files below</h4>\
                    <div class="upload-drop-zone" id="drop-zone" ondrop="event.stopPropagation(); event.preventDefault();dodrop(event,\''+user+'\')" ondragover="dragover(event)" ondragleave="dragleave(event)">\
                      Just drag and drop files here\
                  </div>';
            }
        });
    }
}

function my_ajax_function(user){
    var form = document.getElementById("js-upload-form");
    var ajaxData = new FormData(form);
    
    var file_field = document.getElementById("js-upload-files").value;
    if(!(file_field == null || file_field == "")) {
    document.getElementById("js-upload-submit").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Processing...';
    
    $.ajax({
            url: "/products/1",
            type: "POST",
            data: ajaxData,
            processData: false,
            contentType: false,
            dataType:"json",
            success: function(results,status){
                if(status == "success") {
                   if(results.name!=null){
                    document.getElementById("upload-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  Баркодот '+results.barcode+' е успешно детектиран, следно поднесете ја формата.\
                </div>\
                            <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                  <div class="form-group" id="name-group">\
                    <label for="name" class="col-sm-2 control-label" style="padding-top:25px;">Продукт</label>\
                    <div class="col-sm-10" >\
                        <span style="z-index:999" class="form-edit" aria-hidden="true" onclick="enable_input(\''+results.name+'\');">(промени име)</span>\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="'+results.name+'" onkeyup="convertName()" autocomplete="off" disabled>\
                      <input type="hidden" id="name" name="name" value="'+results.name+'">\
                      <div id="name-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="prodavnica-group">\
                    <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                      <div id="prodavnica-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="grad-group">\
                    <label for="grad" class="col-sm-2 control-label">Град</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                      <div id="grad-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="cena-group">\
                    <label for="cena" class="col-sm-2 control-label">Цена</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                      <div id="cena-feedback"></div>\
                    </div>\
                  </div>\
                  <input type="hidden" id="username" name="username" value="'+user+'">\
                  <input type="hidden" id="barcode" name="barcode" value="'+results.barcode+'">\
                  <input type="hidden" name="post-type" value="addproduct">\
                  <div class="form-group">\
                    <div class="col-sm-offset-2 col-sm-10">\
                      <button type="submit" class="btn btn-default ">Додади Производ</button>\
                    </div>\
                  </div>\
                </form>';}
                else{
                  document.getElementById("upload-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  Баркодот '+results.barcode+' е успешно детектиран, следно поднесете ја формата.\
                </div>\
                            <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                  <div class="form-group" id="name-group">\
                    <label for="name" class="col-sm-2 control-label">Продукт</label>\
                    <div class="col-sm-10" >\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="" onkeyup="convertName()" autocomplete="off">\
                      <div id="name-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="prodavnica-group">\
                    <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                      <div id="prodavnica-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="grad-group">\
                    <label for="grad" class="col-sm-2 control-label">Град</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                      <div id="grad-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="cena-group">\
                    <label for="cena" class="col-sm-2 control-label">Цена</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                      <div id="cena-feedback"></div>\
                    </div>\
                  </div>\
                  <input type="hidden" id="username" name="username" value="'+user+'">\
                  <input type="hidden" id="barcode" name="barcode" value="'+results.barcode+'">\
                  <input type="hidden" name="post-type" value="addproduct">\
                  <div class="form-group">\
                    <div class="col-sm-offset-2 col-sm-10">\
                      <button type="submit" class="btn btn-default ">Додади Производ</button>\
                    </div>\
                  </div>\
                </form>';   
                }
                }
            },
            error  : function() {
                document.getElementById("upload-div").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
          Баркодот не беше пронајден во сликата.\
        </div>\
            <h4>Select files from your computer</h4>\
                <form action="" method="post" enctype="multipart/form-data" id="js-upload-form" onsubmit="my_ajax_function(\''+ user +'\'); return false;">\
                      <div class="form-group">\
                      <input type="file" name="files" id="js-upload-files" autocomplete="off">\
                      </div>\
                    <button type="submit" class="btn btn-default" id="js-upload-submit">Upload files</button>\
                </form>';
            }
        });
    }
}

function search_data(){
            var formData = new FormData(document.getElementById('search_data'));
            var value = document.getElementById("search-term").value;
            var uslov=false;

            if(value == null || value == ""){
                document.getElementById("search-group").className = "has-error";
                uslov = false;
            }else{
                document.getElementById("search-group").className = "has-success";
                uslov = true;
            }
            if ((document.getElementById("search-produkt").checked || document.getElementById("search-prodavnica").checked || document.getElementById("search-grad").checked) && uslov){
                
            $.ajax({
              url: "/products/outside-calls/search-form",
              type: "POST",
              data: formData,
              processData: false,  // tell jQuery not to process the data
              contentType: false,   // tell jQuery not to set contentType
              success: function(results,status){
                if(status == "success") {
                    if(results.length>0){
                   
                    var rezultat ='<div class="panel panel-default"><div class="panel-body">\
                    <div class="table-responsive">\
                       <table class="table table-striped table-hover">\
                          <thead>\
                            <tr>\
                                <th></th>\
                                <th>Производ</th>\
                                <th>Продавница</th>\
                                <th>Град</th>\
                                <th>Цена</th>\
                            </tr>';
                    for(var i=0; i<results.length;i++){
                        rezultat=rezultat + '<tr><td>'+ (i+1) +'</td><td>'+results[i].name+'</td><td>'+results[i].prodavnica+'</td><td>'+results[i].grad+'</td><td>'+results[i].cena+' МКД</td></tr>';
                    }        
                    
                    rezultat=rezultat +'</table></div></div></div>';
                    document.getElementById("search-results").innerHTML = rezultat;
                    document.getElementById('search_data').reset();
                    }else{
                        document.getElementById("search-results").innerHTML = '<div class="panel panel-default"><div class="panel-body">Не се пронајдени записи</div></div>';    
                        document.getElementById('search_data').reset();
                    }
                }
              },
              error  : function() {
                   document.getElementById("search-results").innerHTML = '<div class="panel panel-default"><div class="panel-body">Моментално пребарувањето не е овозможено, пробајте покасно.</div></div>';
              }
            });
            }
        }

function live_stream_function(user){
    

  Quagga.init({
    inputStream : {
          name: "Live",
          type: "LiveStream",
          target: document.getElementById('proba-video-stream'),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
          },
          area: { // defines rectangle of the detection/localization area
            top: "0%",    // top offset
            right: "0%",  // right offset
            left: "0%",   // left offset
            bottom: "0%"  // bottom offset
          },
          singleChannel: false // true: only the red color-channel is read
        },
    decoder : {
      readers :  ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
      multiple: false,
    }
  }, function(err) {
    if (err) {
          console.log(err);
          return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
      
    Quagga.onProcessed(function(result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {

            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "red", lineWidth: 2});
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#red", lineWidth: 2});
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 3});
            }
        }
    });  
      
    Quagga.onDetected(function(result){

        var formData = new FormData();
        formData.append('barcode', result.codeResult.code);
        Quagga.stop();
        $.ajax({
            url: "/products/outside-calls/findProductName",
             type: "POST",
             data: formData,
             processData: false,  // tell jQuery not to process the data
             contentType: false,   // tell jQuery not to set contentType
            success: function(results,status){
                if(results!=null){
                setTimeout(function(){

                document.getElementById("messages").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  Баркодот '+result.codeResult.code+' е успешно детектиран, следно поднесете ја формата.\
                </div>\
                            <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                  <div class="form-group" id="name-group">\
                    <label for="name" class="col-sm-2 control-label" style="padding-top:25px;">Продукт</label>\
                    <div class="col-sm-10" >\
                        <span style="z-index:999" class="form-edit" aria-hidden="true" onclick="enable_input(\''+results.name+'\');">(промени име)</span>\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="'+results.name+'" onkeyup="convertName()" autocomplete="off" disabled>\
                      <input type="hidden" id="name" name="name" value="'+results.name+'">\
                      <div id="name-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="prodavnica-group">\
                    <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                      <div id="prodavnica-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="grad-group">\
                    <label for="grad" class="col-sm-2 control-label">Град</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                      <div id="grad-feedback"></div>\
                    </div>\
                  </div>\
                  <div class="form-group" id="cena-group">\
                    <label for="cena" class="col-sm-2 control-label">Цена</label>\
                    <div class="col-sm-10">\
                      <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                      <div id="cena-feedback"></div>\
                    </div>\
                  </div>\
                  <input type="hidden" id="username" name="username" value="'+user+'">\
                  <input type="hidden" id="barcode" name="barcode" value="'+result.codeResult.code+'">\
                  <input type="hidden" name="post-type" value="addproduct">\
                  <div class="form-group">\
                    <div class="col-sm-offset-2 col-sm-10">\
                      <button type="submit" class="btn btn-default ">Додади Производ</button>\
                    </div>\
                  </div>\
                </form>';
                
                },500);
                }else{
                    setTimeout(function(){
                    document.getElementById("messages").innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">\
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                      Баркодот '+result.codeResult.code+' е успешно детектиран, следно поднесете ја формата.\
                    </div>\
                                <form action="" method="post" class="form-horizontal" onsubmit="return productvalidation();">\
                      <div class="form-group" id="name-group">\
                        <label for="name" class="col-sm-2 control-label">Продукт</label>\
                        <div class="col-sm-10" >\
                          <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="" onkeyup="convertName()" autocomplete="off">\
                          <div id="name-feedback"></div>\
                        </div>\
                      </div>\
                      <div class="form-group" id="prodavnica-group">\
                        <label for="prodavnica" class="col-sm-2 control-label">Продавница</label>\
                        <div class="col-sm-10">\
                          <input type="text" class="form-control" id="prodavnica" name="prodavnica" placeholder="Внеси продавница" onkeyup="convertProdavnica()" autocomplete="off">\
                          <div id="prodavnica-feedback"></div>\
                        </div>\
                      </div>\
                      <div class="form-group" id="grad-group">\
                        <label for="grad" class="col-sm-2 control-label">Град</label>\
                        <div class="col-sm-10">\
                          <input type="text" class="form-control" id="grad" name="grad" placeholder="Внеси град или место" onkeyup="convertGrad()" autocomplete="off">\
                          <div id="grad-feedback"></div>\
                        </div>\
                      </div>\
                      <div class="form-group" id="cena-group">\
                        <label for="cena" class="col-sm-2 control-label">Цена</label>\
                        <div class="col-sm-10">\
                          <input type="text" class="form-control" id="cena" name="cena" placeholder="Внеси цена" autocomplete="off">\
                          <div id="cena-feedback"></div>\
                        </div>\
                      </div>\
                      <input type="hidden" id="username" name="username" value="'+user+'">\
                      <input type="hidden" id="barcode" name="barcode" value="'+result.codeResult.code+'">\
                      <input type="hidden" name="post-type" value="addproduct">\
                      <div class="form-group">\
                        <div class="col-sm-offset-2 col-sm-10">\
                          <button type="submit" class="btn btn-default ">Додади Производ</button>\
                        </div>\
                      </div>\
                    </form>';
                    },500);
                }
            }
        });
        
    });
  });
  
  document.getElementById("change-button").innerHTML = '<h4>Click button to stop live streaming.</h4><button onclick="stop_stream_function();" class="btn btn-default">Stop Live Streaming</button>';
}

function stop_stream_function(){
    Quagga.stop();
    document.getElementById("change-button").innerHTML = '<h4>Click button to start live streaming.</h4><button onclick="live_stream_function();" class="btn btn-default">Start Live Streaming</button>';

    document.getElementById("proba-video-stream").innerHTML = '';

}
var markers=[]; 
var maxSlider = 0;
var minSlider = 999999;
function opcija(id) {
    
    var geocoder = new google.maps.Geocoder();
    var arrayOptions = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
  
    $.ajax({
            url: "/products/outside-calls/"+id,
            type: "POST",
            processData: false,
            contentType: false,
            dataType:"json",
            success: function(results,status){
                var infowindow = new google.maps.InfoWindow();
                if(results.length>0){
                    var map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 41.5662922, lng: 21.9834505},
                        scrollwheel: false,
                        zoom: 8,
                        styles: arrayOptions
                    });   
                }
                for(var i=0; i<results.length; i++) {
                    var text = '<h3>Цена: ' + results[i].cena + ' МКД</h3><hr/><p>Производ: '+ results[i].name + '</p><p>Продавница: ' + results[i].prodavnica + '</p><p>Град: ' + results[i].grad + '</p>';
                    function proba(textovi, price,i,kraj){
                        geocoder.geocode( { 'address': results[i].grad }, function(tocki, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              
                            var marker = new google.maps.Marker({
                              position : tocki[0].geometry.location,
                              map      : map,
                              cena      :price,
                              visible   :true
                            });
                            markers.push(marker);
                            google.maps.event.addListener(marker, 'click', function(){
                                infowindow.close(); // Close previously opened infowindow
                                infowindow.setContent( textovi);
                                infowindow.open(map, marker);
                            });

                            if(minSlider > price){
                               minSlider = price;
                            }
                            if(maxSlider < price){
                               maxSlider = price;
                            }
                            if(i == kraj-1){
                                setSlider();
                            }
                          } else {
                            alert("Geocode was not successful for the following reason: " + status);
                          }
                        });
                    }
                    proba(text, results[i].cena,i,results.length);
                }
                
            }
  });
 
}

function enable_input(proba){
    document.getElementById("name-group").innerHTML = '<label for="name" class="col-sm-2 control-label">Продукт</label>\
                    <div class="col-sm-10" >\
                      <input type="text" class="form-control" id="name" name="name" placeholder="Внеси име на производ" value="'+proba+'" onkeyup="convertName()" autocomplete="off">\
                      <div id="name-feedback"></div>\
                    </div>';
}

var snapSlider = document.getElementById('snap');



function setSlider(){

    noUiSlider.create(snapSlider, {
    	start: maxSlider,
    	behaviour: 'snap',
    	connect: 'lower',
    	range: {
    		'min':  minSlider,
    		'max':  maxSlider
    	}
    });
    var inputFormat = document.getElementById('productPrice');
    inputFormat.innerHTML = '< '+ maxSlider +' МКД';
    snapSlider.noUiSlider.on('change', function(){
	
    var sliderValue = snapSlider.noUiSlider.get();	
    inputFormat.innerHTML = '< '+ sliderValue +' МКД';
    for(var i=0;i<markers.length;++i){
        markers[i].setVisible(sliderValue>=markers[i].get('cena'));
    }

    });
}
