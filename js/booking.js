/**
 * HELEVATE.FIT — BOOKING, REFERRAL & LEAD CONVERSION ENGINE
 * Handles consultation bookings, society referrals, career applications,
 * form validation, confirmation states, and WhatsApp instant handoff.
 */

const BookingEngine = {
  init() {
    this.bindConsultationForm();
    this.bindReferralForm();
    this.bindCareersForm();
  },

  // 1. Primary Free Consultation Booking
  bindConsultationForm() {
    const form = document.getElementById("consultation-booking-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#booking-name").value.trim();
      const phone = form.querySelector("#booking-phone").value.trim();
      const society = form.querySelector("#booking-society").value.trim();
      const goal = form.querySelector("#booking-goal").value;
      const callTime = form.querySelector("#booking-time").value;
      const assessment = form.querySelector("#booking-assessment")?.value || "General Consultation";

      if (!name || !phone || !society) {
        window.showToast("Please fill in all required fields (Name, Phone, Society).", "error");
        return;
      }

      // Format WhatsApp prefilled message
      const msg = `Hello Helevate.fit team! I would like to book a Free Precision Health Consultation.%0A%0A👤 Name: ${encodeURIComponent(name)}%0A📱 Phone: ${encodeURIComponent(phone)}%0A🏢 Society/Community: ${encodeURIComponent(society)}%0A🎯 Primary Goal: ${encodeURIComponent(goal)}%0A🕒 Preferred Call Time: ${encodeURIComponent(callTime)}%0A🧬 Assessment Interest: ${encodeURIComponent(assessment)}`;
      const waUrl = `https://wa.me/919963960259?text=${msg}`;

      // Show success in modal
      const modalBody = document.getElementById("booking-modal-body");
      if (modalBody) {
        modalBody.innerHTML = `
          <div class="booking-success-container text-center" style="padding: 20px 0;">
            <div style="width: 64px; height: 64px; background: rgba(0, 229, 190, 0.15); border: 2px solid #00E5BE; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; color: #00E5BE; font-size: 1.8rem;">✓</div>
            <h3 style="font-size: 1.6rem; color: #FFFFFF; margin-bottom: 8px;">Consultation Request Received!</h3>
            <p style="color: var(--color-mint-light); margin-bottom: 24px; font-size: 0.95rem;">
              Thank you, <strong>${name}</strong>. Our Lead Performance Coach will contact you at <strong>${phone}</strong> during <strong>${callTime}</strong>.
            </p>
            <div style="background: rgba(8, 31, 51, 0.8); border: 1px solid rgba(0, 229, 190, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: left;">
              <h5 style="color: #00E5BE; margin-bottom: 6px; font-size: 0.9rem;">📍 Next Step: Direct WhatsApp Confirmation</h5>
              <p style="color: #A1BDCE; font-size: 0.85rem; margin-bottom: 14px;">You can instantly lock in your consultation calendar slot by connecting with Head Coach Harish on WhatsApp:</p>
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="width: 100%;">
                💬 Open WhatsApp Booking Chat →
              </a>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('booking-modal').classList.remove('active')">
              Close Window
            </button>
          </div>
        `;
      }

      window.showToast("Consultation booked successfully! Connecting to WhatsApp...", "success");
    });
  },

  // 2. "Bring Helevate to Your Community" Resident Referral Form
  bindReferralForm() {
    const form = document.getElementById("referral-portal-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const residentName = form.querySelector("#referral-name").value.trim();
      const residentPhone = form.querySelector("#referral-phone").value.trim();
      const societyName = form.querySelector("#referral-society").value.trim();
      const rwaContact = form.querySelector("#referral-rwa").value.trim() || "Not specified";

      if (!residentName || !residentPhone || !societyName) {
        window.showToast("Please enter your name, phone, and society name.", "error");
        return;
      }

      const msg = `Hello Helevate.fit team! I want to refer my gated community for Helevate services.%0A%0A👤 Resident: ${encodeURIComponent(residentName)}%0A📱 Contact: ${encodeURIComponent(residentPhone)}%0A🏢 Society: ${encodeURIComponent(societyName)}%0A📋 RWA Contact / Committee: ${encodeURIComponent(rwaContact)}`;
      const waUrl = `https://wa.me/919963960259?text=${msg}`;

      form.innerHTML = `
        <div style="background: rgba(0, 229, 190, 0.1); border: 1px solid #00E5BE; border-radius: 12px; padding: 24px; text-align: center;">
          <h4 style="color: #00E5BE; margin-bottom: 8px;">🎉 Thank You for the Referral!</h4>
          <p style="color: #F4FAF9; font-size: 0.9rem; margin-bottom: 16px;">
            We have registered <strong>${societyName}</strong> under your referral. Once onboarded, your <strong>Free Full Reassessment & 20% Membership Perk</strong> will be activated.
          </p>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            Notify Team via WhatsApp →
          </a>
        </div>
      `;

      window.showToast("Society referral registered successfully!", "success");
    });
  },

  // 3. Careers / Coach Application Form
  bindCareersForm() {
    const form = document.getElementById("career-application-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#career-name").value.trim();
      const phone = form.querySelector("#career-phone").value.trim();
      const role = form.querySelector("#career-role").value;
      const certs = form.querySelector("#career-certs").value.trim();

      if (!name || !phone) {
        window.showToast("Please provide your name and contact phone number.", "error");
        return;
      }

      const msg = `Hello Helevate Careers! I am applying for the ${encodeURIComponent(role)} role.%0A%0A👤 Candidate: ${encodeURIComponent(name)}%0A📱 Phone: ${encodeURIComponent(phone)}%0A📜 Certifications / Experience: ${encodeURIComponent(certs)}`;
      const waUrl = `https://wa.me/919963960259?text=${msg}`;

      const modalBody = document.getElementById("careers-modal-body");
      if (modalBody) {
        modalBody.innerHTML = `
          <div class="text-center" style="padding: 20px 0;">
            <div style="width: 60px; height: 60px; background: rgba(0, 229, 190, 0.15); border: 2px solid #00E5BE; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: #00E5BE; font-size: 1.6rem;">✓</div>
            <h3 style="color: #FFFFFF; font-size: 1.5rem; margin-bottom: 8px;">Application Submitted!</h3>
            <p style="color: var(--color-mint-light); font-size: 0.9rem; margin-bottom: 20px;">
              Thank you, <strong>${name}</strong>. Head Coach Harish will review your background for the <strong>${role}</strong> opening.
            </p>
            <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="margin-bottom: 12px; display: inline-flex;">
              Send Resume via WhatsApp →
            </a>
            <br>
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('careers-modal').classList.remove('active')">
              Close
            </button>
          </div>
        `;
      }

      window.showToast("Career application submitted!", "success");
    });
  }
};

window.BookingEngine = BookingEngine;
