let name = 'Adam';

console.log(name + "'s apples");
console.log('Hello World!');

for (let i = 0; i < 20; i = i + 2) {
    console.log(i);
  }
  
  let printNumbers = (n) => {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }

  let greet = (name) => {
  return "Hello, " + name;
}
 


$('h1').text('We are having a 10 minutes break until 17:05');
$('p').html('StayAtHome Coding Camp, Likes:<strong>13</strong>');


/*
$('strong').css('background', 'lime');
$('strong').css('padding', '10px');


$('h2').toggleClass('blue');


$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li>My name is ' + name + '</li>');

$('#special-list-item').remove();

let addButtonHandler = () => {
    if ($('li').length < 5)
    $('ul').append('<li>My name is ' + name + '</li>');
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click() => {
    $('li:las-child').remove();
};

// This is the fourth part

let age = 33

console. log('Starting the if')

if (age < 18) {
 console.log('Not old enough to drink');
} else {
 console.log('Old enough to drink');
}

console.log('This is after if');

let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

$('#box-container').append('<div clas="box"></div>')
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div clas="box"></div>')
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div clas="box"></div>')
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div clas="box"></div>')
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div clas="box"></div>')
$('.box:last-child').css('background', colors[4]);

colors.forEach((color) => {
    $('#box-container').append('<div clas="box"></div>')
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i = i + 1) {
    console.log(i);
}

/* 
This is a JavaScript comment 
*/
