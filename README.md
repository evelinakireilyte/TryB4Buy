<h1 align="center">TryB4Buy - Project 4</h1>

<p align="center">
<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641903405/github/Screenshot_2021-12-21_at_10.56.34_ips1uy.png" width="800">
</p>

## Table of Contents:

1. [Project Overview](#project-overview)
2. [Deployment](#deployment)
3. [Getting Started](#getting-started)
4. [Project Brief](#project-brief)
5. [Technologies used](#technologies-used)
6. [Development Process and Timeline](#development-process-and-timeline)
7. [Bugs](#bugs)
8. [Challenges](#challenges)
9. [Wins](#wins)
10. [Key Learnings](#key-learnings)
11. [Future Improvements](#future-improvements)

## Project Overview

TryB4Buy is an advertising application allowing users to post items they own, providing other users with an opportunity to try them for a fixed fee before making a commitment to purchase it. TryB4Buy is a full stack application with CRUD functionality built using Python and Django for the back-end and user interface built using React.js. This was a solo project built in 8 days as part of a Software Engineering Immersive course.

## Deployment

The application was deployed through Heroku, using MongoDB Atlas to host data in the cloud.

You will find the deployed app here: TryB4Buy

Register and login to explore the app.

## Getting Started

Enter the src directory

### Backend

Install a virtual environment using:

```
python -m venv venv
```

Activate by:

```
source venv/bin/activate
```

Install the requirements with:

```
pip install -r requirements.txt
```

Apply database migrations:

```
python manage.py migrate
```

Load the seed data:

```
python3 manage.py loaddata items/seeds.json
```

### Frontend

cd to the /frontend directory and run

```
npm install
npm run build
```

## Usage

Run with:

```
python manage.py runserver
```

Access the application at localhost:8000

## Develppment

To develop the frontend cd into the /frontend directory and run:

```
npm start
```

Then see the dvelopment app on localhost:3000. To upsate the served django app run:

```
npm run build
```

## Project Brief

- Build a full-stack application by making my own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve data from a Postgres database
- Consume my API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help meet the deadline and implement core functionalities
- Be deployed online so it's publicly accessible.

## Technologies used

### Backend:

- Python
- Django
- Django REST Framework
- Psycopg2
- pyJWT

### Frontend:

- React
- Axios
- Semantic UI React
- Sass
- Http-proxy-middleware
- Nodemon
- React Router Dom

### Development tools:

- VS code
- Yarn
- Insomnia
- Git
- Github
- Cloudinary (media hosting)
- Heroku (deployment)
- Trello Board (planning and timeline)
- Lucid (wireframing)

## Development Process and Timeline

### Timetable

- Day 1 - Project planning
- Day 2-3 - Back-end
- Day 3-7 - Front-end
- Day 8 - Styling

### Day 1 - Project planning:

I started the planning process by defining relationships between items, user, reviews and making a diagram to aid in the development of the back-end database architecture.

#### ERD (Entity Relationship Diagram)

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641903423/github/tryb4buy_2_b2asup.png" width="500">

Once I had a clear picture on Django models I wanted to implement, I moved on to making wireframes for the front-end using Lucid.

#### Wireframes

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641904209/github/Screenshot_2022-01-11_at_12.29.25_vd5xwc.png" height="400"> <img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641904209/github/Screenshot_2022-01-11_at_12.29.54_b78bar.png" height="400">

I set out a timeframe for work to be completed in order to implement the back-end and front-end with desired features, leaving time to apply styling. Setting out clear working hours and keeping on top of the plan was crucial to building an application in only 8 days.

### Day 2-3 - Back-end:

This was my first experience of creating a back-end using Python. Django and Django REST Framework was used to create a PostgreSQL database with RESTful features. I have started the process by building my models, views and serialisers. The use of Insomnia has allowed me to test my back-end requests and make sure all relationships between models were set up correctly, returning desired information.

#### Code Snippet - Items model, serializers, get and post request responders

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641904738/github/Screenshot_2022-01-11_at_12.38.03_qazq5p.png" width="700">
<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641904737/github/Screenshot_2022-01-11_at_12.37.54_o4ey6k.png" width="700"><img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641904738/github/Screenshot_2022-01-11_at_12.38.29_nl7vnl.png" width="700">

## Day 3-7 - Front-end:

The Frontend was built by first installing React with all dependencies required for the initial work. React Hooks and Axios were used for data requests from the back-end. React-router-dom was used for page navigation in React. I have first worked on user registration and login implementation and from there moved on to creating item cards, item browsing list, item description page and editing page. Browsing page was built to include a search bar to help users find specific items they are interested in. On day 6 I realised that I will not be able to finish off the user profile page, reviews and wishlist features as I have underestimated the amount of time it takes to implement all I have aimed for. From there on, I have decided to focus on making sure the app is functional and basic features such as posting, editing, updating and deleting of ads are in place and move on to styling.

#### Code Snippet - Item search bar implementation

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641905830/github/Screenshot_2022-01-11_at_12.56.57_yfhlng.png" width="700">

### Day 8 - Styling:

As originally planned, styling was completed using SASS to achieve a simplistic and clean design. Previous experience using Flexbox was crucial when formatting the pages to achieve the planned layout. Although I have initially planned to style it for both desktop as well as mobile users, the mobile version requires further work. Overall, I was very happy with what I have achieved only having one day to implement styling.

### Bugs

- When registering, the user is not given a specific error message explaining that the given password is not strong enough.
- The page does not always reload after editing an item to display most up to date information.

### Challenges

- Throughout the project I would question myself to make sure I was not spending too much time trying to identify the piece of a broken code. I believe at times I should have seeked help earlier to avoid the loss of time that leads to stress when trying to meet deadlines
- Being unwell, I have missed a few days worth of classes just before the project week, therefore I had to learn Django authorisation, database seeding and look into implementing relationships independently.

### Wins

- Unique project idea, that could prove as a great business opportunity
- Successfully build a full stack application with CRUD functionality
- Although there is always room for improvement, I believe I have presented great time management skills and delivered a full stack project in only 8 days

### Key Learnings

I have had a great opportunity to work independently, plan my time, troubleshoot and make decisions which directly affected the final result. I was happy to be able to build it all from scratch utilising all the knowledge learned throughout the course and trust my own ability to manage the project as well as work on implementation.

This project was a great opportunity to solidify the knowledge using Python and Django - SQL database, to build the back-end.

### Future Improvements

- Complete profile page design to make it more presentable and user friendly.
- Add a wishlist feature to allow users to save items of interest.
- Add notification to inform users of successful registration before or after redirecting to the log-in page.
- Adding ability for users to upload a profile picture.
- Add user reliability rating.
