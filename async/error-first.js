const interview = (callback) => {
    setTimeout(() => {
        if(Math.random() < 0.2) {
            callback(new Error('failed'))
        } else {
            callback(null, 'success')
        }
    }, 500)
}

/**
 * try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
 */
interview((err, res) => {
    if(err) {
        console.log('cry')
        return
    }
    console.log('smile')
})