# SAFER Project

SAFER is 

Rewriting: 
[The Drones also known as Unmanned Aerial Vehicles (UAVs), or Unmanned Aerial Systems (UASs) are growing rapidly over the past few years and are expected to keep growing in the very near future. The drone market is expanding with new models that target different segments of the consumer and commercial market, such as wildfire alarm system, climate change, aiding in wildlife preservation, improving agricultural management, insurance adjustment, real estate surveying, automated deliveries, roof inspections, tracking disease outbreaks, and directing disaster relief. Also, when the drones are combined with a super machine, high-definition cameras, smart sensors and devices, cloud AI resources, and other new technologies, the drones become remarkably more advanced. However, this proposal presents the Forest Fire Alarm System that will be used to connect a drone to the IBM Watson cloud for detecting and alerting the Fire Department about smoke, fire or other emergencies. The Forest Fire Alarm System has two main models. The first model is a drone model that uses machine learning algorithms using python TensorFlow and OpenCV with some machine learning libraries. This model runs on a drone that has AeroBoard with Nvidia Jetson TX2, a high-definition camera, Forward-looking infrared (FLIR) camera, smoke detector sensor, professional microphone, and LTE/4G modem. The second model is a cloud model that runs on the IBM Watson cloud with some IBM APIs such as visual recognition, Internet of things, data analysis and other tools. The main aim of this proposal is to build a drone that can fly by itself using autonomous fleet management. When the drone is in the sky and starting its mission, the drone model will analyze and gatherer the videos, voices and data in real-time from the forest by using python TensorFlow and OpenCV with some machine learning libraries, then extracts frames of the videos that collect by the cameras, the feature of voices that collect by the microphone, and the data that collect by the sensors; then the drone model will send all frames, features and data to the cloud model in the IBM Watson cloud server for analyzing all them, and making the final decision, then sending the result to the Fire Department dashboard.]

![WhatsApp Image 2019-01-01 at 11 23 46 PM (2)](https://user-images.githubusercontent.com/35352600/61595398-c810e180-abc4-11e9-9830-1117da53bc4a.jpeg)

Project components and elements:
- AFM System
- Weather System 
- System Health
- Live Streaming
- Voice Commands
- Visual Recognition

# AFM System using IBM Metal Server 

AFM System is

![AF](https://user-images.githubusercontent.com/35352600/61597919-737d5e80-abe4-11e9-9026-69228072edbd.jpg)


 # Weather System

Weather System is a dashboard that uses IBM Weather and Node Red

![SYSTEM](https://user-images.githubusercontent.com/35352600/61587258-8fd1ba80-ab54-11e9-8c04-378a19c1679c.JPG)

![nwa](https://user-images.githubusercontent.com/35352600/61597283-9dcb1e00-abdc-11e9-8380-9fd355ab0394.JPG)

# System Health 

System Health is a dashboard that uses Drone Sensors, IBM Watson IOT and Node Red

![hs](https://user-images.githubusercontent.com/35352600/61595360-25586300-abc4-11e9-9994-7c089a7b5fed.jpg)
Drone Sensors
![nds](https://user-images.githubusercontent.com/35352600/61597323-04503c00-abdd-11e9-981d-0e11577f9f43.JPG)
Drone Board
![nhs](https://user-images.githubusercontent.com/35352600/61597327-17fba280-abdd-11e9-8d16-c38ff8d5a357.JPG)

# Live Streaming 

 Live Streaming is a component that uses IBM Watson IOT, Node Red and NodeJS 
 
 ![live](https://user-images.githubusercontent.com/35352600/61587366-39b24680-ab57-11e9-820e-b3c7e99f96da.JPG)
 
 ![ls](https://user-images.githubusercontent.com/35352600/61596709-07dfc500-abd5-11e9-816d-8a09d762603a.jpg)
 
![nls](https://user-images.githubusercontent.com/35352600/61597350-99ebcb80-abdd-11e9-8761-234d32a865cb.JPG)

# Voice Commands 

Voice Commands is a tool that uses Watson Speech to Text and Text to Speech API and NodeJS 

Control systems for such fleets of UAVs are required to have features such as decentralization, modular design and interoperability between human controllers and UAVs 

We propose a framework which provides voice control for UAVs. This framework consists of an acoustic model created from speech data gathered in situ at a custom build recording booth designed to emulate a UAV control room/station, a language model incorporating phrases and jargon used in a UAS, and a GIS phrase dictionary which allows efficient commands related to waypoint locations on a UAS geolocation system.  

The platform is designed with modularity as a key characteristic, therefore allowing language models and phrase dictionaries to be swappable with others as newer or better such language models or dictionaries are made available. 

Utilizing a speech interface for AFM 

Autonomous Fleet Management (AFM) is a platform that provides connectivity between vehicles, operators, managers and customers.  

Customizable real-time location, routing and arrival times.  

Status and health of the fleet to increase the Utilization of the fleet 

Telemetry of all safety critical electrical and mechanical systems on the vehicles. 

Speech interface enables hands free approach - this allows greater multi-tasking opportunity 

The Structure of Voice Controlled UAV: 

AFM Knowledge Base: 

AFM Knowledge Base has all information about vehicles, operators, and managers. 

Users can query, operate or interact with the AFM using speech (microphone) 

The query is run through the ASR system and the response is generated by the AFM 

The AFM responds to the users via speech (using a speaker) 

For example:  

User: How many vehicles on the ground?  AFM: There are 5 vehicles on the ground 

User: How many vehicles on the mission? AFM: There are 8 vehicles on the mission 


- Speech to Text Model: 

The AFM uses the IBM® Speech to Text service  

IBM Watson provides an API that uses speech-recognition capabilities to produce transcripts of audio containing speech. 

Custom acoustic and language models provide higher accuracy than general speech models 

Custom corpus (collection of words) which are domain specific need new acoustic models 

Acoustic models, language models and dictionaries are swappable depending on context 

We create 2 sets of ASR models to interface different classes of users 

Examples of dialogue differentiation between separate user classes:  

UAV Operator Model: Takeoff, Land, Speed up, Speed down, Right,   

AFM Manager Model: How is the weather? What date is it? How many vehicles on ground? What is vehicle status?  What is the battery level? 

Creating Speech to Text Model 

Step 1: Data Collection  

Recording samples in anechoic chamber 

Step 2: Training the Model  

Speech sampling, de-noising, etc.  

Step 3: Testing the Model  

Test samples, accuracy rate, noise 

Examples of Model Training 

User: Control Vehicle number 1015?  > AFM Manager Model 

User: Takeoff, Land, Go Home.          > UAV Operator Model 

User: How many vehicles on ground? > AFM Manager Model 


-Text to Speech Model: 

The AFM uses the IBM® Text to Speech service. 

The IBM® Text to Speech service converts written text to natural-sounding speech  

Languages and voices are available for a variety of languages, dialects and genders 

Internationalization of the AFM interface will entail incorporating additional languages from this group 

Currently, the AFM uses the following configuration for text to speech: 

IBM Text to Speech: US English, En-US_AllisonVoice, Female 

Examples of dialogue differentiation between separate user classes: 

User: What date is it?         AFM: The date is Sunday, August 19 

User: What is vehicle status?  AFM: Vehicle status is operational; recharging 


- Conversation Model: 

The AFM uses The IBM Watson™ Conversation Service 

This service combines machine learning, natural language understanding, and integrated dialogue tools to create conversation flows between the AFM and users 

A conversation model distinguishes an ASR by adding Understanding after speech recognition, therefore creating a “Smart System” 

Examples of dialogue 

User: What is the battery level?    AFM: What is vehicle number?   

User: AFM: Vehicle number is 0018.  AFM: The battery level is 50%. 


![SPEECH](https://user-images.githubusercontent.com/35352600/61587298-a593af80-ab55-11e9-89cd-e46d2eeacb8e.JPG)


# Visual Recognition 

Visual Recognition is a tool that uses Watson Visual Recognition API and NodeJS

Rewriting: 
[The SkyEyes will be used to connect a drone to the IBM Watson Cloud with real-time image, video, and data analysis using the IBM Watson Cloud AI resources. This system allows the drones to send a live video stream, image, voice, and data directly to the IBM Watson Cloud and to the control rooms. Also, while the drone is in the air, the system will send the images, voices, and data in real-time to the IBM Watson Cloud for the processing and for the analysis this data by using the IBM Watson Visual Recognition. Then the system will send the results to the enterprises that will use the system ]

![ob](https://user-images.githubusercontent.com/35352600/61596212-ac123d80-abce-11e9-8d5e-f62d09a94ca1.jpg)

