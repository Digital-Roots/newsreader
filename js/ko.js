// API 9d2c4463caef4233bf44d61aa88066f8

$.getJSON("https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=9d2c4463caef4233bf44d61aa88066f8", function(data){
  var set = JSON.parse(data);
  var viewModel = {
    Title : ko.observableArray([set.article.title]),
    Aurthor: ko.observableArray([set.article.author]),
    PublishedAt: ko.observableArray([set.article.publishedAt]),
    url: ko.obervableArray([set.arrticle.url]),
  };
};)
