console.log("Hello world")

function rating(num) {

   
    // document.getElementById(`num_${num}`).className = "choise";

    let x = document.getElementById("btn");
    x.className = "after_choice";

    // instead propraty (disbled) of button
    let insteadToAbled = document.querySelector("#btn")
    insteadToAbled.disabled = false

    document.getElementById("btn").addEventListener("click", () => {
        console.log("hi")

        let fade = document.getElementById("card_1");
        fade.className = "fade";

        let result = `You selected ${num} out of 5`
        document.getElementById("result").innerHTML = `<span>${result}</span>`
        console.log(result)


        let appear = document.getElementById("card_2");
        appear.className = "appear";
    })



}


