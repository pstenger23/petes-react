import React from 'react';
import photo from '../../assets/profile/profile-photo.jpg'
function About() {
    return(
        <section className="page">
            
            <h2 id='about'>A little about myself...</h2>

            <div className="abt-page">
                <img src={photo} className='profile' alt='Me'/>

                <p className="about-section">My name is Peter Stenger, and I am currently a resident of Milwaukee, WI. After graduating high-school I attended the University of Iowa for 3 years before joining the University of Wisconsin's full-stack web development bootcamp. Since then I have been learning and practicing my development skills through personal projects, freelance work, or even just writing and re-writing code.</p>
            </div>
        </section>
    )
}

export default About;