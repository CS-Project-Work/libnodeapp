var base_url = `http://127.0.0.1:5000/`;

function httpGet(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", base_url+route, true ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function httpPost(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", base_url+route, true ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function httpPut(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", base_url+route, true ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function Cancel(i)
  {
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
}


var button_num = 0;

function generate(subject_name, data){
  var wrapper = document.getElementById('wrapper');
  var subject_heading = document.createElement('h1');
  subject_heading.innerHTML = subject_name;
  var line_break = document.createElement('br');
  subject_heading.append(line_break);
  wrapper.append(subject_heading);
  var main = document.createElement('main');
  main.className = 'page-content';
  for(i=0;i<data.length;i++){
    var card = document.createElement('card');
    var content = document.createElement('content');
    var book_title = document.createElement('h2');
    book_title.className = 'title';
    book_title.innerHTML = data[i]['title'];
    var book_author = document.createElement('p');
    book_author.className = 'copy';
    book_author.innerHTML = data[i]['author'];
    var issue_button = document.createElement('button');
    issue_button.className = 'btn';
    issue_button.addEventListener('click',get_count(button_num));
    issue_button.addEventListener('click',Cancel(button_num));
    button_num += 1;
    content.append(book_title);
    content.append(book_author);
    content.append(issue_button);
    card.append(content);
    wrapper.append(card);
  }
}
