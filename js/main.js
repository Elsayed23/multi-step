let next = document.querySelector(".next");
let back = document.querySelector(".back");
let steps = document.querySelectorAll(".steps ul .step")
let s1 = document.querySelector(".steps ul .s1")
let s2 = document.querySelector(".steps ul .s2")
let s3 = document.querySelector(".steps ul .s3")
let s4 = document.querySelector(".steps ul .s4")
let inp = document.querySelectorAll(".content .con form .inp input");
let con1 = document.querySelector(".parent .content .step1")
let con2 = document.querySelector(".parent .content .step2")
let con3 = document.querySelector(".parent .content .step3")
let con4 = document.querySelector(".parent .content .step4")


steps.forEach((ele) => {
    ele.addEventListener("click", () => {
        steps.forEach((e) => {
            e.classList.remove("active")
        })
        ele.classList.add("active")
    })
})







next.addEventListener("click", () => {
    if (s1.classList.contains("active")) {
        s1.classList.remove("active");
        s2.classList.add("active");
        back.style.cursor = "pointer";
    }
    else if (s2.classList.contains("active")) {
        s2.classList.remove("active")
        s3.classList.add("active")
    }
    else if (s3.classList.contains("active")) {
        s3.classList.remove("active")
        s4.classList.add("active")
    }
});
        back.style.cursor = "default"
        back.style.opacity = "0";

back.addEventListener("click", () => {
    if (s1.classList.contains("active") === false) {
        steps.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.remove("active")
                e.previousElementSibling.classList.add("active");
            }
        })
        if (s1.classList.contains("active")) {
            back.disabled = true;
             back.style.cursor = "default"
             back.style.opacity = "0";
        }
    }
})

setInterval(() => {
    if (s1.classList.contains("active")) {
        con1.style.display = "block"
        con2.style.display = "none"
        con3.style.display = "none"
        con4.style.display = "none"
        next.value = "next step";
    }
    if (s2.classList.contains("active")) {
        back.disabled = false;
        back.style.opacity = "1";
        back.style.cursor = "pointer"
        con1.style.display = "none"
        con2.style.display = "block"
        con3.style.display = "none"
        con4.style.display = "none"
        next.value = "next step";
    }
    if (s3.classList.contains("active")) {
        con1.style.display = "none"
        con2.style.display = "none"
        con3.style.display = "block"
        con4.style.display = "none"
        next.value = "next step";
    }
    if (s4.classList.contains("active")) {
        con1.style.display = "none"
        con2.style.display = "none"
        con3.style.display = "none"
        con4.style.display = "block"
        next.value = "Confirm";
    }
    next.addEventListener("click", () => {
        if (next.value === "Confirm") {
            let mas = document.querySelector(".content .massage")
            s4.classList.remove("active")
            con4.style.display = "none"
            mas.style.cssText = "display: flex;flex-direction: column; justify-content: center; align-items: center; text-align: center; line-height: 1.6; font-size: 17px;"
            document.querySelector(".buttons").style.display = "none";
            document.querySelector(".parent .steps").style.display = "none"
        }
    })
}, .01)




inp.forEach((e) => {
    e.addEventListener("focus", () => {
        if (e.value === "") {
            e.previousElementSibling.classList.add("foc");
            e.previousElementSibling.previousElementSibling.style.display = "none"
        }
    })
    e.addEventListener("blur", () => {
        if (e.value === "") {
            e.previousElementSibling.classList.remove("foc");
            e.previousElementSibling.previousElementSibling.style.display = "block"
        }
    })
})


let sel = document.querySelectorAll(".step2 .columns .col");


sel.forEach((e) => {
    e.addEventListener("click", () => {
        sel.forEach((ele) => {
            ele.classList.remove("select")
        })
        e.classList.toggle("select");
    })
})

let P_toggle = document.querySelector(".step2 .P-toggle .dat>div");
let toggle = document.querySelector(".step2 .P-toggle .dat>div span");
let ac_ti = document.querySelectorAll(".step2 .P-toggle .dat h4");
let yearly = document.querySelectorAll(".parent .content .step2 .columns .col h5");


P_toggle.addEventListener("click", () => {
    ac_ti.forEach((e) => {
        e.classList.toggle("active");
    })
    toggle.classList.toggle("tog");
    if (ac_ti[1].classList.contains("active")) {
        dates[0].innerHTML = "$90/yr";
        yearly.forEach((e) => {
            e.style.display = "block"
        })
    } else {
        dates[0].innerHTML = "$9/mo"
        yearly.forEach((e) => {
            e.style.display = "none"
        })
    }
    if (ac_ti[1].classList.contains("active")) {
        dates[1].innerHTML = "$120/yr"
    } else {
        dates[1].innerHTML = "$12/mo"
    }
    if (ac_ti[1].classList.contains("active")) {
        dates[2].innerHTML = "$150/yr"
    } else {
        dates[2].innerHTML = "$15/mo"
    }
})

let dates = document.querySelectorAll(".parent .content .step2 .columns .col span");


let pick = document.querySelectorAll(".step3 .picks .pick")
let check = document.querySelectorAll(".step3 .picks .pick .info input")

pick.forEach((ele) => {
    ele.addEventListener("click", () => {
    if(ele.childNodes[1].childNodes[1].checked === true) {
        ele.style.cssText = "border-color: var(--Marine-blue);background-color: var(--Magnolia);"
    } else {
                ele.style.cssText = "border: solid 1.5px var(--Cool-gray);background-color: transparent;"
    }
    })
})


let par_p = document.querySelectorAll(".step3 .picks .pick");

P_toggle.addEventListener("click", () => {
    let P_yearly1 = document.querySelectorAll(`.step3 .picks .p1>span span`);
    if (ac_ti[1].classList.contains("active")) {
        P_yearly1[0].innerHTML = `${P_yearly1[0].innerHTML + "0"}`
        P_yearly1[1].innerHTML = `/yr`
    } else {
        P_yearly1[0].innerHTML = `1`
        P_yearly1[1].innerHTML = `/mo`
    }
    let P_yearly2 = document.querySelectorAll(`.step3 .picks .p2>span span`);
    if (ac_ti[1].classList.contains("active")) {
        P_yearly2[0].innerHTML = `${P_yearly2[0].innerHTML + "0"}`
        P_yearly2[1].innerHTML = `/yr`
    } else {
        P_yearly2[0].innerHTML = `2`
        P_yearly2[1].innerHTML = `/mo`
    }
    let P_yearly3 = document.querySelectorAll(`.step3 .picks .p3>span span`);
    if (ac_ti[1].classList.contains("active")) {
        P_yearly3[0].innerHTML = `${P_yearly3[0].innerHTML + "0"}`
        P_yearly3[1].innerHTML = `/yr`
    } else {
        P_yearly3[0].innerHTML = `2`
        P_yearly3[1].innerHTML = `/mo`
    }

    let fi_yearly = document.querySelectorAll(".step4 .finishing .top .ar-yearly span span");
    if (ac_ti[1].classList.contains("active")) {
        fi_yearly[0].innerHTML = `${fi_yearly[0].innerHTML + "0"}`
        fi_yearly[1].innerHTML = `/yr`
    } else {
        fi_yearly[0].innerHTML = `9`
        fi_yearly[1].innerHTML = `/mo`
    }
    let ser = document.querySelectorAll(".step4 .finishing .top .btm .ser span span")
    if (ac_ti[1].classList.contains("active")) {
        ser[0].innerHTML = `${ser[0].innerHTML + "0"}`
        ser[1].innerHTML = `/yr`
    } else {
        ser[0].innerHTML = `1`
        ser[1].innerHTML = `/mo`
    }
    let sto = document.querySelectorAll(".step4 .finishing .top .btm .storage span span")
    if (ac_ti[1].classList.contains("active")) {
        sto[0].innerHTML = `${sto[0].innerHTML + "0"}`
        sto[1].innerHTML = `/yr`
    } else {
        sto[0].innerHTML = `2`
        sto[1].innerHTML = `/mo`
    }
    let arcade = document.querySelector(".step4 .finishing .top .ar-yearly .left h3 span");
    if (ac_ti[1].classList.contains("active")) {
        arcade.innerHTML = `Yearly`
    } else {
        arcade.innerHTML = `Monthly`
    }
    let fi_bottom = document.querySelector(".step4 .finishing .bottom h4 span");
    if (ac_ti[1].classList.contains("active")) {
        fi_bottom.innerHTML = `year`
    } else {
        fi_bottom.innerHTML = `month`
    }
    let fi_bottom_ym = document.querySelectorAll(".step4 .finishing .bottom > span span");
    if (ac_ti[1].classList.contains("active")) {
        fi_bottom_ym[0].innerHTML = `${fi_bottom_ym[0].innerHTML + "0"}`
        fi_bottom_ym[1].innerHTML = `/yr`
    } else {
        fi_bottom_ym[0].innerHTML = `12`
        fi_bottom_ym[1].innerHTML = `/mo`
    }
})

let change = document.querySelector(".step4 .finishing .top .ar-yearly .left h4");

change.addEventListener("click", () => {
    con1.style.display = "none"
    con2.style.display = "block"
    con3.style.display = "none"
    con4.style.display = "none"
    s2.classList.add("active");
    s4.classList.remove("active");
})

