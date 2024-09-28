document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("current-date"),t=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});e.textContent=t;let r="E2PSJrDTKfUu2Ph9zGMFSC1OAAAA4iRd",a=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=${r}`,n=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${r}`,o=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${r}`;document.getElementById("articles-link"),document.getElementById("most-popular-link"),document.getElementById("top-stories-link"),document.getElementById("news-content"),function(e=1){let t=`${a}&page=${e}`,r=document.getElementById("loading");r.style.display="block",fetch(t).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{let t=e.response.docs,a=document.getElementById("technology-news");a.innerHTML="",t.forEach(e=>{let t=e.multimedia&&e.multimedia.length>0?"https://www.nytimes.com/"+e.multimedia[0].url:"https://via.placeholder.com/800x400",r=document.createElement("article");r.innerHTML=`
                    <img src="${t}" alt="News Image">
                    <h2>${e.headline.main}</h2>
                    <p>${e.snippet}</p>
                    <a href="${e.web_url}" class="read-more">Read More....</a>
                `,a.appendChild(r)}),r.style.display="none"}).catch(e=>{console.error("Error fetching articles:",e),r.style.display="none",alert("Unable to fetch articles at the moment. Please try again later.")})}(1),fetch(n).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{let t=e.results,r=document.getElementById("most-popular-news");r.innerHTML="",t.forEach(e=>{let t=e.media&&e.media.length>0?e.media[0]["media-metadata"][2].url:"https://via.placeholder.com/800x400",a=document.createElement("article");a.innerHTML=`
                    <img src="${t}" alt="News Image">
                    <h2>${e.title}</h2>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" class="read-more">Read More....</a>
                `,r.appendChild(a)})}).catch(e=>{console.error("Error fetching most popular articles:",e),alert("Unable to fetch most popular articles at the moment. Please try again later.")}),fetch(o).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.json()}).then(e=>{let t=e.results,r=document.getElementById("top-stories-news");r.innerHTML="",t.forEach(e=>{let t=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"https://via.placeholder.com/800x400",a=document.createElement("article");a.innerHTML=`
                    <img src="${t}" alt="News Image">
                    <h2>${e.title}</h2>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" class="read-more">Read More....</a>
                `,r.appendChild(a)})}).catch(e=>{console.error("Error fetching top stories:",e),alert("Unable to fetch top stories at the moment. Please try again later.")})});
//# sourceMappingURL=index.c6338ac4.js.map
