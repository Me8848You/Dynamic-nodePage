const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs = require("hbs");
const schema = require("./models/details");
const sliderdata = require("./models/slider");
const card = require("./models/card");

// import routes folder
const router = require("./routes/mainroute");

//(templete engine )
app.set("view engine", "hbs"); //hbs temp engine use garxu vanera express lai vaneko
app.set("views", "views"); //hmro views wala content views folder ma rakheko xa
//2nd views folderko name ho
//1st views chai views html(hbs) wala content
hbs.registerPartials("views/partials");

app.use("/static", express.static("public")); //public vitra static content xa vaneko (middleware)img css ko lagi
// '/static' garda public access hunxa

app.use("", router); // ' ' garepaxi router ma janxa ani tespaxi router ma j vanexa garna parxa i.e '/save'

// ------------------------DB connection ----------------
mongoose.connect("mongodb://localhost:27017/Nodedb", (err, succ) => {
  if (succ) console.log("DB Connected!");
  else console.log(err);

  card.create([
      {
        icon: "/static/images/icon.jpg",
        title: "Services We Provides",
        description:
          "this type of services i can give you as a servie manager. You can call me right there after",
        linktext: "Checkkk",
        link: "google.com",
      },
      {
        icon: "/static/images/favicon.png",
        title: "Home Page",
        description:
          "this type of services i can give you as a servie manager. You can call me right there after",
        linktext: "Checkkk",
        link: "google.com",
      },
      {
        icon: "/static/images/idea.jpg",
        title: "Product",
        description:
          "this type of services i can give you as a servie manager. You can call me right there after",
        linktext: "Checkkk",
        link: "google.com",
      },
      {
        icon: "/static/images/idea.jpg",
        title: "Contact Section",
        description:
          "this type of services i can give you as a servie manager. You can call me right there after",
        linktext: "Checkkk",
        link: "google.com",
      },
    ]);

  // sliderdata.create({
  //   arr:[
  //   {
  //     title:'Firsttt Page Welcome',
  //     subtitle:"This is very First page of the slider first so that it can be used as the vacant post as rabi dai lai vanejsto kehi xaina ",
  //     imgurl:'/static/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
  //   },
  //   {
  //     title:'Second Page Welcome',
  //     subtitle:"This is very Thirddd page of the slider first so that it can be used as the vacant post as rabi dai lai vanejsto kehi xaina ",
  //     imgurl:'/static/images/alexander-shatov-mr4JG4SYOF8-unsplash.jpg'
  //   },
  //   {
  //     title:'Forth Page Welcome',
  //     subtitle:"This is very fourth page of the slider first so that it can be used as the vacant post as rabi dai lai vanejsto kehi xaina ",
  //     imgurl:'/static/images/bryan-goff-we1ky8_ZTHg-unsplash.jpg'
  //   }
  // ]})

  // schema.create({
  //   brandLogo: '/static/images/favicon.png',
  //   brandName: 'IDEA',
  //   link: [
  //     {
  //       links: 'Home',
  //       url: '/',
  //     },
  //     {
  //       links: 'About',
  //       url: '/about',
  //     },
  //     {
  //       links: 'Contact',
  //       url: '/contact',
  //     },
  //     {
  //       links: 'Gallery',
  //       url: '/gallery',
  //     }
  //   ],
  //   searchName:"Find",
  //   placeholder:"Want to search"
  // });
});

const PORT = 3000;
app.listen(process.env.PORT | PORT, () => {
  console.log(`Server started at the port ${PORT} `);
});
