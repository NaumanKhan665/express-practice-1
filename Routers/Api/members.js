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

//trying to access an invalid page
Router.get('*',(req,res)=>{

  res.send('your trying to access an inavlid page')


})


module.exports=Router;