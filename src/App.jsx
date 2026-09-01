import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ConsultationModal from './components/layout/ConsultationModal';
import BrandReveal from './components/layout/BrandReveal';

import Home from './pages/Home';
import Occasions from './pages/Occasions';
import MenuDiscovery from './pages/MenuDiscovery';
import EventPlanner from './pages/EventPlanner';
import CheckBooking from './pages/CheckBooking';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedMenuDraft, setSelectedMenuDraft] = useState([
    'Hyderabadi Shahi Zafrani Mutton Biryani',
    'Nizami Shikampuri Kebab',
    'Live Chat Chatpati Counter'
  ]);
  const [createdBookingId, setCreatedBookingId] = useState('');

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home
            setActivePage={setActivePage}
            openConsultation={() => setConsultationOpen(true)}
          />
        );
      case 'occasions':
        return (
          <Occasions
            setActivePage={setActivePage}
            openConsultation={() => setConsultationOpen(true)}
          />
        );
      case 'menu':
        return (
          <MenuDiscovery
            setActivePage={setActivePage}
            selectedMenuDraft={selectedMenuDraft}
            setSelectedMenuDraft={setSelectedMenuDraft}
          />
        );
      case 'planner':
        return (
          <EventPlanner
            setActivePage={setActivePage}
            selectedMenuDraft={selectedMenuDraft}
            setSelectedMenuDraft={setSelectedMenuDraft}
            setCreatedBookingId={(id) => {
              setCreatedBookingId(id);
            }}
          />
        );
      case 'tracker':
        return (
          <CheckBooking
            createdBookingId={createdBookingId}
          />
        );
      default:
        return (
          <Home
            setActivePage={setActivePage}
            openConsultation={() => setConsultationOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-secondary selection:text-white">
      {/* 2.5-Second Luxury Opening Brand Reveal Overlay */}
      <BrandReveal />

      {/* Top Main Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openConsultation={() => setConsultationOpen(true)}
      />

      {/* Dynamic View Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Main Editorial Footer */}
      <Footer
        setActivePage={setActivePage}
        openConsultation={() => setConsultationOpen(true)}
      />

      {/* Global Direct Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
