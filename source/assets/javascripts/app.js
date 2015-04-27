var git = '5789f150dfc78f657a793d073a4f813e0825a7dc',
  path = window.location.pathname;

$('aside.sidebar').append('<span><a class="lance" href="http://blog.ycnets.com">@LanceHe</a></span></span><span><a href="https://github.com/mvcss/mvcss.github.com/commit/'+git+'">'+git.substr(0, 7)+'</a></span><span><a href="http://mvcss.io'+path+'">原文</a></span>');
