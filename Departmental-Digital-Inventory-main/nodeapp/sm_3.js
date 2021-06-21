var config = require('./api_config.json')
base_url = `${config['API_URL']}:${config['PORT']}/`;

function httpGet(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function httpPost(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function httpPut(route)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", base_url+route, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function inc(formatted_subject_name, i){
    var stock =  parseInt(document.getElementById(formatted_subject_name+"_stock_"+i).innerHTML);
    var final_ans = (stock+1).toString();
    document.getElementById(formatted_subject_name+"_stock_"+i).innerHTML = final_ans;
   }


function dec(formatted_subject_name, i){
  var stock =  parseInt(document.getElementById(formatted_subject_name+"_stock_"+i).innerHTML);
  if(stock<=0){
    var final_ans = 0;
  }
  else{
    var final_ans = (stock-1);
  }
  document.getElementById(formatted_subject_name+"_stock_"+i).innerHTML = final_ans.toString();
}


function generate_headers(headers){
  var header_objs = [];
  for(header in headers){
    var header_obj = document.createElement('th');
    header_obj.innerHTML = header;
    header_objs.push(header_obj);
  }
  return header_objs;
}


function format_subject_name(subject_name){
  var lower_case = subject_name.toLowerCase();
  var join_with_underscore = lower_case.replace(" ", "_");
  return join_with_underscore;
}


function generate_tables(subject_name, data){
  var table = document.createElement('table');
  var headers = ['Book Title', 'Author', 'Stocks left', 'Add stocks', 'Delete stocks'];
  var header_objs = generate_headers(headers);
  var header_row = document.createElement('tr');
  for(header_obj in header_objs){
    header_row.append(header_obj);
  }
  table.append(header_row);
  for(i=0;i<data.length;i++){
    var table_row = document.createElement('tr');
    var formatted_subject_name = format_subject_name(subject_name);
    table_row.id = formatted_subject_name + "_" + i.toString();

    var title_entry = document.createElement('td');
    title_entry.innerHTML = data[i]['title'];
    table_row.append(title_entry);

    var author_entry = document.createElement('td');
    author_entry.innerHTML = data[i]['author'];
    table_row.append(author_entry);

    var stocks_left_entry = document.createElement('td');
    stocks_left_entry.id = formatted_subject_name + "_stock_" + i.toString();
    stocks_left_entry.innerHTML = data[i]['stocks_left'];
    table_row.append(stocks_left_entry);

    var add_stocks_entry = document.createElement('td');
    var add_stocks_button = document.createElement('button');
    add_stocks_button.className = "button";
    add_stocks_button.innerHTML = "Add";
    add_stocks_button.onclick = inc(formatted_subject_name, i);
    add_stocks_entry.append(add_stocks_button);
    table_row.append(add_stocks_entry);

    var del_stocks_entry = document.createElement('td');
    var del_stocks_button = document.createElement('button');
    del_stocks_button.className = "button1";
    del_stocks_button.innerHTML = "Delete";
    del_stocks_button.onclick = dec(formatted_subject_name, i);
    del_stocks_entry.append(del_stocks_button);
    table_row.append(del_stocks_entry);

    table.append(table_row);
  }
}
