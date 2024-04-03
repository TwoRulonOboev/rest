import logo from './img/Vector(1).png'
import logo1 from './img/Frame (2).png'
import logo2 from './img/Frame (1).png'
import phone from './img/IMAGE (6).png'
import niga from './img/IMAGE (7).png'
import girl from './img/IMAGE.png'
import star from './img/star.png'
import vector from './img/Vector (2).png'
import location from './img/location.png'
import protection from './img/protection.png'
import time from './img/time.png'
import message from './img/message.png'
import nothing from './img/nothing.png'
import footerlogo from './img/footer-logo.png'
import instagram from './img/instagram.png'
import inn from './img/in.png'
import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return(
    <>
    <body>
    <header>
      <nav>
        <div className="left_nav">
          <p>Talk to our team to start saving</p>
          <p className="number">1.877.445.0070</p>
        </div>
        <div>
          <a>Login</a>
        </div>
      </nav>
    </header>

      <section className="hero">
        <div className="hero-figure">
          <h2 className="first-text">Get started</h2>
          <h1>Take control of your car payments</h1>
          <h2 className="second-text">You could save $110+ a month on your car loan*</h2>

          <button className="hero-button" type="submit" onClick={openModal}>
              <h2>Check your rate for free!</h2>
              <img src={logo} alt="" />
            </button>

            {showModal && (
          <div className="modal">
            <input type="text" placeholder="Введите что-то..." />
            <input type="text" placeholder="Введите что-то еще..." />
            <button onClick={() => window.location.href='https://www.youtube.com/watch?v=XH5OW46yO8I'}>Перейти</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        )}

        </div>
      </section>
      <section className='forbes'>
        <div className='forbes-block'>
          <div className='forbes-contain'>
            <div>
              <img src={logo1} alt="" />
              <h2>No impact to your credit score +</h2>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo1} alt="" />
              <h2>No hidden fees</h2>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo1} alt="" />
              <h2>No SSN required ++</h2>
              <img src={logo2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='fontsss'>
          <div className='fontsss-container'>
            <h2>IN THE NEWS</h2>
            <h2>TC Tech Crunch</h2>
            <h2>The New Work Times</h2>
            <h2>Forbes</h2>
            <h2>DCInno</h2>
          </div> 
      </section>
      <section className='caribou'>
          <div className='caribou-img'>
            <img src={phone} alt="" />
          </div>
          <div className='caribou-aside'>
            <h2 className='caribou-aside_first'>DID YOU GET FINANCING FROM YOUR DEALER?</h2>
            <h2 className='caribou-aside_second'>Fast, easy auto refinance</h2>
            <p>Instantly access competitive rates in minutes, with a dedicated team available to walk you through the process.</p>
            <button className='caribou-button'>
              <h2>See how it works</h2>
            </button>
          </div>
      </section>
      <section className='niger'>
        <div className='niger-figure'>
          <img src={niga} alt="" />
        </div>
      </section>
      <section className='green'>
        <div className='green-container'>
          <h2 className='caribou-aside_first'>FIND THE RIGHT COVERAGE FOR YOU</h2>
          <h2 className='green-text__h2'>Choose car insurance with confidence</h2>
          <p>We shop and compare insurance quotes from trusted carriers in minutes, saving you time and the hassle of having to research on your own.</p>
          <button className='green-button'>
            <h2>Get a quote</h2>
          </button>
        </div>
      </section>
      <section className='discover'>
        <div className='discover-container'>
          <div className='discover-text'>
            <h2 className='discover-first'>Are you getting the most out of your savings?</h2>
            <h2 className='discover-second'>Discover how much you could save</h2>
            <p>Drivers could save more when they refinance and switch their car insurance through Caribou.</p>
          </div>
          <div className='discover-get'>
            <h3>Get started</h3>
            <img src={logo} alt="" />
          </div>
          <div className='discover-figure'>
            <img src={girl} alt="" />
          </div>
        </div>  
      </section>
      <section className='customer'>
        <div className='customer-container'>
          <h2 className='customer-head'>CUSTOMER STORIES</h2>
          <div className='customer-contain'>
            <h2>75,000+ happy drivers with more cash in their wallets</h2>
            <div className='customer-vectors'>
              <img src={vector} alt="" />
            </div>
            <div className='customer-vectors'>
              <img src={vector} alt="" />
            </div>
          </div>
          <div className='reviews'>
            <div className='stars'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <h2>4.5 star reviews from our clients on</h2>
            <h3>Trustpilot</h3>
          </div>
          <div className='customer-blocks'>
            <div className='customer-block'>
              <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              </div>
              <div className='custome-text'>
                <p>The application process was easy, and the loan officer was great at communicating the next steps. The whole process, from the application to the funding, took two weeks. My interest rate, as well as my monthly payments, went down.</p>
              </div>
              <div className='block-name'>
                <h2>Amina</h2>
                <div className='block-location'>
                  <img src={location} alt="" />
                  <h2>November 18, 2022</h2>
                </div>
              </div>
            </div>
            <div className='customer-block'>
              <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              </div>
              <div className='custome-text'>
                <p>We wanted to refinance our vehicle because our old lender kept making mistakes and providing poor service. Not only did Caribou provide excellent service, but they helped us lower our rate, term and payment! What a nice surprise and a great experience!</p>
              </div>
              <div className='block-name'>
                <h2>Jessie</h2>
                <div className='block-location'>
                  <img src={location} alt="" />
                  <h2>October 25, 2022</h2>
                </div>
              </div>
            </div>
            <div className='customer-block'>
              <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              </div>
              <div className='custome-text'>
                <p>The refi experience with Caribou was quick and easy. Fill out a form online, get an email and call within a few days, and boom, new low car payment in a couple of weeks. They did all the heavy lifting, were pleasant, helpful, and informative.</p>
              </div>
              <div className='block-name'>
                <h2>Danny</h2>
                <div className='block-location'>
                  <img src={location} alt="" />
                  <h2>September 28, 2022</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='light'>
        <div className='light-container'>
          <h2>No hidden fees.</h2>
          <h2>Co-borrowers welcome.</h2>
          <h2>Fully online process.</h2>
          <h4>Got more questions? We've got answers.</h4>
          <button>
            <h3>Search our FAQs</h3>
          </button>
        </div>
      </section>
      <section className='sets_up'>
        <div className='sets_up-container'>
          <h4>What sets us apart</h4>
          <h2>Tech to unlock low rates people to make the process easy</h2>
          <div className='sets_up-blocks'>
            <div className='sets_up-block'>
              <img src={nothing} alt="" />
              <h3>Competitive rates</h3>
              <p>Gain access to affordable refi rates that could save you thousands over the life of your loan* and insurance quotes.</p>
            </div>
            <div className='sets_up-block'>
              <img src={message} alt="" />
              <h3>Dedicated support</h3>
              <p>Our team of loan officers and insurance representatives are standing by, happy to help you through either process.</p>
            </div>  
            <div className='sets_up-block'>
              <img src={protection} alt="" />
              <h3>All in one place</h3>
              <p>Take control of your car finances when you apply for refinancing and car insurance through Caribou.</p>
            </div>
            <div className='sets_up-block'>
              <img src={time} alt="" />
              <h3>Fast and easy</h3>
              <p>Quickly access offers with no hidden fees, no impact to your credit score,✝︎ and no SSN required.✝︎✝︎</p>
            </div>
          </div>
          <div className='absolute'>
            <h2>Through Caribou, you could start saving today!</h2>
            <button>
              <p>Refinance my loan</p>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className='footer-container'>
          <div className='footer-contain'>
            <div className='footer-head'>
              <div className='footer-logo'>
                <img src={footerlogo} alt="" />
                <h2>Caribou</h2>
              </div>
              <div className='footer-socio'>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={inn} alt="" />
              </div>
            </div>  
            <div className='details'>
              <h2>Products</h2>
              <p>Refinance</p>
              <p>Insurance</p>
            </div>
            <div className='details'>
              <h2>Company</h2>
              <p>About Us</p>
              <p>Careers</p>
              <p>Lending Partners</p>
              <p>Newsroom</p>
              <p>Contact Us</p>
            </div>
            <div className='details'>
              <h2>Resources</h2>
              <p>Resource Center</p>
              <p>Learning Library</p>
              <p>Find Savings by Vehicle</p>
              <p>Refinance Calculator</p>
              <p>FAQs</p>
              <p>Glossary</p>
            </div>
            <div className='details'>
              <h2>Contact Details</h2>
              <h3>NMLS #1746612</h3>
              <p>1.877.445.0070</p>
              <p>Mon - Fri: 9am - 8pm EST</p>
              <p>Sat - Sun: 9am - 4pm EST</p>
              <h3>1717 Rhode Island Ave, NW, Suite 500 Washington, DC 20036</h3>
              <h3>Caribou Insurance Services, LLC</h3>
              <h3>1.877.255.2660</h3>
              <h3>Mon - Fri: 9am - 8pm ET</h3>
              <h3>insurance@gocaribou.com</h3>
              <h3>contact@gocaribou.com</h3>
            </div>
          </div>
          <div className='invisible'></div>
          <div className='footer-description'>
            <p>* This information is estimated based on consumers who were approved for an auto refinance loan through Caribou on or after 1/1/2022, had an existing auto loan on their credit report, and accepted their final terms. As of 9/27/2022, borrowers who refinance save an average of $111.16 per month. Refinance savings may result from a lower interest rate, longer term, or both. There is no guarantee of savings. Your actual savings, if any, may vary based on interest rates, the repayment term, the amount financed, and other factors.</p>
            <p>+ To check the refinance rates and terms you qualify for, we conduct a soft credit pull that will not affect your credit score. However, if you choose a loan product and continue your application, we or one of our lending partners will request your full credit report from one or more consumer reporting agencies, which is considered a hard credit pull and may affect your credit.</p>
            <p>++ Social security number is required should you choose to move forward in the loan application process.</p>
            <p>** APR is the Annual Percentage Rate. Your actual APR may be different. Your APR is based on multiple factors including your credit profile and the loan to value of the vehicle. APR ranges from 2.83% to 36.00% and is determined at the time of application. Lowest APR is based on loan amount of $45,000, 36 month term, and is available to borrowers with excellent credit and only in certain states. Conditions apply. Advertised rates and fees are valid as of 11/1/2022 and are subject to change without notice. Insurance savings will not result from lower APR.</p>
            <p>Terms and Conditions apply. Caribou reserves the right to modify or discontinue products and benefits at any time without notice. Participating lenders, rates and terms are also subject to change at any time without notice. The information you provide to us is an inquiry to determine whether our lenders can make you a loan offer. If any of our lending partners has an available loan offer for you, you will be invited to submit a loan application to the lender for its review. Not all borrowers receive the lowest rate. Lowest rates are reserved for the highest qualified borrowers. We do not guarantee that you will receive any loan offers or that your loan application will be approved. If approved, your actual rate will depend on a variety of factors, including term of loan, a responsible financial history, income and other factors. Offers not available in MA, MD, MS, NE, NV, WI, WV.</p>
            <p>Insurance products offered through Bindable and Caribou Insurance Services, LLC. Caribou is working with Bindable who owns MyLifeProtected and MassDrive Insurance Group, LLC, the licensed agent for all products.</p>
            <div className='invisible'></div>
          </div>
          <div className='footer-end'>
            <p>©2023 Caribou Financial, Inc. d/b/a Caribou. All rights reserved.</p>
            <div className='footer-nav'>
              <a href=""><p>Electronic Communications Consent</p></a>
              <a href=""><p>Privacy Policy</p></a>
              <a href=""><p>Your California Privacy Rights</p></a>
              <a href=""><p>Terms of Use</p></a>
              <a href=""><p>Disclosures</p></a>
              <a href=""><p>NMLS Consumer Access</p></a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  </>
  )
}

export default App;
