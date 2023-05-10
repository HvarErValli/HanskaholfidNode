(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    (<any>$(".testimonial-carousel")).owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);

function apigetFromDatabase(bilnumer: string) {
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                localStorage.setItem('working_numer', bilnumer)
                window.location.href = 'info'
            }
        })
    })
    .catch(error => alert('Þetta bílnúmer er ekki á skrá hjá okkur'));
};

function apigetFromUsers(netfang: string, lykilord: string) {
    fetch("./users.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            if (user.netfang == netfang.toLowerCase()) {
                if (user.lykilord == lykilord) {
                    localStorage.setItem('current_notandi', netfang)
                    if (user.notendaTypa == "notandi"){
                        setTimeout(function(){window.location.href = "userPage"}, 500);
                    } else if (user.notendaTypa == "rekstraraðili"){
                        setTimeout(function(){window.location.href = "companyPage"}, 500);
                    }
                }
        }})
    })
    .catch(error => console.log(error));
};

function writeBilnumerToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.bilnumer.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeTypaToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.typa.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeAksturToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.akstur.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeArgerdToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.argerd.toUpperCase()};
        })
    })
    .catch(error => console.log(error));
};

function writeUserNafnToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.nafn};
        })
    })
    .catch(error => console.log(error));
};

function writeUserKennitalaToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.kennitala};
        })
    })
    .catch(error => console.log(error));
};

function writeUserSimanumerToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.simanumer};
        })
    })
    .catch(error => console.log(error));
};

function writeUserHeimilisfangToHTML(bilnumer: string, tag_id: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(tag_id).innerHTML += car.eigandi.heimilisfang};
        })
    })
    .catch(error => console.log(error));
};

function loader(){
    var current_bilnumerid = localStorage.getItem("working_numer");
    writeBilnumerToHTML(current_bilnumerid, "info_bilnumer")
    writeTypaToHTML(current_bilnumerid, "typa")
    writeAksturToHTML(current_bilnumerid, "akstur")
    writeArgerdToHTML(current_bilnumerid, "argerd")
    writeUserNafnToHTML(current_bilnumerid, "nafn")
    writeUserKennitalaToHTML(current_bilnumerid, "kennitala")
    writeUserSimanumerToHTML(current_bilnumerid, "simanumer")
    writeUserHeimilisfangToHTML(current_bilnumerid, "heimilisfang")
    baetaVidTjoni(current_bilnumerid)
    baetaVidSmurningu(current_bilnumerid)
};

function baetaVidTjoni(bilnumer: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                let fjoldiTjona = car.tjonasaga.fjoldiTjona
                tjonablocks(fjoldiTjona, bilnumer)}
        })
    })
    .catch(error => console.log(error));
}

function baetaVidSmurningu(bilnumer: string){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                let fjoldiSmurninga = car.smurbok.fjoldiSmurninga
                smurblocks(fjoldiSmurninga, bilnumer)}
        })
    })
    .catch(error => console.log(error));
}

function tjonablocks(fjoldiTjona: number, bilnumer: string){
    const tjonalisti = document.getElementById("tjonasaga");
    if (fjoldiTjona == 0){
        tjonalisti.insertAdjacentHTML("beforeend", `
        <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-item rounded pt-3">
                <div class="p-4">
                    <h1 style="text-align:center;";>Til hamingju! Þessi bíll er tjónlaus!</h1>
                </div>
            </div>
        </div>
        `); 
    }
    else{
        for (let i = 1; i <= fjoldiTjona; i++) {
            tjonalisti.insertAdjacentHTML("beforeend", `
                <div class="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="service-item rounded pt-3" style="display:flex;">
                        <div class="p-4">
                            <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5 id=dagsetningTjons${i}>Dagsetning tjóns: </h5>
                            <p id="tjonaflokkur${i}">Tjónaflokkur: </p>
                            <p id="lagad${i}">Lagað: </p>
                            <p id="lagadAf${i}">Lagað af: </p>
                        </div>
                        <div class="p-4" style="position: relative;">
                            <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                            <h5 id="kvittun">Kvittun: <a id="kvittun_link${i}" style="text-decoration:underline;">Opna</a> </h5>
                            <p id="skiptUm1-${i}">Skipt var um: </p>
                            <p id="skiptUm2-${i}">Skipt var um: </p>
                            <p id="skiptUm3-${i}">Skipt var um: </p>
                        </div>
                    </div>
                </div>
            `);
            writeTjonToHTML(bilnumer, i)
        }
    }
}

function smurblocks(fjoldiSmurninga: number, bilnumer: string){
    const smurbok = document.getElementById("smurbok");
    if (fjoldiSmurninga == 0){
        smurbok.insertAdjacentHTML("beforeend", `
        <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-item rounded pt-3">
                <div class="p-4">
                    <h1 style="text-align:center;";>ATH! Þessi bíll er ekki með skráða smurningu</h1>
                </div>
            </div>
        </div>
        `); 
    }
    else{
        for (let i = 1; i <= fjoldiSmurninga; i++) {
            smurbok.insertAdjacentHTML("beforeend", `
                <div class="col-lg-12 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="service-item rounded pt-3" style="display:flex;">
                        <div class="p-1">
                            <h5 id=dagsetningSmurningar${i}>Dagsetning smurningar: </h5>
                            <p id="kilometrar${i}">Kílómetrar: </p>
                        </div>
                        <div class="p-1" style="position:relative";>
                            <h5 id="kvittunSmurning">Kvittun: <a id="kvittun_smurning_link${i}" style="text-decoration:underline;">Opna</a> </h5>
                            <p id="verkstaedi${i}">Verkstæði: </p>
                        </div>
                        <div class="p-1" style="position:relative";>
                            <h5 ">Skipt um: </h5>
                        </div>
                        <div class="p-1" style="position:relative";>
                            <p id="frjokorn${i}">Frjókornasía: </p>
                            <p id="oliusia${i}">Olíusía: </p>
                        </div>
                        <div class="p-1" style="position:relative";>
                            <p id="kaelivokvi${i}">Kælivökva: </p>
                            <p id="rudupiss${i}">Rúðupiss: </p>
                        </div>
                        <div class="p-1" style="position:relative";>
                            <p id="adblue${i}">AdBlue: </p>
                            <p id="tbd${i}">TBD: </p>
                        </div>
                    </div>
                </div>
            `);
            writeSmurningToHTML(bilnumer, i)
        }
    }
}

function writeTjonToHTML(bilnumer: string, tjonNumer: number){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(`dagsetningTjons${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.dagsetning`);
                document.getElementById(`tjonaflokkur${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.typa`); 
                document.getElementById(`lagad${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.lagad`);
                document.getElementById(`lagadAf${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.vottad`)
                let kvittun = document.getElementById(`kvittun_link${tjonNumer}`);
                kvittun.setAttribute("href", eval(`car.tjonasaga.tjon${tjonNumer}.kvittun`));
                document.getElementById(`skiptUm1-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm1`);
                document.getElementById(`skiptUm2-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm2`);
                document.getElementById(`skiptUm3-${tjonNumer}`).innerHTML += eval(`car.tjonasaga.tjon${tjonNumer}.skiptUm.skiptUm3`)
            };
        })
    })
    .catch(error => console.log(error));
};

function writeSmurningToHTML(bilnumer: string, smurningNumer: number){
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.bilnumer == bilnumer.toLowerCase()) {
                document.getElementById(`dagsetningSmurningar${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.dagsetning`);
                document.getElementById(`kilometrar${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.kilometrar`); 
                document.getElementById(`verkstaedi${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.vottad`)
                let kvittun = document.getElementById(`kvittun_smurning_link${smurningNumer}`);
                kvittun.setAttribute("href", eval(`car.smurbok.smurning${smurningNumer}.kvittun`));
                document.getElementById(`frjokorn${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.skiptUm.frjokorn`)
                document.getElementById(`oliusia${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.skiptUm.oliusia`)
                document.getElementById(`kaelivokvi${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.skiptUm.kaelivokvi`)
                document.getElementById(`rudupiss${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.skiptUm.rudupiss`)
                document.getElementById(`adblue${smurningNumer}`).innerHTML += eval(`car.smurbok.smurning${smurningNumer}.skiptUm.adblue`)
            };
        })
    })
    .catch(error => console.log(error));
};

function minSida(){
    var current_notandi = localStorage.getItem("current_notandi");
    fetch("./users.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            if (user.netfang == current_notandi.toLowerCase()) {
                document.getElementById('user_nafn').innerHTML += user.nafn;
                document.getElementById('user_netfang').innerHTML += user.netfang; 
                document.getElementById('user_kennitala').innerHTML += user.kennitala;
                document.getElementById('user_simanumer').innerHTML += user.simanumer;
                document.getElementById('user_heimilisfang').innerHTML += user.heimilisfang;
                document.getElementById('user_bilaFjoldi').innerHTML += user.fjoldiBila;
                localStorage.setItem('user_id', user.bilar_id)
            };
        })
    })
    fetch("./database.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(car => {
            if (car.id ==  localStorage.getItem("user_id")) {
                document.getElementById('user_bilnumerOgTypa').innerHTML += (car.bilnumer.toUpperCase() +" / " + car.typa);
                document.getElementById('user_nyskrad').innerHTML += car.nyskrad; 
                document.getElementById('dagar_i_smurningu').innerHTML = car.id + document.getElementById('dagar_i_smurningu').innerHTML;
                const tjonaFjoldi = car.tjonasaga.fjoldiTjona;
                if (tjonaFjoldi == 0 ){ 
                    document.getElementById('sidasta_vidgerd').innerHTML += 'Aldrei';
                } else{
                    document.getElementById('sidasta_vidgerd').innerHTML += eval(`car.tjonasaga.tjon${car.tjonasaga.fjoldiTjona}.lagad`);
                }
                document.getElementById('user_heimilisfang').innerHTML += user.heimilisfang;
                document.getElementById('user_bilaFjoldi').innerHTML += user.fjoldiBila;
            };
        })
    })
    .catch(error => console.log(error));
}

/*
const transporter = createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: "valgeir22@ru.is",
        pass: "jKYwfU1OIdbzWsG7"
    }
});

export async function sendResponse(
    toEmail: string,
    toName: string
) {
    await transporter.sendMail({
        from: "noreply@hanskaholfid.is",
        to: toEmail,
        sunject: "Takk fyrir að senda á Hanskahólfið",
        html: `<p>Góðan daginn ${toName}.\n
        Takk fyrir að senda á Hanskahólfið. Við munum svara þér um leið og við getum.<\p>`
    })
}
*/