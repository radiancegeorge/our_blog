const cols = document.querySelectorAll('.highlights .col');
HTMLCollection.prototype.forEach = Array.prototype.forEach;

let time = 0.5
cols.forEach(col => {
    const colChildren = col.children; 

    colChildren.forEach( child =>{
        gsap.from(child, {
        y: 400,
        duration: time,
        opacity: 0
    })
    })

    colChildren.forEach(child =>{
        child.addEventListener('mouseenter',(e)=>{
                console.log('over');
                gsap.to(e.target,{
                    y: -5,
                    rotateZ: 2,
                    duration: 0.5,
                })
            })
    })
    
    colChildren.forEach( child =>{
        child.addEventListener('mouseleave',(e)=>{
        console.log('over');
        gsap.to(e.target,{
            y: 5,
            rotateZ: 0,
            duration: 0.2,
        })
    })
    })
    
    return time ++
});

