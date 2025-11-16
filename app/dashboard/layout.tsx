"use client";

import React, { useState } from "react";
import DashboardSidebar from "./components/sidebar";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar className="sticky top-0 z-50 h-20" />

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="md:ml-64">

        {/* Page Content */}
        <main className="p-4 min-h-screen bg-beige/50">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
