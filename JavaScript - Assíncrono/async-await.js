function waitTime(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== 'string'){
                reject('Bad value');
                return;
            }

            resolve(message);
        }, time);
    })
}

async function main() {
    try{
        const message = await waitTime('Hello World', 1000);
        console.log(message);
        const message2 = await waitTime('I like the World', 1000);
        console.log(message2);
        const message3 = await waitTime('Bye World', 1000);
        console.log(message3);
    } catch (e) {
        console.log(e);
    }
}

main();