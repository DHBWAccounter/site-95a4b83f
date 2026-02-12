import type { Metadata } from "next";
import { Header } from "@/components/header";
import { NewsSidebar } from "@/components/news-sidebar";
import { ArchiveContent } from "@/components/archive-content";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Archive — Bitcoin Association Switzerland",
  description: "Archive of news and updates from Bitcoin Association Switzerland.",
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with dark background */}
      <div className="bg-[#1a1a1a]">
        <Header />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <NewsSidebar />

          {/* Archive Content */}
          <div className="flex-1">
            <ArchiveContent />
          </div>
        </div>
      </main>

      {/* PreFooter */}
      <PreFooter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
