import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PreFooter } from "@/components/pre-footer";
import { MembershipSidebar } from "@/components/membership-sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate membership — Bitcoin Association Switzerland",
  description: "Corporate membership information for Bitcoin Association Switzerland",
};

export default function CorporatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-12">
            {/* Sidebar */}
            <MembershipSidebar />
            
            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="font-serif text-3xl text-gray-900 mb-8">
                Corporate Member
              </h1>
              
              <div className="space-y-6 font-body text-gray-700 leading-relaxed">
                <section>
                  <h2 className="font-semibold text-gray-900 mb-2">
                    How do I become a member?
                  </h2>
                  <p>
                    To apply for membership, please send us a short email with your logo to{" "}
                    <a 
                      href="mailto:info@bitcoinassociation.ch" 
                      className="text-[#1a7a7d] hover:underline"
                    >
                      info@bitcoinassociation.ch
                    </a>{" "}
                    about your motivation, the company name and address.
                  </p>
                  <p className="mt-4">
                    Anyone is allowed to join. However, only members who reside in Switzerland are eligible to vote.
                  </p>
                </section>

                <section>
                  <h2 className="font-semibold text-gray-900 mb-2">
                    What&apos;s the membership fee?
                  </h2>
                  <p>
                    The membership fee is 380 CHF in Bitcoin per calendar year.
                  </p>
                  <p className="mt-2">
                    Payment of membership fees shall be made to Bitcoin Association Switzerland&apos;s wallet:
                  </p>
                  <p className="mt-2 font-semibold text-gray-900 break-all">
                    bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                  </p>
                </section>

                <section>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    What are the benefits of being a member?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Featured on our website</li>
                    <li>Allowed to share some company-related news with our community in our Telegram chat groups</li>
                    <li>Allowed to put our logo on your website</li>
                    <li>Support the Bitcoin adoption, education and development</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
