import React, { useEffect, useRef } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './HomePage.css';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  // Create refs for the slider elements
  const sliderRef = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const prevArrow = prevArrowRef.current;
    const nextArrow = nextArrowRef.current;
    const cards = slider.querySelectorAll('.request-card, .see-all-card');

    // Function to update arrow visibility
    const updateArrowVisibility = () => {
      // Check if we're at the start (hide left arrow)
      if (slider.scrollLeft <= 20) {
        prevArrow.classList.add('hidden');
      } else {
        prevArrow.classList.remove('hidden');
      }

      // Check if we're at the end (hide right arrow)
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth - 20;
      if (slider.scrollLeft >= maxScrollLeft) {
        nextArrow.classList.add('hidden');
      } else {
        nextArrow.classList.remove('hidden');
      }
    };

    // Function to update the active card based on scroll position
    const updateActiveCard = () => {
      const centerPosition = slider.scrollLeft + slider.clientWidth / 2;

      cards.forEach(card => {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + cardWidth / 2;

        // If the card is close to center, make it active
        if (Math.abs(centerPosition - cardCenter) < cardWidth / 2) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    // Function to scroll to the next card
    const scrollNext = () => {
      const cardWidth = cards[0].offsetWidth + 30; // Card width + gap
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    // Function to scroll to the previous card
    const scrollPrev = () => {
      const cardWidth = cards[0].offsetWidth + 30; // Card width + gap
      slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    // Add event listeners
    prevArrow.addEventListener('click', scrollPrev);
    nextArrow.addEventListener('click', scrollNext);
    slider.addEventListener('scroll', () => {
      updateArrowVisibility();
      updateActiveCard();
    });

    // Initial updates
    updateArrowVisibility();
    updateActiveCard();

    // Make the first card active by default
    if (cards.length > 0) {
      cards[0].classList.add('active');
    }

    // Hide left arrow initially since we're at the start
    prevArrow.classList.add('hidden');

    // Cleanup event listeners on component unmount
    return () => {
      prevArrow.removeEventListener('click', scrollPrev);
      nextArrow.removeEventListener('click', scrollNext);
      slider.removeEventListener('scroll', updateArrowVisibility);
      slider.removeEventListener('scroll', updateActiveCard);
    };
  }, []);

  return (
    <>
      <div className="homepage">
        <Navigation />
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Can't Find the <span className="highlight-text">Perfect</span>{' '}
                  Teaching Resource?
                </h1>
                <p>
                  LessonLinks is the first teacher marketplace that empowers you
                  to{' '}
                  <span className="text-highlighter">
                    request exactly what you need
                  </span>{' '}
                  and connect with creators who can create it for you.
                </p>
                <div className="hero-buttons">
                  <a href="/request" className="btn btn-large btn-highlight">
                    <i className="fas fa-bullhorn"></i>Post Your Request
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="request-feature">
          <div className="container">
            <div className="section-title">
              <h2>Active Resource Requests</h2>
              <p>
                See what other teachers are looking for and fulfill their
                requests.
              </p>
            </div>

            <div className="request-cards-container">
              {/* Navigation arrows */}
              <div ref={prevArrowRef} className="slider-arrow slider-prev">
                <i className="fas fa-chevron-left"></i>
              </div>

              <div ref={nextArrowRef} className="slider-arrow slider-next">
                <i className="fas fa-chevron-right"></i>
              </div>

              <div ref={sliderRef} className="request-cards">
                {/* No dummy card - start with the first real card */}
                <div className="request-card">
                  <div className="request-card-header">Science - Grade 5</div>
                  <div className="request-card-body">
                    <h3>Ecosystems Interactive Notebook</h3>
                    <div className="request-meta">
                      <span>
                        <i className="fas fa-user"></i> Requested by Sarah T.
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 7 mins ago
                      </span>
                    </div>
                    <p className="request-description">
                      Looking for an interactive notebook with hands-on
                      activities for a 2-week ecosystems unit. Need food web
                      activities and habitat explorations that align with NGSS
                      standards.
                    </p>
                    <div className="request-cta">
                      <span className="request-price">$10-15</span>
                      <a href="/submit" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div className="request-card">
                  <div className="request-card-header">Math - Grade 3</div>
                  <div className="request-card-body">
                    <h3>Fractions Assessment Bundle</h3>
                    <div className="request-meta">
                      <span>
                        <i className="fas fa-user"></i> Requested by Michael D.
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 12 mins ago
                      </span>
                    </div>
                    <p className="request-description">
                      Need pre-assessment, formative assessments, and summative
                      assessment for fractions unit. Should include visual
                      models and word problems. Digital and printable versions
                      required.
                    </p>
                    <div className="request-cta">
                      <span className="request-price">$5-10</span>
                      <a href="/submit" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div className="request-card">
                  <div className="request-card-header">ELA - High School</div>
                  <div className="request-card-body">
                    <h3>Modern Poetry Analysis Unit</h3>
                    <div className="request-meta">
                      <span>
                        <i className="fas fa-user"></i> Requested by Rebecca L.
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 41 mins ago
                      </span>
                    </div>
                    <p className="request-description">
                      Seeking a 3-week unit on modern poetry analysis for grades
                      11-12. Should include diverse poets, analysis frameworks,
                      writing prompts, and final creative project options.
                    </p>
                    <div className="request-cta">
                      <span className="request-price">$10-15</span>
                      <a href="/submit" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div className="request-card">
                  <div className="request-card-header">
                    Social Studies - Middle School
                  </div>
                  <div className="request-card-body">
                    <h3>Ancient Civilizations Digital Escape Room</h3>
                    <div className="request-meta">
                      <span>
                        <i className="fas fa-user"></i> Requested by Alex K.
                      </span>
                      <span>
                        <i className="fas fa-clock"></i> 1 hr ago
                      </span>
                    </div>
                    <p className="request-description">
                      A digital escape room focused on ancient Egypt, Greece,
                      and Rome with interactive puzzles that teach key concepts
                      about each civilization, designed to work in Google Slides
                      and including a teacher guide.
                    </p>
                    <div className="request-cta">
                      <span className="request-price">$15-20</span>
                      <a href="/submit" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <a href="/browse-requests" className="see-all-card">
                  <i className="fas fa-arrow-right"></i>
                  <h3>Discover More Requests</h3>
                </a>
              </div>
            </div>

            <div className="active-requests">
              <a href="/browse-requests" className="btn btn-large btn-outline">
                <i className="fas fa-comments"></i>See All Requests
              </a>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <div className="section-title">
              <h2>How Resource Requests Work</h2>
              <p>
                Our unique request feature connects you directly with teachers
                who can create exactly what you need
              </p>
            </div>
            <div className="process-steps">
              <div className="process-connector"></div>
              <div className="process-step">
                <div className="step-content">
                  <div className="step-number">1</div>
                  <h3>Describe Your Needs</h3>
                  <p>
                    Detail the resource you're looking for, including grade
                    level, subject, standards, and your budget range.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-content">
                  <div className="step-number">2</div>
                  <h3>Get Creator Proposals</h3>
                  <p>
                    Qualified teacher-creators will respond with proposals and
                    samples of their work.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-content">
                  <div className="step-number">3</div>
                  <h3>Select & Collaborate</h3>
                  <p>
                    Choose the best creator, provide feedback, and get a
                    resource tailored exactly to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-comparison">
          <div className="container">
            <div className="section-title">
              <h2>Everyone Wins with LessonLinks</h2>
              <p>Our request feature eliminates guesswork. Teachers get exactly what they need, and creators build resources that are guaranteed to deliver value.</p>
            </div>

            <div className="benefits-container">
              <div className="benefits-card teachers-card">
                <div className="card-header">
                  <h3><i className="fas fa-chalkboard-teacher"></i>Benefits for Teachers</h3>
                  <p>Get exactly what you need for your classroom without compromise</p>
                </div>
                <ul className="benefits-list">
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Get resources perfectly tailored to your curriculum and students' needs</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Save time by not having to modify generic resources</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Pay only for what you need, rather than buying packages with unused content</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Build relationships with creators who understand your teaching style</div>
                  </li>
                </ul>
              </div>

              <div className="benefits-card creators-card">
                <div className="card-header">
                  <h3><i className="fas fa-pencil-alt"></i>Benefits for Creators</h3>
                  <p>Turn your teaching expertise into a flexible, rewarding business</p>
                </div>
                <ul className="benefits-list">
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Create resources you know teachers actually want and need</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Build a client base for repeat business and referrals</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Develop new skills by tackling diverse project requests</div>
                  </li>
                  <li className="benefit-item">
                    <div className="check-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="benefit-text">Earn premium rates for custom work</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <a href="/request" className="floating-request-btn">
          <i className="fas fa-bullhorn"></i>Post Your Request
        </a>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
