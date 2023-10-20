function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function sayHey(name) {
    console.log("Привет,", name)
}

function showAboutPC(CPU, RAM, GPU = "Нет") {
    console.log("У тебя стоит процессор:", CPU,
        "| Видеокарта: ", GPU,
        "| Оперативная память:", RAM);
};

function testCpuTemperature() {
    let goodTemp = 0;
    let badTemp = 0;
    let timerId = setInterval(() => {
        let temp = Math.random() * (100 - 35) + 35;
        if (temp < 80) {
            goodTemp++;
        } else {
            badTemp++;
        }
    }, 1000);
    setTimeout(() => {
        clearInterval(timerId);
        goodTemp > badTemp ? console.log("Всё хорошо") : console.log("Есть неполадки")
    }, 20000);
};

function undervolt() {
    let voltage = 1;
    let frequency = 1900;
    let gpuTemperature = 70;
    let variant = 1;
    while (variant > 0) {
        variant = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        voltage -= 0.025;
        gpuTemperature -= 2;
    }
    console.log("При андервольтинге: Вольтаж -", voltage, "| Температура:", gpuTemperature, "| Частота:", frequency);
};

function clear() {
    setTimeout(() => console.log("Мы почистили ваш ПК и заменили термопасту за 5 секунд, обращайтесь"), 5000);
};

sayHey("незнакомый человек")
showAboutPC("Intel Core i5-3450", "4GB x2", "GIGABYTE Raedon RX 570");
testCpuTemperature();
sleep(20000)
undervolt();
if (confirm("Хотите почистим компютер?")) {
    clear();
}