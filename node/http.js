const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/about'){
        res.end('Here is our short history');
        return;
    }
    if(req.url === '/home'){
    for(let i = 0; i < 1000; i++){
            console.log(`Processing... ${i}`);
    } 
    res.end('Home page loaded successfully');
    return;
    }

    if(req.url === '/contact'){
        res.end('Contact us at: contact@example.com');
        return;
    }
    if(req.url === '/services'){
        res.end('Our services include web development, app development, and SEO.');
        return;
    }
    if(req.url === '/products'){
        res.end('We offer a variety of products including software solutions and hardware devices.');
        return;
    }
    if(req.url === '/careers'){
        res.end('Join our team! Check out our career opportunities on our website.');
        return;
    }
    if(req.url === '/blog'){
        res.end('Read our latest articles and updates on our blog.');
        return;
    }
    res.end(`<h1> Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/home"> Back to Home Page </a>
    `);
    return;
});

server.listen(5000, ()=>{
    console.log('Server is listening on the port 5000');
});