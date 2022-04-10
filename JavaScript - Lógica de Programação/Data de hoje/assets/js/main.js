function myScope() {

    function setZeroLeft(num) {
        return num >= 10 ? `${num}` : `0${num}`
    }

    function getWeekDayText(day) {
        const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        return weekDays[day]
    }

    function getMonthText(numMonth) {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        return months[numMonth]
    }


    function getDateText(date) {
        let day = date.getDate()
        let month = getMonthText(date.getMonth() + 1)
        let year = date.getFullYear()

        let hour = setZeroLeft(date.getHours())
        let minute = setZeroLeft(date.getMinutes())
        let second = setZeroLeft(date.getSeconds()) 

        let weekDay = getWeekDayText(date.getDay())

        return `${weekDay}, ${day} de ${month} de ${year}<br>${hour}:${minute}:${second}`
    }

    function main(){
        const showData = document.querySelector('#data')
        let todayDate = new Date()
        showData.innerHTML = getDateText(todayDate)
    }

    main()
}

myScope()

/*
    Other way to do:

    const showData = document.querySelector('#data')
    let todayDate = new Date()
    showData.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full' timeStyle: 'short'})

*/ 