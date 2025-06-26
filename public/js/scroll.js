const { useCallback } = require("react");

const contents = document.querySelectorAll('.content')

const options = {
    threshold:0.3
}
const classBack = (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.content.callList.add('active')
        }
        else{
            entry.content.callList.remove('active')
        }
        
    });
    
}

const observer = new IntersectionObserver(callback, options);

contents.forEach((content)=>{
    observer.observe(content)
})