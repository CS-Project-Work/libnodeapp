function Cancel(i) 
{
<<<<<<< HEAD
var togbutton = document.getElementsByClassName("btn");

if(togbutton[i].innerHTML === "Issue") {
  togbutton[i].innerHTML = "Cancel";
}
else
  {
    togbutton[i].innerHTML = "Issue";
  }

}

function get_count(j){
var button_var = document.getElementsByClassName("btn");
var count_var = parseInt(document.getElementById("count_val").innerHTML);
if(count_var<3&&button_var[j].innerHTML==="Issue"){
  count_var++;
  document.getElementById("count_val").innerHTML = count_var.toString();
}
else if(button_var[j].innerHTML==="Cancel"&&count_var>0){
  count_var--;
  document.getElementById("count_val").innerHTML = count_var.toString();
}
else{
  alert("You have reached the maximum amount of books that are issued to a student!");
  Cancel(j);
}
=======
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


function Cancel(num)
  {
  var togbutton = document.getElementsByClassName("btn");

  if(togbutton[num].innerHTML === "Issue") {
    togbutton[num].innerHTML = "Cancel";
  }
  else
    {
      togbutton[num].innerHTML = "Issue";
    }

}


function get_count(num){
  var button_var = document.getElementsByClassName("btn");
  var count_var = parseInt(document.getElementById("count_val").innerHTML);
  if(count_var<3&&button_var[num].innerHTML==="Issue"){
    count_var++;
    document.getElementById("count_val").innerHTML = count_var.toString();
  }
  else if(button_var[num].innerHTML==="Cancel"&&count_var>0){
    count_var--;
    document.getElementById("count_val").innerHTML = count_var.toString();
  }
  else{
    alert("You have reached the maximum amount of books that are issued to a student!");
    Cancel(num);
  }
}


var button_num = 0;

function generate(subject_name, data){
  var wrapper = document.getElementById('wrapper');
  var subject_heading = document.createElement('h1');
  subject_heading.innerHTML = subject_name;
  var line_break1 = document.createElement('br');
  wrapper.append(subject_heading);
  wrapper.append(line_break1);
  var main = document.createElement('main');
  main.className = 'page-content';
  for(i=0;i<data.length;i++){
    var card = document.createElement('card');
    var content = document.createElement('content');
    var book_title = document.createElement('h2');
    book_title.className = 'title';
    book_title.innerHTML = data[i]['bookname'];
    var book_author = document.createElement('p');
    book_author.className = 'copy';
    book_author.innerHTML = data[i]['author'];
    var issue_button = document.createElement('button');
    issue_button.className = 'btn';
    issue_button.addEventListener('click',function(){get_count(button_num)});
    issue_button.addEventListener('click',function(){Cancel(button_num)});
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
>>>>>>> js
}

function do_it(){
  var sem = 3;
  var subjects = httpGet("subjects?sem="+sem);
  for(j=0;j<subjects['data'].length;j++){
    var data = httpGet("books?sem="+sem+"&subject_name="+subjects['data'][j]);
    generate(subjects['data'][j], data['data']);
  }
}

do_it();
