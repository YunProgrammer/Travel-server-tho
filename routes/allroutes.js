const express = require('express'); 
const router = express.Router(); 

var bodyParser = require('express'); 
var cors = require('cors'); 
const app = express(); 

const dboperations = require('../dbfiles/dboperations'); 
const Packoperations = require('../dbfiles/Packoperations');

app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json()); 
 app.use(cors()); 
 app.use('/api',router);


 router.use((request, response, next) => { 
   console.log('middleware');
   console.log(response.body); 
   next(); 
  }) 

   router.route('/contacts').get((request, response)=> { 
     dboperations.getContacts().then(result => { 
       console.log(result); 
       response.json(result); 
      }) 
    })
    router.route('/packages').get((request, response)=> { 
      Packoperations.getPackages().then(result=>{
        console.log(result);
        response.json(result);
      })
     })
    
     router.route('/packDetail').get((request, response)=> { 
      Packoperations.getPackages().then(result=>{
        console.log(result);
        response.json(result);
      })
     })
    
    // router.route('/contacts/:contactId').get((request, response)=> { 
    //   dboperations.getThisContact(request.params.contactId).then(result => { 
    //     response.send(result); 
    //     console.log(result); 
    //     //response.json(result); 
    //   }) 
    // })
 
      router.route('/addContact').post((request, response) =>{
        let contact = request.body
        dboperations.addContact(contact).then(result =>{
          response.status(201).json(result);
          console.log(response.body);
        })
      })

          

module.exports = router;
