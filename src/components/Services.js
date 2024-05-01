import React from "react";
import Fast_Booking from "../images/icons/fast.png";
import Collection from "../images/icons/collection.png";
import Insurance from "../images/icons/insurance.png";
import Map from "../images/icons/map.png";
import Pay from "../images/icons/pay.png";
import Support from "../images/icons/support.png";

const Services = () => {
  return (
    <div>
      <section class="we-offer-area text-center bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-heading text-center">
                <h2 className="heading-service">
                  Why Choose<span> US</span>?
                </h2>
              </div>
            </div>
          </div>
          <div class="row our-offer-items less-carousel">
            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-pen-fancy">
                  <img src={Fast_Booking} alt="" className="icon-image" />
                </i>
                <h4>Fast & Easy Booking</h4>
                <p>
                Streamlined cab booking platform offering quick reservations with just a few clicks for hassle-free travel experiences.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-dharmachakra">
                  <img src={Map} alt="" className="icon-image" />
                </i>
                <h4>Any Pickup Location</h4>
                <p>
                Easily input your pick-up location for seamless cab reservations, ensuring convenience from wherever you are.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tasks">
                  <img src={Pay} alt="" className="icon-image" />
                </i>
                <h4>No Booking Charges</h4>
                <p>
                Enjoy zero booking fees for every reservation, making your cab booking experience both economical and straightforward.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tachometer-alt">
                  <img src={Collection} alt="" className="icon-image" />
                </i>
                <h4>Free Maintenance</h4>
                <p>
                Experience worry-free rides with complimentary maintenance services, ensuring a smooth and reliable journey every time.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-recycle">
                  <img src={Insurance} alt="" className="icon-image" />
                </i>
                <h4>Fully Insured</h4>
                <p>
                Travel with peace of mind knowing every ride is fully insured, prioritizing your safety and security throughout your journey.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-headset">
                  <img src={Support} alt="" className="icon-image" />
                </i>
                <h4>24/7 Support</h4>
                <p>
                Get round-the-clock assistance for any inquiries or concerns, ensuring uninterrupted support throughout your travel experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
