var express=require('express');

var app= express();
var https= require('https');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/Page1.html')
})

app.post('/Result', function(req, res){
    var name=req.body.name;
    var Id=req.body.Id;
    var Address=req.body.Address;
    var Marks1=Number(req.body.Sub1);
    var Marks2=Number(req.body.Sub2);
    var Marks3=Number(req.body.Sub3);
    var Marks4=Number(req.body.Sub4);
    var Marks5=Number(req.body.Sub5);

    // console.log(name + " " + Id + " " + Address + " " + Marks1 + " " + Marks2 );

    var average=(Marks1+Marks2+Marks3+Marks4+Marks5)/5;
    var grade;
    if(average>=90){
        grade="A";
    }
    else if(average>=80){
        grade="B";
    }
    else if(average>=70){
        grade="C";
    }
    else if(average>=60){
        grade="D";
    }
    else if(average>=50){
        grade="E";
    }
    else{
        grade="F";
    }

    var file=require('fs');
    file.appendFileSync('St1.txt',"<table style='border:1px solid black'><tr><td>Name = "+name+" \n<hr></td></tr><tr><td>Id = "+Id+" \n <hr></td></tr><tr><td>Address = "+Address+" \n <hr></td></tr><tr><td>English Marks = "+Marks1+" \n <hr></td></tr><tr><td>Matds Marks = "+Marks2+" \n <hr></td></tr><tr><td>Physics Marks = "+Marks3+" \n <hr></td></tr><tr><td>Chemistry Marks = "+Marks4+" \n <hr></td></tr><tr><td>Hindi Marks = "+Marks5+" \n <hr></td></tr><tr><td>Total Marks = "+(Marks1+Marks2+Marks3+Marks4+Marks5)+" \n <hr></td></tr><tr><td>Average Marks = "+(Marks1+Marks2+Marks3+Marks4+Marks5)/5+" \n <hr></td></tr><tr><td>Grade = "+grade+"</td></tr></table>");
    
    file.appendFileSync('St1.txt',"<br><br>");
    
    file.readFile("St1.txt", "utf8", function(err, data){
        if(err) throw err;
    
        
        
        res.send(data);
    });
    // res.send("<h4>Name : "+name+"</h4>" + "<h4>ID : "+Id+"</h4>" + "<h4>Address : "+Address+"</h4>" + "<h4>English : "+Marks1+"</h4>" + "<h4>Matds : "+Marks2+"</h4>" + "<h4>Physics : "+Marks3+"</h4>" + "<h4>Chemistry : "+Marks4+"</h4>" + "<h4>Hindi : "+Marks5+"</h4>"+ "<h4>Total Marks : "+(Marks1+Marks2+Marks3+Marks4+Marks5)+"</h4>"+ "<h4>Average : "+((Marks1+Marks2+Marks3+Marks4+Marks5)/5)+"</h4>" + "<h4>Grade : "+grade+"</h4>");
})



app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
});