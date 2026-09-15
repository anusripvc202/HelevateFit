/**
 * HELEVATE — API & LOCAL STATE SERVICE LAYER
 * Provides clean separation between UI components and backend data persistence.
 * Uses LocalStorage for seamless client-side session management.
 */

const STORAGE_KEYS = {
  USER: "helevate_user_session",
  APPOINTMENTS: "helevate_user_appointments",
  PROFILE: "helevate_user_profile"
};

const DEFAULT_USER = {
  id: "user_demo_01",
  name: "Rahul M.",
  email: "rahul.m@example.com",
  phone: "+91 98765 43210",
  society: "My Home Bhooja, Hyderabad",
  primaryGoal: "Metabolic Transformation & Longevity",
  memberSince: "July 2026",
  status: "Active Precision Member"
};

const INITIAL_APPOINTMENTS = [
  {
    id: "apt_101",
    service: "Quarterly DEXA Body Scan Checkpoint",
    expert: "Harish P (Head Coach)",
    date: "2026-09-18",
    time: "08:30 AM",
    location: "Society Clubhouse Wellness Suite",
    status: "Confirmed",
    type: "Assessment"
  },
  {
    id: "apt_102",
    service: "Biomarker & Nutrition Review",
    expert: "Dr. Ananya Sharma (Clinical Nutrition Lead)",
    date: "2026-09-22",
    time: "06:00 PM",
    location: "Virtual Clinical Video Session",
    status: "Confirmed",
    type: "Consultation"
  },
  {
    id: "apt_100",
    service: "Baseline Metabolic Health Panel",
    expert: "Diagnostics Team",
    date: "2026-06-15",
    time: "07:30 AM",
    location: "Home / Clubhouse Sample Collection",
    status: "Completed",
    type: "Completed"
  }
];

const ApiService = {
  // 1. Authentication Service
  auth: {
    getCurrentUser() {
      const stored = localStorage.getItem(STORAGE_KEYS.USER);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          return null;
        }
      }
      return null;
    },

    login(email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!email || !email.includes("@")) {
            reject(new Error("Please provide a valid email address."));
            return;
          }
          if (!password || password.length < 4) {
            reject(new Error("Password must be at least 4 characters."));
            return;
          }
          const user = { ...DEFAULT_USER, email: email };
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          resolve(user);
        }, 350);
      });
    },

    signup(name, email, phone, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!name || !email || !phone) {
            reject(new Error("Please fill in all required fields."));
            return;
          }
          const user = {
            id: "user_" + Date.now(),
            name: name,
            email: email,
            phone: phone,
            society: "Hyderabad Gated Community",
            primaryGoal: "Personal Health Optimization",
            memberSince: "September 2026",
            status: "New Member"
          };
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          resolve(user);
        }, 350);
      });
    },

    logout() {
      localStorage.removeItem(STORAGE_KEYS.USER);
      return Promise.resolve(true);
    },

    isLoggedIn() {
      return !!this.getCurrentUser();
    }
  },

  // 2. Profile Management
  profile: {
    get() {
      const user = ApiService.auth.getCurrentUser() || DEFAULT_USER;
      return Promise.resolve(user);
    },

    update(updatedFields) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const current = ApiService.auth.getCurrentUser() || DEFAULT_USER;
          const merged = { ...current, ...updatedFields };
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(merged));
          resolve(merged);
        }, 300);
      });
    }
  },

  // 3. Appointments Management
  appointments: {
    getAll() {
      const stored = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      if (stored) {
        try {
          return Promise.resolve(JSON.parse(stored));
        } catch (e) {
          return Promise.resolve(INITIAL_APPOINTMENTS);
        }
      }
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(INITIAL_APPOINTMENTS));
      return Promise.resolve(INITIAL_APPOINTMENTS);
    },

    create(appointmentData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!appointmentData.service || !appointmentData.date || !appointmentData.time) {
            reject(new Error("Missing required appointment parameters."));
            return;
          }

          ApiService.appointments.getAll().then((list) => {
            const newApt = {
              id: "apt_" + Date.now(),
              service: appointmentData.service,
              expert: appointmentData.expert || "Helevate Lead Coach",
              date: appointmentData.date,
              time: appointmentData.time,
              location: appointmentData.society || "Society Clubhouse Gym",
              status: "Confirmed",
              type: appointmentData.type || "Coaching Session"
            };

            const updated = [newApt, ...list];
            localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(updated));
            resolve(newApt);
          });
        }, 400);
      });
    },

    cancel(appointmentId) {
      return new Promise((resolve) => {
        ApiService.appointments.getAll().then((list) => {
          const updated = list.map((a) => (a.id === appointmentId ? { ...a, status: "Cancelled" } : a));
          localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(updated));
          resolve(true);
        });
      });
    }
  },

  // 4. Reports Service
  reports: {
    getLatest() {
      return Promise.resolve(HELEVATE_DATA.sampleReport);
    },

    getAllHistory() {
      return Promise.resolve([
        {
          id: "rep_2026_q3",
          title: "90-Day Metabolic & DEXA Checkpoint Report",
          date: "September 2026",
          score: 88,
          status: "Optimal Progression",
          type: "Comprehensive Protocol"
        },
        {
          id: "rep_2026_q2",
          title: "Baseline Comprehensive Biomarker Panel",
          date: "June 2026",
          score: 64,
          status: "Baseline Established",
          type: "Metabolic Diagnostic"
        }
      ]);
    }
  },

  // 5. Contact / Lead Submission
  contact: {
    send(formData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!formData.name || !formData.email || !formData.message) {
            reject(new Error("Please provide your name, email, and message."));
            return;
          }
          resolve({ success: true, timestamp: Date.now() });
        }, 400);
      });
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ApiService;
}
