import React from 'react'
import "./Styles.css";
import Twitter  from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";
import Instagram from "../../images/instagram.svg";
import President from "../../images/president.png";
import VicePresident from "../../images/vicepresident.png";
import Treasurer from "../../images/treasurer.png";
import EventPlanner from "../../images/eventplanner.png";
import TechnicalOfficer from "../../images/technicalofficer.png";
import Footer from '../../components/Dark Footer/Footer';

const PersonCard = ({ name, role, twitter, linkedin, instagram, image }) => {
  return (
    <div className='personCard'>
      <div className='personImgContainer'>
      <img src={image} alt="" />
      </div>
      <div className='personInfoContainer'>
        <h1>{name}</h1>
        <p>{role}</p>
        <div className='cardSocialContainer'>
          {twitter && <a href={twitter} ><img className='cardSocialImg' src={Twitter} alt="twitter" /></a>}
          {linkedin && <a href={linkedin} ><img className='cardSocialImg' src={LinkedIn} alt="linkedin" /></a>}
          {instagram && <a href={instagram}><img className='cardSocialImg' src={Instagram} alt="instagram" /></a>}
        </div>
        
        
      </div>
    </div>
  )
}

const Leadership = () => {
  return (
    <div className='leadershipContainer'>
      <div className='leadershipHeadingDiv'>
        <h3>Leadership</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      </div>
      <div className='cardsDiv'>
        <PersonCard name="Kenzy Kim" role="President" image={President} linkedin="https://www.linkedin.com/in/kenzykim/" />
        <PersonCard name="Erica Mclean" role="Vice President" image={VicePresident} twitter="[link]" linkedin="[link]" instagram="[link]" />
        <PersonCard name="Bilal Lucas" role="Treasurer" image={Treasurer} twitter="[link]" linkedin="[link]" instagram="[link]" />
        <PersonCard name="Saif Black" role="Event Planner" image={EventPlanner} twitter="[link]" linkedin="[link]" instagram="[link]" />
        <PersonCard name="Greta Baldwin" role="Technical Officer" image={TechnicalOfficer} twitter="[link]" linkedin="[link]" instagram="[link]" />
      </div>
      <Footer />
    </div>
  )
}

export default Leadership;