const dataProduk = [
  {
    id: 1,
    category:
    "Bata",
    title:
      "Bata Ringan ",
    image:
      "https://i2.wp.com/solusikonstruksi.com/wp-content/uploads/2017/11/harga-bata-ringan-hebel.jpg?fit=450,450&ssl=1",
    Price:"Rp 12.000",
    content: "Bata ringan 1 biji",
  },
  {
    id: 2,
    category:
    "Bata",
    title: "Bata Merah",
    image:
      "https://s1.bukalapak.com/img/6386731021/w-1000/BATU_BATA_MERAH_JUMBO_UKURAN__19_5_X_9_4X_4_CM_.jpg",
    Price: "Rp 4.000",
    content: "Bata merah 1 biji",
  },
  {
    id: 3,
    category:
    "Bata",
    title: "Bata Kapur",
    image:
      "https://s0.bukalapak.com/img/5072685/large/IMG_1409.jpg",
    Price: "Rp 20.000",
    content: "Bata  Kapur 1 biji",
  },
  {
    id: 4,
    category:
    "Semen",
    title:
      "Semen Gresik 20 KG ",
    image:
      "https://cf.shopee.co.id/file/719610b55c6505eed41a5b48ed5ee0c5",
    Price:"Rp 36.300",
    content: "deskripsi",
  },
  {
    id: 5,
    category:
    "Semen",
    title:
      "Semen Gresik 50 KG ",
    image:
      "https://cf.shopee.co.id/file/719610b55c6505eed41a5b48ed5ee0c5",
    Price:"Rp 74.700",
    content: "deskripsi",
  },
  {
    id: 6,
    category:
    "Semen",
    title:
      "Semen Tiga Roda 20 Kg ",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/25/a4961b88-87c9-4a97-80f8-b319ca0f83fe.jpg.webp",
    Price:"Rp 34.600",
    content: "deskripsi tiga roda",
  },
  {
    id: 7,
    category:
    "Semen",
    title:
      "Semen Tiga Roda 50 Kg",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/25/a4961b88-87c9-4a97-80f8-b319ca0f83fe.jpg.webp",
    Price:"Rp 73.500",
    content: "deskripsi tiga roda",
  },
  {
    id: 8,
    category:
    "Cat",
    title:
      "Cat Avitex ",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Avitex_SWhN3Wh.width-800.format-webp.webp",
    Price:"Rp 40.000",
    content: "Cat Avitex per atu kilo",
  },
  {
    id: 9,
    category:
    "Cat",
    title: " Cat Vinilex",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Nippon_Vinilex.width-800.format-webp.webp",
    Price: "Rp 19.000",
    content: "Cat Vinilex per satu kilo",
  },
  {
    id: 10,
    category:
    "Cat",
    title: "Cat Dulux",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Dulux_Catylac.width-800.format-webp.webp",
    Price: "Rp 150.000",
    content: "Cat Dulux per satu kilo",
  },
  {
    id: 11,
    category:
    "Cat",
    title: "Cat Nippon Paint",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Nippon_Paint.width-800.format-webp_bgQSK64.webp",
    Price: "Rp 480.000",
    content: "Cat Nippon Paint per satu kilo",
  },
  {
    id: 12,
    category:
    "Cat",
    title: "Cat Jotun",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Jotun.width-800.format-webp.webp",
    Price: "Rp 200.000",
    content: "Cat Jotun per satu kilo",
  },
  {
    id: 13,
    category:
    "Cat",
    title: "Cat No Drop",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/No_Drop.width-800.format-webp.webp",
    Price: "Rp 50.000",
    content: "Cat No Drop per satu kilo",
  },
  {
    id: 14,
    category:
    "Cat",
    title: "Cat Aquaproof",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Aquaproof.width-800.format-webp.webp",
    Price: "Rp 70.000",
    content: "Cat Aquaproof per satu kilo",
  },
  {
    id: 15,
    category:
    "Cat",
    title: "Cat Decolith",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/decolith.width-800.format-webp.webp",
    Price: "Rp 40.000",
    content: "Cat Decolith per satu kilo",
  },
  {
    id: 16,
    category:
    "Cat",
    title: "Cat  Danabrite",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Danabrite.width-800.format-webp.webp",
    Price: "Rp 200.000",
    content: "Cat Danabrite per satu kilo",
  },
  {
    id: 17,
    category:
    "Cat",
    title: "Cat Mowilex",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Mowilex.width-800.format-webp.webp",
    Price: "Rp 200.000",
    content: "Cat Mowilex per satu kilo",
  },
  {
    id: 18,
    category:
    "Cat",
    title: "Cat  Kansai Paint",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Kansai_Paint_Anti-Mosquito.width-800.format-webp.webp",
    Price: "Rp 80.000",
    content: "Cat Kansai Paint per satu kilo",
  },
  {
    id: 19,
    category:
    "Cat",
    title: "Cat  Sanlex",
    image:
      "https://o-cdn-cas.sirclocdn.com/parenting/images/Sanlex.width-800.format-webp.webp",
    Price: "Rp 50.000",
    content: "Cat Sanlex per satu kilo",
  },
  {
    id: 20,
    category:
    "Galvalum",
    title:
      "Galvalum Bening ",
    image:
      "https://image1ws.indotrading.com/s3/productimages/webp/co121532/p960301/w425-h425/514b2615-09ff-4285-bf46-ebad1ce87da7.png",
    Price:"Rp 10.000",
    content: "GALVALUM GRADE A",
  },
  {
    id: 21,
    category:
    "Galvalum",
    title: "Galvalum Prima Deck",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/10/19/3bcd527d-2808-4d31-baa1-ca87f5f009b9.png",
    Price: "Rp 19.000",
    content: "GALVALUM GRADE A",
  },
  {
    id: 22,
    category:
    "Galvalum",
    title: "Galvalum Hollow",
    image:
      "https://image1ws.indotrading.com/s3/productimages/webp/co51883/p518889/w425-h425/40f6c528-d0b4-42cf-adbe-62341a7a6b34.jpeg",
    Price: "Rp 10.000",
    content: "GALVALUM GRADE A",
  },


  
];

export default dataProduk;
