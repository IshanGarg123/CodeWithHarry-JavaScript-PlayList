class Password{
    constructor()
    {
        console.log("Welcome to password generator");
        this.pass="";
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let number = "1234567890";
        let special = "!@#$%^&*()";
        if(len<3)
        {
            console.log("your password should be atleast 3 character long");
        }
        else
        {
            let i=0;
            while(i<len)
            {
                let index1 = Math.floor(Math.random() * chars.length);
                this.pass += chars[index1];
                let index2 = Math.floor(Math.random()*  number.length);
                this.pass += number[index2];
                let index3 = Math.floor(Math.random()* special.length);
                this.pass += special[index3];
                i+=3
            }
        }
        this.pass = this.pass.substring(0,len);
        return this.pass;
    }
};

let p = new Password();
console.log(p.generatePassword(4));