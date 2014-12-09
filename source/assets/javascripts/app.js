var git = 'e772813ee93be17d6b88f4d5ef9ae988db7b0a32',
  path = window.location.pathname;

$('aside.sidebar').append('<span><a class="lance" href="http://blog.ycnets.com">@LanceHe</a></span></span><span><a href="https://github.com/mvcss/mvcss.github.com/commit/'+git+'">'+git.substr(0, 7)+'</a></span><span><a href="http://mvcss.github.io'+path+'">原文</a></span>');
