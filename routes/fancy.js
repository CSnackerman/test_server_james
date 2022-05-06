import fs from 'fs'

const fancy = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    fs.readFile ('index.html', (err, data) => {
        res.write(data)
        res.end()
    })
}

export default fancy