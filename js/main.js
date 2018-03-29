$(document).ready(function() {
  function getNews(){
    const yqlPoliti ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Fwww.politico.com%2Frss%2Fpoliticopicks.xml')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlPoliti, function(politi) {
      const res = politi.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#politi").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#politi").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    const yqlHill = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Fthehill.com%2Ftaxonomy%2Fterm%2F1077%2Ffeed')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlHill, function(hill) {
      const res = hill.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#hill").append("<h4><a rel=\" nofollow\"href=\" " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#hill").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    const yqlWp =  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fpolitics')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlWp, function(wp) {
      const res = wp.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#wp").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#wp").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    const yplNyt = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%20%3D%20'http%3A%2F%2Fwww.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2Fpolitics.xml')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yplNyt, function(nyt) {
      const res = nyt.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#nyt").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#nyt").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    console.log("got news");
  };
  window.onload = getNews;
  setInterval(getNews, 420000);
  function openStream(stream){
    const bloomberg = "https://www.youtube.com/embed/Ga3maNZ0x0w";
    const skyNews = "https://www.youtube.com/embed/XOacA3RYrXk";
    const alJazeera = "https://www.youtube.com/embed/nVHt1_SWTZg";
    document.getElementById('videoStream').src = stream;
  };
  window.onload = openStream(bloomberg);
});
