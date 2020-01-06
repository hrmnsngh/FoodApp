// Code goes here

var login = function () {
  if (document.getElementById('user').value == 'vishal' && document.getElementById('password').value == 'kumar') {
    alert('Login Successfully!!')
    window.location.replace("ind.html");
    if (username1 == '' || username1 == null) {
      alert('Login failed!!')
    }
  };
};

var bk = function () {
  window.location.replace('order.html')
};

var lunch = function () {
  window.location.replace('order.html')
};

var dinner = function () {
  window.location.replace('order.html')
};

var order = function () {
  console.log(document.getElementById('tea').value);
  let rateList = {
    tea: 10,
    puri: 15,
    bun: 10,
    idly: 15
  };
  var data = {};
  for (item in rateList) {
    if (document.getElementById(item).value > 0) {
      data[item] = { count: document.getElementById(item).value, rate: 10 };
    }
  }
  console.log(`Data : ${JSON.stringify(data)}`);
  sessionStorage.setItem('order', JSON.stringify(data));
  window.location.replace('checkOut.html');
};

var getData = function () {
  console.log(sessionStorage.getItem('order'));
  var orderData = JSON.parse(sessionStorage.getItem('order'));
  console.log(`orderData.tea.count: ${orderData.tea.count} rate : ${orderData.tea.rate}`);

  var orderDetail = document.getElementById('orderDetail');

  for (item in orderData) {
    console.log(orderData.item);
    p = document.createElement("p");
    p.innerHTML = item;
    for(propty in item){
      console.log(`item.prop : ${orderData.item.propty}`);
    }
    
    
    /* console.log(`p ${item} , value: ${item.count}`);
    p.innerHTML = item + `: ` + orderData.item.count + ` * ` + orderData.item.rate + ` = ` + (orderData.item.count * orderData.item.rate);
    orderDetail.appendChild(p); */
  }
}
