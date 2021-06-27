var base_url = `http://127.0.0.1:5000/`;

function httpGet(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function httpPost(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function httpPut(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function Cancel(num){
  var togbutton = document.getElementsByClassName("btn");

  if(togbutton[num].innerHTML === "Issue") {
    togbutton[num].innerHTML = "Return";
  }
  else
    {
      togbutton[num].innerHTML = "Issue";
    }

}


function get_count(num,book_id,student,usn){
  var button_var = document.getElementsByClassName("btn");
  var count_var = parseInt(document.getElementById("count_val").innerHTML);
  if(count_var<3&&button_var[num].innerHTML==="Issue"){
    count_var++;
    document.getElementById("count_val").innerHTML = count_var.toString();
    httpPost(`book/issue?type=${student}&primary_key=${usn}&book_id=${book_id}`);
  }
  else if(button_var[num].innerHTML==="Return"&&count_var>0){
    count_var--;
    document.getElementById("count_val").innerHTML = count_var.toString();
    httpPost(`book/return?type=${student}&primary_key=${usn}&book_id=${book_id}`);    
  }
  else{
    alert("You have reached the maximum amount of books that are issued to a student!");
    Cancel(num);
  }
}


var button_num = 0;

function generate(subject_name, data){
  var wrapper = document.getElementById('wrapper');
  var element = document.querySelector('meta[id="primary_key"]');
  var usn = element && element.getAttribute("content");
  var count_books = parseInt(document.getElementById("count_val").innerHTML);
  var subject_heading = document.createElement('h1');
  subject_heading.innerHTML = subject_name;
  var line_break1 = document.createElement('br');
  wrapper.append(subject_heading);
  wrapper.append(line_break1);
  var main = document.createElement('main');
  main.className = 'page-content';
  for(i=0;i<data.length;i++){
    var card = document.createElement('div');
    card.className = 'card';
    card.style.cssText = `background-image:url(${data[i]['book_img']});`
    var content = document.createElement('div');
    content.className = 'content';
    var book_title = document.createElement('h2');
    book_title.className = 'title';
    book_title.innerHTML = data[i]['bookname'];
    var book_author = document.createElement('p');
    book_author.className = 'copy';
    book_author.innerHTML = data[i]['author'];
    var issue_button = document.createElement('button');
    issue_button.className = 'btn';
    let flag=0;  
    let bookidissued = new Array();
    for(k=0;k<count_books;k++) {
    var element2 = document.querySelector('meta[id="bookid['+k+']"');
    bookidissued[k] = element2 && element2.getAttribute("content");
    console.log(bookidissued[k]);
        if(data[i]['bookid']==bookidissued[k]) 
        flag=1;
        break; 
    }
    if(flag==0) {issue_button.innerHTML = 'Issue'; }
    else {issue_button.innerHTML = 'Return';}
    let button_num_val = button_num;
    let book_id = data[i]['bookid'];
    let student = 'student';
    issue_button.onclick = function(){get_count(button_num_val,book_id,student,usn);Cancel(button_num_val);};
    button_num += 1;
    content.append(book_title);
    content.append(book_author);
    content.append(issue_button);
    card.append(content);
    main.append(card);
  }
  wrapper.append(main);
  var line_break2 = document.createElement('br');
  wrapper.append(line_break2);
}

function do_it(){
  var sem = parseInt(document.getElementById("sem").content);
  var subjects = httpGet("subjects?sem="+sem);
  for(j=0;j<subjects['data'].length;j++){
    var data = httpGet("books?sem="+sem+"&subject_name="+subjects['data'][j]);
    generate(subjects['data'][j], data['data']);
  }
}

do_it();
