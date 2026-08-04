const nomorAdmin = "6287771285577";

document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const hp = document.getElementById("hp").value;
    const alamat = document.getElementById("alamat").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;

    const text =
`*FORMULIR PEMESANAN*

*SILAHKAN DI ISI UNTUK ALAMAT PENGIRIMAN*

• Nama Lengkap : ${nama}
• Nomor HP : ${hp}
• Alamat Lengkap : ${alamat}
• Nama Produk : ${produk}
• Jumlah yang ingin dipesan : ${jumlah}

*Setelah Admin menerima Data Pesanan, Maka Admin akan kirim No Rekening untuk pembayaran.*`;

    window.location.href =
`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(text)}`;

});