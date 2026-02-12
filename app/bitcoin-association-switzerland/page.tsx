"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { NewsSidebar } from "@/components/news-sidebar";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

// Blog post data
const blogPosts = [
  {
    id: "1",
    author: "kronrod",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=59025f1030454480d862303f",
    date: "9 December 2025",
    category: "Uncategorized",
    categoryUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/category/Uncategorized",
    title: "Bitcoin in 10vor10",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10",
    excerpt: "Bitcoin in 10vor10\nA long 10vor10 segment about Bitcoin. Well done.",
    comments: 1,
    likes: 0,
  },
  {
    id: "2",
    author: "kronrod",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=59025f1030454480d862303f",
    date: "9 December 2025",
    category: "Uncategorized",
    categoryUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/category/Uncategorized",
    title: "Marc Faber points readers to Bitcoin",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin",
    excerpt: "Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled \"Dispelling the Myths of Bitcoin\" and written by Lee Robinson from Atlana wealth...",
    comments: 0,
    likes: 1,
  },
  {
    id: "3",
    author: "Phil Lojacono",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8",
    date: "31 May 2025",
    category: null,
    categoryUrl: null,
    title: "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/-",
    excerpt: "The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland...",
    comments: 0,
    likes: 0,
  },
  {
    id: "4",
    author: "Phil Lojacono",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8",
    date: "28 February 2025",
    category: null,
    categoryUrl: null,
    title: "Bitcoin Association Switzerland Welcomes the Federal Council's Endorsement of Enhanced Bitcoin Regulation",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation",
    excerpt: "The Bitcoin Association Switzerland, in collaboration with key stakeholders such as the Swiss Blockchain Federation, welcomes the Federal Council's acceptance of a motion and the positive answer to an interpellation introduced by National Councilor Benjamin Fischer...",
    comments: 0,
    likes: 0,
    tags: ["Regulation"],
  },
  {
    id: "5",
    author: "Phil Lojacono",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8",
    date: "13 November 2024",
    category: null,
    categoryUrl: null,
    title: "Bitcoin Association Switzerland appoints new board, sets bold vision for the future",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future",
    excerpt: "Bitcoin Association Switzerland (BAS) is proud to announce the appointment of a new board, marking a fresh chapter in its long-standing commitment to Bitcoin advocacy and innovation...",
    comments: 0,
    likes: 0,
  },
  {
    id: "6",
    author: "Phil Lojacono",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8",
    date: "27 October 2024",
    category: null,
    categoryUrl: null,
    title: "Announcement from the Board of the Bitcoin Association Switzerland",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland",
    excerpt: "Dear Members of Bitcoin Association Switzerland,\n\nWe are excited to share our first update with you as your newly appointed board. We recently held our first board meeting...",
    comments: 0,
    likes: 0,
  },
  {
    id: "7",
    author: "Roger Darin",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=54edd73ae4b04709779918e4",
    date: "10 August 2022",
    category: null,
    categoryUrl: null,
    title: "Prudential Treatment of Cryptoasset Exposures II",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii",
    excerpt: "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community...",
    comments: 3,
    likes: 10,
    tags: ["Regulation"],
  },
  {
    id: "8",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "27 June 2021",
    category: null,
    categoryUrl: null,
    title: "Prudential Treatment of Cryptoasset Exposures",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance",
    excerpt: "The Bank for International Settlement (BIS) has recently published a consultative paper on the Prudential Treatment of Crytpoasset Exposure. Being good citizens, we were happy to follow the BIS' call for a response to their proposals...",
    comments: 1,
    likes: 1,
    tags: ["Regulation"],
  },
  {
    id: "9",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "20 April 2021",
    category: null,
    categoryUrl: null,
    title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2021/6/23/01ts1e8cggntafbag86wvwbztvudvh",
    excerpt: "The Bitcoin Association Switzerland has sent a comment on the FATF's revised draft guidance on crypto assets. In a consciously \"expansive\" approach, the FATF proposes to classify participants in decentralized systems...",
    comments: 1,
    likes: 0,
  },
  {
    id: "10",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "20 June 2020",
    category: null,
    categoryUrl: null,
    title: "Our Comment on the risk assessment for global Stablecoins of the G20's Financial Stability Board",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board",
    excerpt: "Today we sent the following letter to the Financial Stability Board of the G-20 commenting on their risk assessment for \"global stablecoins\"...",
    comments: 1,
    likes: 7,
    tags: ["Regulation"],
  },
  {
    id: "11",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "9 April 2020",
    category: null,
    categoryUrl: null,
    title: "Our Comment on GWV-FINMA adjustment for FinSA / FinIA",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia",
    excerpt: "On the 8th of April 2020 we sent the following comment to FINMA regarding the new money laundering ordinance...",
    comments: 1,
    likes: 4,
    tags: ["Regulation"],
  },
  {
    id: "12",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "13 March 2020",
    category: null,
    categoryUrl: null,
    title: 'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision',
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
    excerpt: "In December 2019 the Basel Committee on Banking Supervision published a discussion paper on the design of a prudential treatment for crypto-assets and welcomed comments...",
    comments: 1,
    likes: 6,
    tags: ["Regulation"],
  },
  {
    id: "13",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "3 December 2019",
    category: null,
    categoryUrl: null,
    title: "Crypto Valley Association Issues Questionable Recommendations",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
    excerpt: "While the Crypto Valley Association's paper on \"Asset Tokenization\" contains many insightful sections, there are other sections that get some fundamental legal considerations embarrassingly wrong...",
    comments: 1,
    likes: 13,
    tags: ["Regulation"],
  },
  {
    id: "14",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "27 June 2019",
    category: null,
    categoryUrl: null,
    title: "Our Comment on the Swiss Blockchain Law",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
    excerpt: "In March, the Federal Council presented a draft for a number of legal adjustments and invited Bitcoin Association Switzerland to take part in the public consultation...",
    comments: 2,
    likes: 11,
    tags: ["Regulation"],
  },
  {
    id: "15",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "14 December 2018",
    category: null,
    categoryUrl: null,
    title: "On the Federal Council Report",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
    excerpt: "The federal council published its 170-page report on the legal foundations of the blockchain in Switzerland. It incorporates the findings of the consultation that took place in September...",
    comments: 0,
    likes: 8,
    tags: ["Regulation"],
  },
  {
    id: "16",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "26 September 2018",
    category: null,
    categoryUrl: null,
    title: "Is the Ethereum system a legal subject?",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
    excerpt: "There are some hints that abstract systems like Ethereum should legally be treated like their own entities. The latest such hints comes from the context of value-added tax (VAT or MWST in German)...",
    comments: 0,
    likes: 6,
  },
  {
    id: "17",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "1 June 2018",
    category: null,
    categoryUrl: null,
    title: "Why storing Bitcoins for clients does not make you a bank",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
    excerpt: "The last few weeks have been very busy in the regulatory debate about Bitcoin and its consequences within the legal framework.",
    comments: 0,
    likes: 9,
  },
  {
    id: "18",
    author: "Lucas Betschart",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5895fa2e725e2525b0696fd4",
    date: "17 May 2018",
    category: null,
    categoryUrl: null,
    title: "Bitcoin Association Switzerland 2018: General Assembly",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
    excerpt: "The Bitcoin scene in Switzerland has been strong since Mike Hearn, former Bitcoin developer and author of Bitcoinj, organized the first local Bitcoin meetup in February 2011...",
    comments: 0,
    likes: 6,
  },
  {
    id: "19",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "19 April 2018",
    category: null,
    categoryUrl: null,
    title: "Better legal protection for clients of Bitcoin firms coming?",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
    excerpt: "Marcel Dobler, member of the Swiss national parliament and co-founder of digitec.ch, proposed a law that could turn out to be very helpful for Crypto Nation Switzerland...",
    comments: 0,
    likes: 1,
  },
  {
    id: "20",
    author: "Luzius Meisser",
    authorUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31",
    date: "3 March 2018",
    category: "Opinion",
    categoryUrl: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/category/Opinion",
    title: "The Latest Regulatory Threat",
    url: "https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
    excerpt: "The Swiss government has proposed a law that inadvertently threatens Switzerland's excellent position in the international race for becoming the preferred jurisdiction for crypto startups.",
    comments: 3,
    likes: 20,
    tags: ["Opinion"],
  },
];

function FeaturedHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1660148501401-GDNI2ZA03O3AI2DBF64S/header7.jpg"
          alt="Prudential Treatment of Cryptoasset Exposures II"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <time className="text-sm tracking-widest uppercase text-white/80">
            10 August 2022
          </time>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-heading tracking-wide leading-tight">
            <Link
              href="https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii"
              className="hover:underline"
            >
              Prudential Treatment of Cryptoasset Exposures II
            </Link>
          </h2>
          <p className="mt-4 text-sm text-white/80">Roger Darin</p>
          <div className="mt-6 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            <p>
              While the Bank for International Settlement / Basel Committee on Banking Supervision
              continues to propose regulation, they also have developed a habit of not addressing
              legitimate concerns from the community. That is highly regrettable, but no reason to
              throw in the towel. So the Bitcoin Association Switzerland continues to provide
              constructive feedback and - so we think - well argued suggestions on how to improve on
              the longterm goals of the BIS to make the space safer and allow for more innovation.
            </p>
            <p className="mt-4">
              The{" "}
              <a
                href="https://www.bitcoinassociation.ch/s/2022-08-07-BAS-comment-on-BIS-final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                letter
              </a>{" "}
              we sent out this week is continuing this tradition.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="https://www.bitcoinassociation.ch/bitcoin-association-switzerland/2022/8/10/prudential-treatment-of-cryptoasset-exposures-ii"
              className="inline-block text-xs tracking-widest uppercase border border-white/60 px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              View Post
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogList() {
  return (
    <div className="flex-1">
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
            {/* Meta above title */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="entry-author">
                <Link
                  href={post.authorUrl}
                  className="text-primary hover:underline"
                >
                  {post.author}
                </Link>
              </span>
              <span className="text-gray-300">•</span>
              <time className="entry-date">
                <Link
                  href={post.url}
                  className="text-primary hover:underline"
                >
                  {post.date}
                </Link>
              </time>
              {post.category && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="entry-category">
                    <Link
                      href={post.categoryUrl!}
                      className="text-primary hover:underline"
                    >
                      {post.category}
                    </Link>
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-heading mb-4">
              <Link href={post.url} className="text-gray-900 hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <div className="text-gray-600 text-sm leading-relaxed mb-6 font-body whitespace-pre-line">
              {post.excerpt}
            </div>

            {/* Read More */}
            <p className="mb-4">
              <Link
                href={post.url}
                className="text-xs tracking-widest uppercase text-primary hover:underline"
              >
                Read More →
              </Link>
            </p>

            {/* Footer */}
            <footer className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              {post.tags && post.tags.length > 0 && (
                <p className="entry-tags">
                  Tagged:{" "}
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`https://www.bitcoinassociation.ch/bitcoin-association-switzerland/tag/${tag}`}
                      className="text-primary hover:underline ml-1"
                    >
                      {tag}
                    </Link>
                  ))}
                </p>
              )}
              <div className="flex items-center gap-4">
                {post.comments > 0 && (
                  <Link
                    href={`${post.url}#comments-${post.id}`}
                    className="text-primary hover:underline"
                  >
                    {post.comments} Comment{post.comments !== 1 ? "s" : ""}
                  </Link>
                )}
                {post.comments === 0 && (
                  <Link
                    href={`${post.url}#comments-${post.id}`}
                    className="text-primary hover:underline"
                  >
                    Comment
                  </Link>
                )}
                <span>{post.likes} Like{post.likes !== 1 ? "s" : ""}</span>
                <button className="text-primary hover:underline">Share</button>
              </div>
            </footer>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <nav className="flex justify-end mt-12">
        <Link
          href="https://www.bitcoinassociation.ch/bitcoin-association-switzerland?offset=1520060400561"
          className="text-xs tracking-widest uppercase text-primary hover:underline"
        >
          Older Posts →
        </Link>
      </nav>
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <FeaturedHero />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <BlogList />
          <div className="hidden md:block">
            <NewsSidebar />
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
