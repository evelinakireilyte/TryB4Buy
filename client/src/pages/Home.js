import React from 'react'
import image1 from "../styles/images/index33.jpg"
import image2 from "../styles/images/best-ride-on-mower.jpg"
import image3 from "../styles/images/k2_items_src_904cf04bd99b7fdec4c9f8755ddb6a17.jpg"
import image4 from "../styles/images/M-205-1687x669.jpg"
import image5 from "../styles/images/gaming-newbies-stadia-videoSixteenByNineJumbo1600.jpg"
import image6 from "../styles/images/git.png"
import image7 from "../styles/images/linked.png"
import image8 from "../styles/images/Screenshot 2021-12-09 at 14.46.46.png"



const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage_images">
       <img src= { image1 }/>
        <img src= { image3 }/>
        <img src= { image5 }/>
        <img src= { image2 }/>
        <img src= { image4 }/>
      </div>
      <div className="subtitle">
        <img src= { image8 }/>
        <p> Try goods before commiting to buy or let others try yours and earn spare cash</p>
      </div>
      <div className="homepage_bottom_section">
        <div className="homepage_sub_left">
         <h4>Looking to try an item?</h4>
         <div><p className="home_line_1">Find an item</p></div>
         <div><p className="home_line_2">Register/Login</p></div>
         <div><p className="home_line_3">Contact the owner</p></div>
         <div><p className="home_line_4">Lets us know how you found it</p></div>
      </div>
      <div className="homepage_sub_right">
        <h4>Looking to make money?</h4>
          <div><p className="home_line_1">Register/Login</p></div>
         <div><p className="home_line_2">Make a post</p></div>
         <div><p className="home_line_3">Respond to users requests</p></div>
         <div ><p className="home_line_4">Provide TryB4Buy experience</p></div>
      </div>
      </div>
    <div className="footer">

      <p> Evelina Kireilyte</p> 
      <a href="https://www.linkedin.com/in/evelina-kireilyte/"><img src= { image7 }/></a>
      <a href="https://github.com/evelinakireilyte"><img src= { image6 }/></a>
      

    </div>
    </div>
  )
}

export default Home
