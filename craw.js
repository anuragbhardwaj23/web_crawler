function getUrls(htmlBody,baseUrl){
    const urls=[]
    return urls;
}


function normalizeURL(urlSting){
    const urlobj= new URL(urlSting);
    const hostpath= `${urlobj.hostname}${urlobj.pathname}`
    if(hostpath.length>0&&hostpath.slice(-1)==='/'){
        return hostpath.slice(0,-1)
    }
    return hostpath
}
module.exports={
    getUrls,
    normalizeURL
}