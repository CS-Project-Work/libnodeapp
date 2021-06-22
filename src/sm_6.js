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


function inc(book_id, formatted_subject_name, num){
  console.log(book_id);
  var stock =  parseInt(document.getElementById(formatted_subject_name+"_stock_"+num.toString()).innerHTML);
  var final_ans = (stock+1).toString();
  document.getElementById(formatted_subject_name+"_stock_"+num).innerHTML = final_ans;
  httpPut(`modify/stock?book_id=${book_id}&new_value=${final_ans}`);
}


function dec(book_id, formatted_subject_name, num){
  var stock =  parseInt(document.getElementById(formatted_subject_name+"_stock_"+num.toString()).innerHTML);
  if(stock<=0){
    var final_ans = 0;
  }
  else{
    var final_ans = (stock-1);
  }
  document.getElementById(formatted_subject_name+"_stock_"+num).innerHTML = final_ans.toString();
  httpPut(`modify/stock?book_id=${book_id}&new_value=${final_ans}`);
}

function format_subject_name(subject_name){
  var lower_case = subject_name.toLowerCase();
  var join_with_underscore = lower_case.replace(" ", "_");
  return join_with_underscore;
}


function generate_tables(subject_name, data){
  var wrapper = document.getElementById("wrapper");
  var title = document.createElement('h1');
  title.innerHTML = subject_name;
  var breaker1 = document.createElement('br');
  wrapper.append(title);
  wrapper.append(breaker1);
  var table = document.createElement('table');
  table.className = 'rwd-table';
  var headers = ['Book Title', 'Author', 'Stocks left', 'Add stocks', 'Delete stocks'];
  var header_row = document.createElement('tr');
  for(t=0;t<headers.length;t++){
    var header_obj = document.createElement('th');
    header_obj.innerHTML = headers[t];
    header_row.append(header_obj);
  }
  table.append(header_row);
  for(i=0;i<data.length;i++){
    var table_row = document.createElement('tr');
    var formatted_subject_name = format_subject_name(subject_name);
    table_row.id = formatted_subject_name + "_" + i.toString();

    var title_entry = document.createElement('td');
    title_entry.setAttribute("data-th",'Book Title');
    title_entry.innerHTML = data[i]['bookname'];
    table_row.append(title_entry);

    var author_entry = document.createElement('td');
    author_entry.setAttribute("data-th","Author");
    author_entry.innerHTML = data[i]['author'];
    table_row.append(author_entry);

    var stocks_left_entry = document.createElement('td');
    stocks_left_entry.setAttribute("data-th","Stocks left");
    stocks_left_entry.id = formatted_subject_name + "_stock_" + i.toString();
    stocks_left_entry.innerHTML = data[i]['numberofstocks'];
    table_row.append(stocks_left_entry);

    var add_stocks_entry = document.createElement('td');
    add_stocks_entry.setAttribute("data-th","Add stocks");
    var add_stocks_button = document.createElement('button');
    add_stocks_button.className = "button";
    add_stocks_button.innerHTML = "Add";
    let book_id = data[i]['bookid'];
    let num_var = i;
    add_stocks_button.onclick = function(){inc(book_id, formatted_subject_name, num_var)};
    add_stocks_entry.append(add_stocks_button);
    table_row.append(add_stocks_entry);

    var del_stocks_entry = document.createElement('td');
    del_stocks_entry.setAttribute("data-th","Delete stocks");
    var del_stocks_button = document.createElement('button');
    del_stocks_button.className = "button1";
    del_stocks_button.innerHTML = "Delete";
    del_stocks_button.onclick = function(){dec(book_id, formatted_subject_name, num_var)};
    del_stocks_entry.append(del_stocks_button);
    table_row.append(del_stocks_entry);

    table.append(table_row);
  }
  wrapper.append(table);
  var breaker2 = document.createElement('br');
  wrapper.append(breaker2);
}

function do_it(){
  var sem = 6;
  var subjects = httpGet("subjects?sem="+sem);
  for(j=0;j<subjects['data'].length;j++){
    var data = httpGet("books?sem="+sem+"&subject_name="+subjects['data'][j]);
    generate_tables(subjects['data'][j], data['data']);
  }
}

do_it();
