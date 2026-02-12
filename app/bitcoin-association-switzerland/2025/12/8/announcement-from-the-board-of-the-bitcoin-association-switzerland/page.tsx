"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { NewsSidebar } from "@/components/news-sidebar";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";
import { ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex gap-12">
            {/* Sidebar */}
            <NewsSidebar />

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Meta info */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">
                  <Link
                    href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Phil Lojacono
                  </Link>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  <Link
                    href="/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland"
                    className="hover:text-gray-600"
                  >
                    27 October 2024
                  </Link>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-heading text-gray-800 mb-8 leading-tight">
                <Link
                  href="/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland"
                  className="hover:text-gray-600"
                >
                  Announcement from the Board of the Bitcoin Association Switzerland
                </Link>
              </h1>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none font-body text-gray-700 space-y-6">
                <p>
                  <strong>Dear Members of Bitcoin Association Switzerland,</strong>
                </p>

                <p>
                  We are excited to share our first update with you as your newly appointed board. We recently held our first board meeting, and we want to ensure transparent communication with all of you as we begin this journey together.
                </p>

                <p>
                  The board met for the first time on Friday, October 18th, for a half-day session. We&apos;d like to share our perspective on the current state of the association and what transpired since the General Assembly on October 5th, 2024.
                </p>

                <p>
                  As most of you know, the newly constituted board is composed entirely of new members, none of whom have previously served. We are honored by the trust you have given us and are fully committed to the work ahead. Since the Extraordinary General Assembly and board election, we have been onboarding and familiarizing ourselves with the association&apos;s affairs, a process that will continue over the coming months.
                </p>

                <p>
                  Here&apos;s what you can expect moving forward:
                </p>

                <p>
                  <strong>1. Quarterly written updates (minimum):</strong>
                  <br />
                  We are committed to keeping you informed. Moving forward, we&apos;ll provide a quarterly summary of our decisions and activities. This will include updates on our progress and our decision-making process, ensuring transparency within the association.
                </p>

                <p>
                  <strong>2. Decision-making protocols:</strong>
                  <br />
                  We aim to make our decision-making process transparent. Any major decisions will be clearly communicated to the community, with opportunities for member input and, where appropriate, votes on key issues.
                </p>

                <p>
                  <strong>3. Bi-weekly board meetings:</strong>
                  <br />
                  Recognizing the amount of work needing to be addressed, the board will now meet every 14 days to stay on track with our priorities and goals.
                </p>

                <p>
                  <strong>4. Focus on key priorities:</strong>
                  <br />
                  We&apos;re focusing on several key priorities that, while not exhaustive, are of primary importance:
                </p>

                <p className="pl-6">
                  <strong>• Priority 1:</strong> Organizing essential administrative tasks, such as platform and membership management, and enhancing internal processes and tools. This includes establishing a Bitcoin infrastructure for the association, including the Lightning Network where applicable.
                </p>

                <p className="pl-6">
                  <strong>• Priority 2:</strong> Activating and growing the membership base across Switzerland. This will include a &quot;BAS Roadshow&quot; starting in January 2025, with monthly meetups across different cities to connect with stakeholders.
                </p>

                <p className="pl-6">
                  <strong>• Priority 3:</strong> Building a vibrant community across Switzerland by organizing events, meetups, forums, and quarterly keynote speakers, ensuring representation from the association.
                </p>

                <p className="pl-6">
                  <strong>• Priority 4:</strong> Defining roles and responsibilities of board members. This process is partially complete and will be communicated later this year.
                </p>

                <p>
                  <strong>5. Working groups and community involvement:</strong>
                  <br />
                  We intend to establish working groups focused on technical, legal, and other aspects. With only four board members, we welcome broad engagement from the membership. We encourage all members who wish to play an active role to get involved, as our goal is to decentralize work and decision-making.
                </p>

                <p>
                  <strong>6. New member-only Telegram group:</strong>
                  <br />
                  A Telegram group exclusively for members will be launched to serve as a platform for updates, discussions, and community engagement. To support this, we will be improving our membership administration to ensure only registered members have access. We&apos;ll also update the administration guidelines of the &quot;Bitcoin Switzerland&quot; Telegram group and discuss the future of the &quot;Altcoins Switzerland&quot; channel.
                </p>

                <p>
                  <strong>7. Announcements across platforms:</strong>
                  <br />
                  Major announcements will be shared in the Telegram group, on the website, and via email to ensure all members have access to important updates and can engage with the board and the community.
                </p>

                <p>
                  <strong>8. General Assembly before year-end:</strong>
                  <br />
                  We commit to holding a General Assembly before the end of this year (2024). Details will be announced soon, offering a valuable opportunity for members to connect and discuss the association&apos;s future. The assembly will address updates to the association&apos;s by-laws, mission statement, focus, and operational improvements.
                </p>

                <p>***</p>

                <p>
                  As the board has just begun its work, we kindly ask for your patience as we organize our membership list and handle foundational administrative tasks that are critical to a functioning association. We are committed to building a stronger, more engaged community, and ultimately a thriving association. We look forward to working with you all to advance the goals of Bitcoin Association Switzerland.
                </p>

                <p>
                  Thank you for your support. Vires in Numeris.
                </p>

                <p>
                  Sincerely,
                </p>

                <p>
                  <strong>The BAS Board</strong>
                  <br />
                  <strong>ADRIANO BERTINI</strong>
                  <br />
                  Head of Strategy - Ledger Enterprise
                </p>

                <p>
                  <strong>LISA TSCHERRY</strong>
                  <br />
                  MSc in Blockchain & Digital Currency, Founder of SatoShe
                </p>

                <p>
                  <strong>PHIL LOJACONO</strong>
                  <br />
                  CEO & Co-Founder Berglinde AG
                </p>

                <p>
                  <strong>NIKLAS NIKOLAJSEN</strong>
                  <br />
                  President of the Bitcoin Association Switzerland
                </p>

                <p>
                  <Link
                    href="https://www.bitcoinassociation.ch/s/BAS_Announcement_Oct27th2024-xxmm.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a7a7d] hover:underline"
                  >
                    Download PDF of announcement here
                  </Link>
                </p>
              </div>

              {/* Like and Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  <Heart size={14} className="text-red-500" />
                  <span>0 Likes</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  <Share size={14} />
                  <span>Share</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Comments (0)
                  </h3>
                  <span className="text-sm text-gray-500">Newest First</span>
                </div>

                {/* Comment Form */}
                <div className="bg-white border border-gray-200 rounded">
                  <textarea
                    className="w-full p-4 resize-none outline-none text-gray-700 text-sm"
                    rows={4}
                    placeholder="Leave a comment here."
                  />
                  <div className="flex items-center justify-end gap-3 px-4 py-2 border-t border-gray-200 bg-gray-50 rounded-b">
                    <span className="text-xs text-gray-500">Preview</span>
                    <button className="px-4 py-2 bg-gray-700 text-white text-xs uppercase tracking-wider rounded hover:bg-gray-800 transition-colors">
                      Post Comment…
                    </button>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <nav className="flex justify-between items-start mt-12 pt-8 border-t border-gray-200">
                <div className="flex-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Newer Post
                  </span>
                  <Link
                    href="/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future"
                    className="text-[#1a7a7d] hover:underline text-sm"
                  >
                    Bitcoin Association Switzerland appoints new board, sets bold vision for the future
                  </Link>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Older Post
                  </span>
                  <Link
                    href="/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii"
                    className="text-[#1a7a7d] hover:underline text-sm"
                  >
                    Prudential Treatment of Cryptoasset Exposures II
                  </Link>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
