//Category dropdown
let i = 1
function dropdown() {
    if (i % 2 != 0) {
        document.getElementById("dropDownList").style.display = "none";
        i++;
    }

    else {
        document.getElementById("dropDownList").style.display = "block";
        i++;
    }
}

/*---Change advetisment---*/
let j = 0;
let changeAd = function () {
    let adList = [
        { name: "Megamart Special", url: "./images/ad-T-shirt.jpg", locate: "10 minutes ago from New York, USA" },
        { name: "Funky Scarf", url: "./images/funky.jpg", locate: "5 minutes ago from Paris, French" },
        { name: "Black Beard", url: "./images/ad-skirt.jpg", locate: "7 minutes ago from Hanoi, Vietnam" },
        { name: "Black Inner T-Shirt", url: "./images/blackInnerTshirt.jpg", locate: "6 minutes ago from Berlin, Germany" }
    ];
    document.getElementById("url").src = adList[j].url;
    document.getElementById("name").innerHTML = adList[j].name;
    document.getElementById("locate").innerHTML = adList[j].locate;
    j++;
    if (j == adList.length) j = 0;
}
setInterval(changeAd, 5000);

/*---Close advetisment---*/
function closeAd() {
    document.getElementById("advertisement").style.display = "none";
}

/*---change slide---*/
let t = 1;
let changeSlide = function () {
    let slides = ["./images/slide1.jpg", "./images/slide2.jpg", "./images/slide3.jpg"];
    document.getElementById("slide").src = slides[t];
    document.getElementById("c1").style.color = "#242929";
    switch (t) {
        case 0:
            {
                document.getElementById("c1").style.color = "orange";
                document.getElementById("c2").style.color = "#242929";
                document.getElementById("c3").style.color = "#242929";
                break;
            }
        case 1:
            {
                document.getElementById("c1").style.color = "#242929";
                document.getElementById("c2").style.color = "orange";
                document.getElementById("c3").style.color = "#242929";
                break;
            }
        case 2:
            {
                document.getElementById("c1").style.color = "#242929";
                document.getElementById("c2").style.color = "#242929";
                document.getElementById("c3").style.color = "orange";
                break;
            }
    }
    t++;
    if (t == 3) t = 0;
}
let iv = setInterval(changeSlide, 5000);
