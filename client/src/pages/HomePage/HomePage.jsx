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
                <div href="/browse-requests" className="request-card">
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
                      <span className="request-price">$30-45</span>
                      <a href="#" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div href="/browse-requests" className="request-card">
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
                      <span className="request-price">$25-35</span>
                      <a href="#" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div href="/browse-requests" className="request-card">
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
                      <span className="request-price">$40-60</span>
                      <a href="#" className="btn btn-primary">
                        Create This Resource
                      </a>
                    </div>
                  </div>
                </div>

                <div href="/browse-requests" className="request-card">
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
                      <span className="request-price">$35-50</span>
                      <a href="#" className="btn btn-primary">
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

        <section className="comparison">
          <div className="container">
            <div className="section-title">
              <h2>
                How LessonLinks{' '}
                <span className="highlight-text">Stands Out</span>
              </h2>
              <p>See what our resource request feature enables</p>
            </div>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>LessonLinks</th>
                  <th>Other Marketplaces</th>
                </tr>
              </thead>
              <tbody>
                <tr className="feature-highlight">
                  <td>
                    <strong>Custom Resource Requests</strong>
                  </td>
                  <td>
                    <i className="fas fa-check check-icon"></i> Post detailed
                    requests for exactly what you need
                  </td>
                  <td>
                    <i className="fas fa-times x-icon"></i> Limited to pre-made
                    resources only
                  </td>
                </tr>
                <tr className="feature-highlight">
                  <td>
                    <strong>Direct Creator Collaboration</strong>
                  </td>
                  <td>
                    <i className="fas fa-check check-icon"></i> Work directly
                    with creators on custom resources
                  </td>
                  <td>
                    <i className="fas fa-times x-icon"></i> Limited
                    communication with creators
                  </td>
                </tr>
                <tr className="feature-highlight">
                  <td>
                    <strong>Income Opportunities for Creators</strong>
                  </td>
                  <td>
                    <i className="fas fa-check check-icon"></i> Sell your
                    resources + fulfill custom requests
                  </td>
                  <td>
                    <i className="fas fa-check check-icon"></i> Sell your
                    resources only
                  </td>
                </tr>
              </tbody>
            </table>
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
