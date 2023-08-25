const useUrlShortner = async (url)=>{
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`).then(data=>{
        return data.json();
    }).then(data=>{
        console.log(data);
    });
    // https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
   

}

export default useUrlShortner;