import express from "express";

const app=express();
const port= 3000;

app.get("/",(req,res) => {
    const today=new Date("june 23, 2023");
    const day= today.getDay();
//    this day function will return value in the form of  0 1 2 3 4 5 6 

    console.log(day);
    let type = "a Weekday";
    let adv = "it's time to work hard";

    if (day == 0 || day == 6){
        type = "the  Weekend";
        adv = "it's time to have some fun";
    }

   
    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`surver running on port ${port}`);
});