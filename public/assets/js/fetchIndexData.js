

const categorySection = document.querySelector('.nav-items ul');

const fetchData = ()=>{
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
        if(xml.readyState === 4 && xml.status === 200){
            response = xml.response;
            // console.log(response);
            response.forEach(item =>{
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `/category/${item.Tables_in_our_blog}`;
                a.innerText = item.Tables_in_our_blog;
                li.appendChild(a);
                categorySection.appendChild(li)
                console.log(li)
            })
        }
    }
    xml.open('get', '/numberOfTb');
    xml.responseType = 'json';
    xml.setRequestHeader ('content-type', 'application/json');
    xml.send();
}


document.body.addEventListener('load', fetchData());