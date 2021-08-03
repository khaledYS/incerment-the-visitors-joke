const { RSA_NO_PADDING } = require('constants')
const fs = require('fs')
const http = require('http')

// creating the server
const server = http.createServer(
    (req, res)=>{
        fs.readFile('.'+req.url, (err, data)=>{
            console.log(err)
            if(err){
                res.write(('error : '+ 'waid ya5qeq '))
                res.end()
            }else{
                res.write(data)
                res.end()
                fs.readFile('./counter.txt', (err, counter)=>{
                    
                    fs.writeFile('./counter.txt',()=>{
                        console.log('err ')
                        return 'none'
                    })
                })
            }
        })
    }
)


server.listen(4444)