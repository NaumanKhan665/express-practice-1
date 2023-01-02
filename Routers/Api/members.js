const express=require('express')
const Router=express.Router();
const persons=require('../../Members')
//getting all members id
Router.get('/',(req,res)=>{
    res.send(persons)
})


//geting one person data
Router.get('/:id',(req,res)=>{

  let found=persons.some(person=>person.id===parseInt( req.params.id))
  if(found){
      res.json(persons.filter(person=>person.id===parseInt( req.params.id))) 
  }else{

      res.send('not a part of this members')
  }
     
}
)

//post data
Router.post('/',(req,res)=>{
  
    const newMembers={
          
        id:4,
        name:"Asim",
        email:'nauman@gmail.com',
      subjects:['Javascript','C++','OOP']

      } 

      persons.push(newMembers)
      res.json(persons)

});
//put request
Router.put('/:id',(req,res)=>{
    let found=persons.some(person=>person.id===parseInt( req.params.id))
    if(found){  
        const updateMember=req.body;
        persons.forEach(person=>{
       if(person.id===parseInt( req.params.id)){
                         person.name=updateMember.name;
                person.email=updateMember.email;
               
                res.send({msg:'member update',person})

            }
  
        })


        res.json(persons.filter(person=>person.id===parseInt( req.params.id))) 
    }else{
  
        res.send('not a part of this members')
    }
       
})


Router.delete('/:id',(req,res)=>{

   
    res.json(persons.filter(person=>person.id!==parseInt( req.params.id))) 
    
})
module.exports=Router;