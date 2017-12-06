function get_browser_info()
{
    var ua = navigator.userAgent,
    tem,
    M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    
    if(/trident/i.test(M[1]))
    {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || []; 
        
        return {
            name:'IE ',version:(tem[1]||'')
        };
    }   
    
    if(M[1]==='Chrome')
    {
        tem = ua.match(/\bOPR\/(\d+)/)
        
        if(tem!=null)   {
            return {
                name:'Opera', version:tem[1]
            };
        }
    }   
    
    M = M[2]? [M[1], 
    M[2]]: [
        navigator.appName, 
        navigator.appVersion, 
        '-?'
    ];
    
    if((tem = ua.match(/version\/(\d+)/i))!=null) 
    {
        M.splice(1,1,tem[1]);
    }
    
    return {
      name: M[0],
      version: M[1]
    };
 }

var browser=get_browser_info();

/** Progress Bar */
window.addEventListener('load', function(e){
    e.preventDefault();
    move();
});

document.getElementById('browser-info').textContent = 'Name: ' +  browser.name + ' Version: ' + browser.version;

function move() 
{
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 100);
    
  function frame() {
    if (width >= 100) {
      clearInterval(id);
        document.styleSheets[0].addRule('main *', 'opacity: 0');
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
