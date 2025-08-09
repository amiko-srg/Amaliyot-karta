let btn = document.querySelector('.click');

btn.addEventListener('click', () => {

    let getpost = async function () {
        let res = await fetch('https://ipinfo.io/json');
        let data = await res.json();
        let koordinata = data.loc.split(',');
        let lat2 = koordinata[0];
        let long = koordinata[1];



        let lat = document.querySelector('.lat');
        lat.textContent = lat2;
        let lon = document.querySelector('.lon');
        lon.textContent = long;
        let country = document.querySelector('.country');
        country.textContent = data.country;
        let city = document.querySelector('.city');
        city.textContent = data.city;
        let ip = document.querySelector('.ip');
        ip.textContent = data.ip;
        let isp = document.querySelector('.isp');
        isp.textContent = data.org;
        let map = document.querySelector('.map');
        map.src = `https://www.google.com/maps?q=${lat2},${long}&hl=uz&z=14&output=embed`;
    }


    getpost();
});
