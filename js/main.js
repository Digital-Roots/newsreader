const tvCBSN = "https://www.cbsnews.com/embed/video/?v=0313188e2482b5431cb2d3d7dc4a8a8bd5ab86d9#zVVNb%2BM2EP0rAi%2B9WNaHv2Qfk0277QaBN07aAqvCoMSxxFgiVZKK7QT73zsjydvsYoHmEGB7cCJyhm%2FevBkOn9mjFKDZ6pmJ1nAntWIrPxqxujnewu5XwVZsWR827ulv9%2BeHk8y2UDxt7tfrcvquEjf86uG3mI2YK9s6U1xW6F4619hVGqRBnlkFBxuP8UNah%2Bj5ONd1GpRtlgYyDUwaxGG0SINwhl%2F4my1mcbhYRP50SX8imPlZniz9LOZxPOeLZLqANPgSLQ3m0%2FA4mYdpIHJYiiiez5fT3TISSc7nURxnCURLWC6A92z8hrcW%2FGgZh8coTMLxQ1MQfd3IXPEakP7lxebmvLXmBpTbVG2BBjzvUzq%2BkIV0vPLzkisFFTpDI60WeBqFs8AticgiRouiRoTeYHKSuaws%2FcukQ7npSBiGI9bI1yp9aogloYxYa74WXHA5LrQuKuh1rqQCjiKjdxrAIzJJg40U06O8%2B3i3v7yLNtft3Dzcbz6mQc2tAzOuJ22CyDttao68GW%2BaSuZdY6TB0a8bKO5vr9nnEVHYPnIjuXLbptQK3iatbzD%2FR0k6nlXg3jjLAfQHp3mQO%2FkGiXUwPzQVzMW2mc2NzEBcauW62%2FeMUw4OpDRbOdPCCyfDVjteWdySdh7WUu0MV3kpLXxluDqiMF%2FtTJO1AYIddrvITWPA4v1WbVWN%2BtHqpKOw7A%2F4qaq8C%2FBuZVE674Ln%2B%2B9IdTgcxsPYPGv1iBOPRkk3hXrgtu0KEy0Wk3A29aNJEibRlA0RBewpHnd56aXfi5uykcc9GnRed8DTqlsNQcfe75iWV2sDL5ysx5XwDh0q7RIEkfOIq2edAV57O%2BCuNVIVnjY4JRWvyNcjZM9Ao41D2%2FhMtDG61iWIYep61whH3chbp9cVP7EV9iDqnu%2FxFFVR2itFVRTnMgqsQA53ffcJsHsc24zq8w4ecYdas%2BHF2WFnsCG2QmtDekoH7yXV%2F1Nv6Pb%2F6g0byPun8IWptwxQWOZGK0v5HyA7vxf0XH5iUcaTOf78xSwRfhRB7NPT5IdhlOwg4WGYhRSoO3LTvTrfUMj2GwxFaJPJBDWoZC2xjadowe4UqI2jm9C9zkO3bInc9l8JaNljnz0YyVXrwvCmlPkHOFmK%2B6Czn1vVZzui1SXe%2F0KbE8moRIuFpU9si6bFi7g2eidzCSo%2F73J12sgnGtQFKAGkEyr%2Bi9Ft03m0ihAoXeCVbGuqY0Mo1QtuxJbeUUVVQ6ugNuh65P7VFyTnSiucCdV%2FHhm64rV%2Bg4zdWtr3YPSXQVCDkHytkT7qN7RGBRzpf%2F4H";
const tvSkyNews = "https://www.youtube.com/embed/XOacA3RYrXk?rel=0&autoplay=1";
const tvAlJazeera = "https://players.brightcove.net/665003303001/SkrZHHcl_default/index.html?videoId=5467349513001";
const openSkyNews = "https://www.youtube.com/embed/XOacA3RYrXk?rel=0&autoplay=0";

function openStream(stream){
  document.getElementById('videoStream').src = stream;
};

window.onload = openStream(openSkyNews);

const input = document.getElementById('searchInput'),
rssInput = document.getElementById('rss-input'),
rssTitle = document.getElementById('rss-title'),
rssSubmit = document.getElementById('rss-submit');
let rssLoop, rssName, rssURL, rssAnchor, yql;
const yql = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%20from%20rss%20where%20url%20%3D%20'" + rssURL + "'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
const rssArrayUrl = [], rssArrayTitle = [];
const rss2D = localStorage.getItem('savedFeed') ? JSON.parse(localStorage.getItem('savedFeed')) : [];


function two1DTo2D (urlArray, titleArray, newArray){
  newArray.push([titleArray, urlArray]);
};
function splice2dArray(array, item){
  for(let i = 0; i < array.length; i++){
    if(array[i][0] == item){
      let index = i;
      array.splice(index, 1);
    }
  }
};
function indexOf2dArray(array, item){
  for(let i = 0; i < array.length; i++){
    if(array[i][0] == item[0] && array[i][1] == item[1]){
      let index = i;
      return index;
    }
  }
  let index = -1;
  return index;
};
function localLoad(localSave){

  for(let i = 0; i < localSave.length; i++){

    rssName = localSave[i][0].replace('-', ' ');
    $('#feed-nav').append("<div class='button-row "+ localSave[i][0] +"'><button>"+ rssName +"</button><button class='remove' value='"+localSave[i][0]+"'>remove</button></div>");
    rssLoop =  $.getJSON(localSave[i][1], function(data) {
      console.log(data);
      let res = data.query.results;
      if(res){
        res = res.item;
        res.forEach(function(x, y){

          let link = res[y].link;
          let title = res[y].title;
          let description = res[y].description;
          let date = res[y].pubDate ? "<span class='date'>"+ res[y].pubDate  +" </span></div> " : '';
          $('section').append("<div class='lisItem "+ localSave[i][0] +"'><span class='site'>" + rssName + " </span><a class='feed' href='" + link + "''><span class='title'>" + title + " </span></a>" + date);
        });
      }

    });

  };
};
$(document).ready(function() {
  rssSubmit.addEventListener('click', function(){
    rssName = rssTitle.value;
    if(rssName !== ''){
      rssAnchor = rssName.replace(" ", "-");
    }
    rssURL = rssInput.value.replace(/:/g, "%3A").replace(/\//g, "%2F");

    if(indexOf2dArray(rss2D, [rssAnchor, yql]) === false){
      two1DTo2D(yql, rssAnchor, rss2D);
      localStorage.setItem('savedFeed', JSON.stringify(rss2D));
      $('#feed-nav').append("<div class='button-row "+ rssAnchor +"'><button>"+ rssName +"</button><button class='remove' value='"+rssAnchor+"'>remove</button></div>");
      rssLoop =  $.getJSON(yql, function(data) {
        console.log(data);
        let res = data.query.results;
        if(res){
          res = res.item;
          res.forEach(function(x, y){

            let link = res[y].link;
            let title = res[y].title;
            let description = res[y].description;
            let date = res[y].pubDate ? "<span class='date'>"+ res[y].pubDate  +" </span></div> " : '';
            $('section').append("<div class='lisItem "+ rssAnchor +"'><span class='site'>" + rssName + " </span><a class='feed' href='" + link + "''><span class='title'>" + title + " </span></a>" + date);
          });
        }
      });
    }
  });
});

window.onload = localLoad(rss2D);

$(document).on('click', '.remove', function() {
  let val = this.value;
  $('div').remove('.'+ val);
  splice2dArray(rss2D, val);
  localStorage.setItem('savedFeed', JSON.stringify(rss2D));
});

input.addEventListener('keyup', function filterSearch(){
  let i, title,
    filter = input.value.toUpperCase();
  const section = document.getElementByTagName('section'),
    lisItem = section.getElementsByClassName('lisItem');
  for (i = 0; i < listItem.length; i++){
    title = document.getElementsByClassName('title')[0];
    if(title.innerHTML.toUpperCase().indexOf(filter) > -1){
      lisItem[i].style.display = '';
    }else{
      lisItem[i].style.display = 'none';
    }
  }
});
