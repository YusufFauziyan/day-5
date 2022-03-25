function submitData () {
    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const emailReceiver = 'yusuffauziyan@gmail.com'

    console.log(nama);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (nama == '') {
        return alert ('Nama Wajib diisi');
    } else if (email == '') {
        return alert ('Email wajib di isi');
    } else if (phone == '') {
        return alert ('No Telp wajib di isi');
    } else if (subject == '') {
        return alert ('Pilih Subject');
    } else if (message == '') {
        return alert ('Pesan wajib di isi');
    }
    
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo Nama saya ${nama}. No Handphone: ${phone}. Pesan: ${message}`
    a.click()

    let dataObject = {
        namaLengkap: nama,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
    window.location.reload();
}


// ===PROJECT===
let blogs = []

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('file-upload').files;
    let sDate = document.getElementById('sDate').value;
    let eDate = document.getElementById('eDate').value;

    let node = document.getElementById('node').checked;
    let js = document.getElementById('js').checked;
    let react = document.getElementById('react').checked;
    let vue = document.getElementById('vue').checked;

    let result = description.slice(0, 135) + "....";
    let cardDuration = abtDuration(sDate, eDate);

    image = URL.createObjectURL(image[0]);

    let blog = {
        title: title,
        description : description,
        image : image,
        node : node,
        js : js,
        react : react,
        vue : vue,
        duration : cardDuration,
        result : result
    };

    blogs.push(blog);
    console.log(blogs);
    
    renderBlog();
}


function renderBlog() {
    
    document.getElementById('contents').innerHTML = "";
    for (let i = 0; i < blogs.length; i++ ) {
        document.getElementById('contents').innerHTML +=
        `
            <div class="card">
                <div class="card-header">
                    <img src=${blogs[i].image} alt="" class="card-image">
                </div>
                <div class="card-body">
                    <h4>${blogs[i].title} </h4>
                    <a href="project/project7.html">
                        View More <i class='bx bx-right-arrow-alt'></i>
                    </a>
                    <p>Technology</p>
                    <span>Duration: ${blogs[i].duration}</span>
                    <p>${blogs[i].result}</p>
                </div>
                <div class="card-footer">
                    <div class="card-icon">
                        <i class='bx bxl-vuejs ${blogs[i].vue}' ></i>
                        <i class='bx bxl-react ${blogs[i].react}' ></i>
                        <i class='bx bxl-nodejs ${blogs[i].node}' ></i>
                        <i class='bx bxl-javascript ${blogs[i].js}' ></i>
                    </div>
                </div>
                <div class="card-button">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        `
    };
};


function abtDuration(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let duration = end.getTime() - start.getTime();
    let month = Math.round(duration / (1000 * 3600 * 24 * 30));
    let day = duration / (1000 * 3600 * 24)
    let year = Math.floor(duration / (1000 * 3600 * 24 * 30 * 12))
  
    if (day < 30) {
        return day + ' Hari';
    } else if (month < 12) {
        return month + ' Bulan';
    } else {
        return year + ' Tahun'
    }

}