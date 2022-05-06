const root = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('yo World')
}

export default root