// API 9d2c4463caef4233bf44d61aa88066f8
$.getJSON('https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=9d2c4463caef4233bf44d61aa88066f8', function(set){
  var viewModel = {
      Title :  ko.obervable(set.article.title),
      Aurthor:  ko.obervable(set.article.author),
      PublishedAt: ko.obervable(set.article.publishedAt),
      url:  ko.obervable(set.arrticle.url),
    };
ß});
$(function () {
   ko.applyBindings(viewModel);
   viewModel.loadArticles();
});
