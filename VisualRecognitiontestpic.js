 
      const fs = require('fs');
      const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
      const watson = require('watson-developer-cloud');
      const vr = new VisualRecognitionV3({
	      url: 'https://gateway.watsonplatform.net/visual-recognition/api',
	      version: '2018-03-19',
	      iam_apikey: 'uhRDUQfLUcxkRbtl_MfIEltdFF0xVVIyrQOXjvsBZHdM',
      });
      
            
        const params = {






          images_file: fs.createReadStream("pic.png"),
          classifier_ids: ["DefaultCustomModel_435840816"],
         
          threshold: 0
        };
         
        vr.classify(params, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            let classes = res.images[0].classifiers[0].classes
            let maxScore = classes[0].score
            let recognizedClass = classes[0].class
            for (let i=1; i<classes.length; i++) {
              if (classes[i].score > maxScore) {
                maxScore = classes[i].score;
      
       recognizedClass = classes[i].class;
              }
            }
      
            console.log("This is " + recognizedClass +" with score:" + maxScore );
            
          }
        });
       
