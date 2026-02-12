"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

const folderNavItems = [
  { label: "PRIVATE", href: "/private", active: true },
  { label: "CORPORATE", href: "/corporate", active: false },
  { label: "OUR CORPORATE MEMBERS", href: "/our-corporate-members", active: false },
];

export default function PrivateMembershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Dark Header Background */}
      <div className="bg-[#1F1F1F]">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Folder Navigation Sidebar */}
            <aside className="lg:w-56 flex-shrink-0">
              <nav>
                <h2 className="text-[#3D9991] text-lg font-body mb-4 lowercase">
                  membership
                </h2>
                <ul className="space-y-3">
                  {folderNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-xs tracking-widest uppercase transition-colors ${
                          item.active
                            ? "text-[#1F1F1F] font-semibold"
                            : "text-gray-500 hover:text-[#1F1F1F]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1">
              <article className="max-w-2xl">
                <h1 className="font-heading text-3xl lg:text-4xl text-[#1F1F1F] mb-8">
                  New Membership
                </h1>

                <div className="space-y-6 font-body text-[#444444] leading-relaxed">
                  <p>
                    <strong>How do I become a member?</strong>
                    <br />
                    Pay your membership fee of CHF 21 on-chain to the Bitcoin Association Switzerland&apos;s wallet address:
                  </p>

                  <p className="font-semibold text-[#1F1F1F]">
                    bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                  </p>

                  <p>
                    Once payment is confirmed on-chain, go to the membership form submission page:
                  </p>

                  <p>
                    <a
                      href="https://bas.webling.ch/forms/memberform/f498cc5816d258744c98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D9991] hover:underline font-semibold"
                    >
                      https://bas.webling.ch/forms/memberform/f498cc5816d258744c98
                    </a>
                  </p>

                  <p>
                    Fill out the form in its entirety, entering your Transaction ID and, optionally, your Telegram handle to be added to the BAS members group.
                  </p>

                  <p>
                    We will send you a confirmation that your membership has been confirmed.
                  </p>

                  <p className="font-semibold text-[#1F1F1F]">
                    No membership fees are returned if you fail to provide sufficient information.
                  </p>

                  <p className="font-semibold text-[#1F1F1F]">
                    What about corporate members?
                  </p>

                  <p>
                    If you already are a corporate member (with your logo{" "}
                    <a
                      href="https://www.bitcoinassociation.ch/our-corporate-members"
                      className="text-[#3D9991] hover:underline"
                    >
                      here
                    </a>
                    ) and your membership is expired, you can complete the renewal payment and send us an email application with all the information indicated (Name, TransactionID, number of years paid etc.) at{" "}
                    <a
                      href="mailto:info@bitcoinassociation.ch"
                      className="text-[#3D9991] hover:underline"
                    >
                      info@bitcoinassociation.ch
                    </a>
                    , the corporate membership fee is CHF 380.
                  </p>

                  <p>
                    If you are not a corporate member yet, you can send an application to{" "}
                    <a
                      href="mailto:info@bitcoinassociation.ch"
                      className="text-[#3D9991] hover:underline"
                    >
                      info@bitcoinassociation.ch
                    </a>{" "}
                    where you introduce your company and explain how you are connected to the Swiss ecosystem.
                  </p>

                  <p>
                    You will hear back within 14 days whether you&apos;ve been accepted or not. Once you have received confirmation that you have been accepted, you will need to send the equivalent of at least CHF 380 to the Bitcoin Association Switzerland&apos;s wallet:
                  </p>

                  <p className="font-semibold text-[#1F1F1F]">
                    bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                  </p>

                  <p>
                    followed by an email to the two addresses mentioned stating your Transaction ID.
                  </p>

                  <p>
                    Once we confirm receipt of the funds, you can send us the logo to be added to the website.
                  </p>

                  <p>
                    The process is also outlined{" "}
                    <a
                      href="https://www.bitcoinassociation.ch/corporate"
                      className="text-[#3D9991] hover:underline"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </article>
            </div>
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
