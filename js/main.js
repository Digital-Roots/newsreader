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
          $("#Politi").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div>" + description + "</div>");
        }else{
          $("#Politi").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div> No summary given</div>");
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
          $("#Hill").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div>" + description + "</div>");
        }else{
          $("#Hill").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div> No summary given</div>");
        }
      });
    }, "jsonp");
    const yqlWp =  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20(url%3D'http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fpolitics')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    $.getJSON(yqlWp, function(Wp) {
      const res = Wp.query.results.item;
      res.forEach(function(x, y){
        let link = res[y].link;
        let title = res[y].title;
        let description = res[y].description;
        if(description !== null){
          $("#Wp").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div>" + description + "</div>");
        }else{
          $("#Wp").append("<h3><a href=" + "'" + link + "'" + ">" + title + "</a></h3><div> No summary given</div>");
        }
      });
    }, "jsonp");
    console.log("got news");
  };
  window.onload = getNews;
  setInterval(getNews, 960000);
});
