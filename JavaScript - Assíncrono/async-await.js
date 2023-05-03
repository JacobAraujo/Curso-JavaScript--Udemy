function waitTime(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== 'string'){
                reject('Bad value');
                return;
            }

            resolve(message);
            console.log(message)
        }, time);
    })
}

async function sequencial() {
    try{
        console.log(await waitTime('Hello World', 1000));
        console.log(await waitTime('I like the World', 1000));
        console.log(await waitTime('Bye World', 400));
        console.log('terminou')
    } catch (e) {
        console.log(e);
    }
}

async function mesmoTempo() {
    try{
        const promises = [
            waitTime('Hello World', 3000),
            waitTime('I like the World', 1000),
            waitTime('Bye World', 2000)
        ];

        // Executa todas as Promises simultaneamente e aguarda a conclusão de todas
        const results = await Promise.all(promises);

        console.log(results);
        console.log('terminou');
    } catch (e) {
        console.log(e);
    }
}

mesmoTempo();