var ai=document.querySelector('.first').querySelectorAll('li');
var items=document.querySelector('.second').querySelectorAll('img');

for(var i=0;i<ai.length;i++){
    ai[i].setAttribute('index',i);//自定义属性
    ai[i].onclick=function(){            
        for(var i=0;i<ai.length;i++){
        ai[i].className='';//清除未点击li格式
        items[i].style.display='none';//清除不相关div内容
        }
        this.className='lis';//显示点击的li格式变化
        var index=this.getAttribute('index');//获取点击的li下标
        items[index].style.display='block';//显示点击所对应的内容
    }
}