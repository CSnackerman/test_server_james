const yomamashouse = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to my mommas house')
}

export default yomamashouse