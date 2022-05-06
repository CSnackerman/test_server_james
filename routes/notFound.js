const notFound = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('What are you doing?')
}

export default notFound