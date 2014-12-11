var git = 'fabcd2268c8bca0532d0c8e7155af3f943edc85a',
  path = window.location.pathname;

$('aside.sidebar').append('<span><a class="lance" href="http://blog.ycnets.com">@LanceHe</a></span></span><span><a href="https://github.com/mvcss/mvcss.github.com/commit/'+git+'">'+git.substr(0, 7)+'</a></span><span><a href="http://mvcss.io'+path+'">原文</a></span>');
