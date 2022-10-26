setTimeout(() => {
    console.log('延时1秒后输出');
    setTimeout(() => {
        console.log('延时2秒后输出');
        setTimeout(() => {
            console.log('延时3秒后输出');
        }, 3000)
    }, 2000)
}, 1000)