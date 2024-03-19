$('#second1').html(now.seconds().toString().length === 1 ? '0' + now.seconds() : now.seconds()).append(now.format(' A'));
