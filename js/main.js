$(document).ready(function() {
  function getNews(){
    const yqlPoliti ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Fwww.politico.com%2Frss%2Fpoliticopicks.xml')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlPoliti, function(Politi) {
      const res = Politi.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#Politi").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#Politi").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    const yqlHill = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Fthehill.com%2Ftaxonomy%2Fterm%2F1077%2Ffeed')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlHill, function(Hill) {
      const res = Hill.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#Hill").append("<h4><a rel=\" nofollow\"href=\" " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#Hill").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    var WpArray = 'politics'
    const yqlWp =  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2F" + WpArray + "')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlWp, function(Wp) {
      const res = Wp.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#Wp").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p>" + description + "</p>");
        }else{
          $("#Wp").append("<h4><a rel=\" nofollow\"href=\"  " + link + "  \">" + title + "</a></h4><p> No summary given</p>");
        }
      });
    }, "jsonp");
    console.log("got news");
  };
  window.onload = getNews;
  setInterval(getNews, 420000);
});
// <iframe width="560" height="315" src="https://www.youtube.com/embed/nVHt1_SWTZg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/XOacA3RYrXk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
