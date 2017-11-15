var moduleDataset = {  
   "clientRequest":"Win32",
   "serverconnectivity":{  
      "serverURL":"https://localhost",
      "oceanaServerDetails":{  
         "coreservices":"https://localhost/coreservices",
         "chatserver":"https://localhost/chatserver",
         "surveysystem":"https://localhost/servery"
      }
   },
   "firstscreen":"",
   "landingscreen":"#widget.homescreen",
   "widgets":{  
      "homescreen":{  
         "layout":"vertical",
         "menuitems":[  
            "Payment",
            "Account",
            "Flights"
         ]
      },
      "paymentScreen":{  
         "layout":"2-verticalsplit",
         //assumed that this will hold 2 controls in horizontal fashion 
"displayname":"Payment",
         "split1":{  
            "width":"10%",
            "layout":"grid",
            //shows menu items in icon form 
"subcontrols":[  
               {  
                  "name":"Utilities",
                  "displayname":"Utilities",
                  "icon":"utility.jpg"
               }
            ]
         },
         "split2":{  
            "width":"90%"
         }
      },
      "AccountDetails":{  
         "layout":"2verticalsplit",
         "displayName":"Overview",
         "backgroundimage":"",
         "backgroundcolor":"",

      }
   }
}
module.exports = moduleDataset;