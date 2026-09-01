const MOCK_BOOKINGS = [
  {
    bookingId: 'DPL-2026-8942',
    customerName: 'Siddharth & Ananya Reddy',
    phone: '9849012345',
    email: 'siddharth.reddy@example.com',
    occasion: 'Grand Wedding & Reception',
    eventDate: '2026-11-18',
    eventTime: 'Dinner (7:30 PM – 11:00 PM)',
    guestCount: 650,
    venue: 'Taj Falaknuma Palace, Hyderabad',
    serviceStyle: 'Royal Buffet & 4 Live Chef Stations',
    status: 'confirmed', // 'confirmed', 'pending', 'updated', 'issue', 'completed'
    currentStep: 4, // 1: Submitted, 2: Consultation, 3: Menu Finalized, 4: Tastings Done, 5: Team Assigned, 6: Event Ready, 7: Completed
    timeline: [
      { step: 1, title: 'Enquiry Received', date: '2026-08-10', completed: true },
      { step: 2, title: 'Consultation & Venue Audit', date: '2026-08-14', completed: true },
      { step: 3, title: 'Bespoke Menu Finalized', date: '2026-08-22', completed: true },
      { step: 4, title: 'Royal Food Tasting Completed', date: '2026-08-30', completed: true },
      { step: 5, title: 'Culinary Team & Crew Deployed', date: '2026-11-10', completed: false },
      { step: 6, title: 'Event Day Execution', date: '2026-11-18', completed: false }
    ],
    menuSelections: [
      'Hyderabadi Shahi Zafrani Mutton Biryani',
      'Nizami Shikampuri Kebab',
      'Live Nizam Flambé Kebab Bar',
      'Dal Deewan-e-Khas',
      'Shahi Tukda & Warm Rabri'
    ],
    estimatedTotal: 617500,
    currency: 'INR',
    assignedChef: 'Chef Mir Zeeshan Ali',
    notes: 'Special request for Jain veg counter on Left Wing. Silver thali arrangements confirmed for 50 VVIP guests.',
    updates: [
      { date: '2026-08-30', note: 'Food tasting completed at Jubilee Hills kitchen. Saffron rabri sweetness level approved.' },
      { date: '2026-08-22', note: 'Menu contract signed. Locked 650 guests scale.' }
    ]
  },
  {
    bookingId: 'DPL-2026-4109',
    customerName: 'Dr. Vikram Varma',
    phone: '9701298765',
    email: 'v.varma@medtech.in',
    occasion: 'Annual Healthcare Corporate Gala',
    eventDate: '2026-10-05',
    eventTime: 'Dinner (7:00 PM – 10:30 PM)',
    guestCount: 300,
    venue: 'HICC Novotel Convention Center, Madhapur',
    serviceStyle: 'Plated 5-Course Dinner',
    status: 'pending',
    currentStep: 2,
    timeline: [
      { step: 1, title: 'Enquiry Received', date: '2026-08-28', completed: true },
      { step: 2, title: 'Consultation & Proposal Review', date: '2026-09-02', completed: true },
      { step: 3, title: 'Menu Customization', date: 'Pending', completed: false },
      { step: 4, title: 'Tasting & Contract Sign-off', date: 'Pending', completed: false },
      { step: 5, title: 'Team Assignment', date: 'Pending', completed: false },
      { step: 6, title: 'Gala Execution', date: 'Pending', completed: false }
    ],
    menuSelections: [
      'Murg Angara Tikka',
      'Paneer Makhani Saffron Gravy',
      'Live Chat Chatpati Counter',
      'Khubani Ka Meetha'
    ],
    estimatedTotal: 255000,
    currency: 'INR',
    assignedChef: 'Chef Farhan Qureshi',
    notes: 'Awaiting venue approval for live flambé setup.',
    updates: [
      { date: '2026-09-02', note: 'Proposal document sent to Dr. Varma. Executive chef assigned for technical venue audit.' }
    ]
  },
  {
    bookingId: 'DPL-2026-9901',
    customerName: 'Kavitha & Rajesh Sharma',
    phone: '9885098850',
    email: 'rajesh.sharma@example.com',
    occasion: 'Gruhapravesam & Satvik Feast',
    eventDate: '2026-09-25',
    eventTime: 'Lunch (12:00 PM – 3:00 PM)',
    guestCount: 180,
    venue: 'Villa 42, Palm Meadows, Jubilee Hills',
    serviceStyle: 'Pure Satvik Veg Banana Leaf Feasts',
    status: 'updated',
    currentStep: 3,
    timeline: [
      { step: 1, title: 'Enquiry Received', date: '2026-08-15', completed: true },
      { step: 2, title: 'Satvik Menu Finalized', date: '2026-08-20', completed: true },
      { step: 3, title: 'Guest Count Scale Updated', date: '2026-09-01', completed: true },
      { step: 4, title: 'Kitchen Prep Scheduled', date: '2026-09-24', completed: false },
      { step: 5, title: 'Morning Delivery & Setup', date: '2026-09-25', completed: false }
    ],
    menuSelections: [
      'Dum Pukht Hyderabadi Veg Biryani',
      'Dal Deewan-e-Khas',
      'Classic Avakai & Curd Rice Station',
      'Shahi Tukda & Warm Rabri'
    ],
    estimatedTotal: 153000,
    currency: 'INR',
    assignedChef: 'Ustad Venkat Raman',
    notes: '100% Satvik preparation. Zero onion/garlic for morning pooja prasad.',
    updates: [
      { date: '2026-09-01', note: 'Guest count updated from 150 to 180. Additional banana leaf servers assigned.' }
    ]
  },
  {
    bookingId: 'DPL-2026-1102',
    customerName: 'Dr. Farooq Ali Khan',
    phone: '9849099999',
    email: 'farooq.khan@example.com',
    occasion: 'Sangeet & Royal Family Feast',
    eventDate: '2026-07-15',
    eventTime: 'Dinner (8:00 PM – 11:30 PM)',
    guestCount: 250,
    venue: 'Royal Manor, Banjara Hills Road 12',
    serviceStyle: 'Royal Buffet & Live Kebabs',
    status: 'completed',
    currentStep: 6,
    timeline: [
      { step: 1, title: 'Enquiry Received', date: '2026-06-01', completed: true },
      { step: 2, title: 'Menu Finalized', date: '2026-06-10', completed: true },
      { step: 3, title: 'Food Tasting Done', date: '2026-06-20', completed: true },
      { step: 4, title: 'Team Deployed', date: '2026-07-14', completed: true },
      { step: 5, title: 'Event Day Execution', date: '2026-07-15', completed: true },
      { step: 6, title: 'Event Successfully Completed', date: '2026-07-16', completed: true }
    ],
    menuSelections: [
      'Hyderabadi Shahi Zafrani Mutton Biryani',
      'Nizami Shikampuri Kebab',
      'Mirchi Ka Salan & Double Raita',
      'Khubani Ka Meetha'
    ],
    estimatedTotal: 262500,
    currency: 'INR',
    assignedChef: 'Chef Mir Zeeshan Ali',
    notes: 'Punctual delivery confirmed. Rating received: 5.0 Stars.',
    updates: [
      { date: '2026-07-16', note: 'Patron provided 5-star review rating. Event marked completed.' }
    ]
  },
  {
    bookingId: 'DPL-2026-3304',
    customerName: 'Suresh Kumar',
    phone: '9949011111',
    email: 'suresh.k@example.com',
    occasion: 'Anniversary Dinner',
    eventDate: '2026-09-10',
    eventTime: 'Dinner (8:00 PM – 10:30 PM)',
    guestCount: 80,
    venue: 'Gachibowli Gated Community Clubhouse',
    serviceStyle: 'Buffet Service',
    status: 'issue',
    currentStep: 2,
    timeline: [
      { step: 1, title: 'Enquiry Received', date: '2026-08-20', completed: true },
      { step: 2, title: 'Venue Permit Under Review', date: '2026-08-25', completed: true },
      { step: 3, title: 'Awaiting Venue Approval', date: 'Pending', completed: false }
    ],
    menuSelections: [
      'Paneer Makhani Saffron Gravy',
      'Murg Angara Tikka',
      'Shahi Tukda'
    ],
    estimatedTotal: 76000,
    currency: 'INR',
    assignedChef: 'Chef Rajesh Nair',
    notes: 'Clubhouse management requires external kitchen clearance certificate.',
    updates: [
      { date: '2026-08-25', note: 'Catering team submitted FSSAI license copy to venue office. Awaiting clearance.' }
    ]
  }
];

const STORAGE_KEY = 'deepali_caterers_bookings';

export function getStoredBookings() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to parse local storage bookings', e);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_BOOKINGS));
  return MOCK_BOOKINGS;
}

export function secureVerifyBooking(bookingIdInput, phoneInput) {
  if (!bookingIdInput) return { status: 'MISSING_ID' };

  const cleanId = bookingIdInput.trim().toUpperCase();
  const cleanPhone = phoneInput ? phoneInput.replace(/\D/g, '') : '';
  const bookings = getStoredBookings();

  // Find booking by ID
  const foundById = bookings.find(b => b.bookingId.toUpperCase() === cleanId);

  if (!foundById) {
    return { status: 'NOT_FOUND', booking: null };
  }

  // Verify Phone Number Match
  if (cleanPhone) {
    const targetPhone = foundById.phone.replace(/\D/g, '');
    if (!targetPhone.includes(cleanPhone) && !cleanPhone.includes(targetPhone)) {
      return { status: 'VERIFICATION_FAILED', booking: null, hint: `Phone ending in ***${foundById.phone.slice(-4)}` };
    }
  }

  return { status: 'VERIFIED', booking: foundById };
}

export function saveNewBooking(bookingData) {
  const bookings = getStoredBookings();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newBookingId = `DPL-2026-${randomSuffix}`;
  
  const formattedBooking = {
    bookingId: newBookingId,
    customerName: bookingData.name || 'Valued Guest',
    phone: bookingData.phone ? bookingData.phone.replace(/\D/g, '') : '9849012345',
    email: bookingData.email || 'guest@eventhost.in',
    occasion: bookingData.occasion || 'Private Event',
    eventDate: bookingData.eventDate || new Date().toISOString().split('T')[0],
    eventTime: bookingData.venue && bookingData.venue.includes('(') ? bookingData.venue.split('(')[1].replace(')', '') : 'Dinner (7:30 PM)',
    guestCount: Number(bookingData.guestCount) || 100,
    venue: bookingData.venue || 'Hyderabad',
    serviceStyle: bookingData.serviceStyle || 'Royal Buffet',
    status: 'confirmed',
    currentStep: 4,
    timeline: [
      { step: 1, title: 'Enquiry Received', date: new Date().toISOString().split('T')[0], completed: true },
      { step: 2, title: 'Consultation & Proposal', date: new Date().toISOString().split('T')[0], completed: true },
      { step: 3, title: 'Bespoke Menu Selection', date: new Date().toISOString().split('T')[0], completed: true },
      { step: 4, title: 'Tasting & Chef Assigned', date: 'In Progress', completed: true },
      { step: 5, title: 'Crew & Kitchen Deployment', date: 'Pending', completed: false },
      { step: 6, title: 'Event Execution', date: bookingData.eventDate || 'Pending', completed: false }
    ],
    menuSelections: bookingData.selectedItems || ['Hyderabadi Shahi Zafrani Mutton Biryani', 'Nizami Shikampuri Kebab', 'Live Chat Chatpati Counter'],
    estimatedTotal: Number(bookingData.guestCount || 100) * 1050,
    currency: 'INR',
    assignedChef: 'Chef Mir Zeeshan Ali',
    notes: bookingData.specialRequests || 'Standard royal catering package requested.',
    updates: [
      { date: new Date().toISOString().split('T')[0], note: 'Booking confirmed and recorded in Jubilee Hills database.' }
    ]
  };

  const updatedBookings = [formattedBooking, ...bookings];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
  } catch (e) {
    console.error('Failed to save booking to storage', e);
  }
  return formattedBooking;
}
