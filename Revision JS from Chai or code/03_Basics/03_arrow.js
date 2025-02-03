const user = {
    userName : "soumodip",
    price : 99,

    welcomeMes : function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}
 
user.welcomeMes();
user.userName = "soumo";
user.welcomeMes();

// console.log(this);

// function one () {
//     let userName = "soumodip"
//     console.log(this.userName)
// }
// one()

