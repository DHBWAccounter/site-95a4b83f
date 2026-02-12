import { Header } from "@/components/header";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time12hStart: string;
  time12hEnd: string;
  time24hStart: string;
  time24hEnd: string;
  fullDate: string;
  location?: string;
  mapLink?: string;
  description: React.ReactNode;
  image?: string;
  eventLink: string;
  googleCalendarLink: string;
  icsLink: string;
}

const events: Event[] = [
  {
    id: "basel",
    title: "BAS Roadshow – Basel",
    date: "2025-09-21",
    day: "21",
    month: "Sept",
    time12hStart: "6:30 pm",
    time12hEnd: "10:30 pm",
    time24hStart: "18:30",
    time24hEnd: "22:30",
    fullDate: "Sunday 21 September 2025",
    description: (
      <>
        <p className="mb-4">
          <strong>The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Time: 18:00 22:30</li>
          <li>
            Location:{" "}
            <a
              href="http://maps.google.com/?q=%20Lausanne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a7a7d] hover:underline"
            >
              (map)
            </a>
          </li>
        </ul>
        <p className="mb-4">
          The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!
        </p>
        <p className="mb-4">
          <strong>Sign up for the roadshow event in Lausanne </strong>
          <a
            href="https://luma.com/7pewjjp3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a7a7d] hover:underline font-semibold"
          >
            here
          </a>
        </p>
        <p>
          <strong>Best regards,</strong>
          <br />
          The BAS Board
        </p>
      </>
    ),
    eventLink: "/roadshow-2025/2025/9/21/bas-roadshow-basel",
    googleCalendarLink:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Basel&dates=20250921T163000Z/20250921T203000Z",
    icsLink: "https://www.bitcoinassociation.ch/roadshow-2025/2025/9/21/bas-roadshow-basel?format=ical",
  },
  {
    id: "lake-zurich",
    title: "BAS Roadshow Lake Zurich",
    date: "2025-03-21",
    day: "21",
    month: "Mar",
    time12hStart: "6:30 pm",
    time12hEnd: "11:00 pm",
    time24hStart: "18:30",
    time24hEnd: "23:00",
    fullDate: "Friday 21 March 2025",
    description: (
      <>
        <p className="mb-4">
          <strong>The Roadshow is coming to Lake Zurich!</strong>
        </p>
        <p className="mb-4">
          The <strong>Bitcoin Association Switzerland</strong> invites you to the next{" "}
          <strong>BAS Roadshow</strong> – this time on a <strong>boat in Rapperswil on March 21, 2025</strong>,
          starting at <strong>6:30 PM</strong>.
        </p>
        <p className="mb-4">
          <strong>Sign up for the roadshow event in Lake Zurich </strong>
          <a
            href="https://lu.ma/pa1cmg9y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a7a7d] hover:underline font-semibold"
          >
            here
          </a>
        </p>
        <p>
          <strong>Best regards,</strong>
          <br />
          The BAS Board
        </p>
      </>
    ),
    eventLink: "/roadshow-2025/2025/3/21/dvlfc1pg9tmpthqclelqcp2tmosgpg",
    googleCalendarLink:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20Lake%20Zurich&dates=20250321T173000Z/20250321T220000Z",
    icsLink:
      "https://www.bitcoinassociation.ch/roadshow-2025/2025/3/21/dvlfc1pg9tmpthqclelqcp2tmosgpg?format=ical",
  },
  {
    id: "lausanne",
    title: "BAS Roadshow – Lausanne",
    date: "2025-02-21",
    day: "21",
    month: "Feb",
    time12hStart: "6:00 pm",
    time12hEnd: "11:00 pm",
    time24hStart: "18:00",
    time24hEnd: "23:00",
    fullDate: "Friday 21 February 2025",
    location: "BAS Roadshow",
    mapLink: "http://maps.google.com/?q=%20Lausanne",
    description: (
      <>
        <p className="mb-4">
          <strong>The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February 21, 2025</strong>
        </p>
        <p className="mb-4">
          The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!
        </p>
        <p className="mb-4">
          <strong>Sign up for the roadshow event in Lausanne </strong>
          <a
            href="https://lu.ma/t5cz4fos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a7a7d] hover:underline font-semibold"
          >
            here
          </a>
        </p>
        <p className="mb-6">
          <strong>Best regards,</strong>
          <br />
          The BAS Board
        </p>
        <div className="mt-4">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6bb0f5c0-1021-4992-9b30-032a5cd98c92/BAS+Roadshow+2025.jpg"
            alt="BAS Roadshow 2025"
            width={905}
            height={1280}
            className="w-full max-w-[905px] h-auto"
          />
        </div>
      </>
    ),
    eventLink: "/roadshow-2025/2025/2/21/bas-roadshow-lausanne",
    googleCalendarLink:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Lausanne&dates=20250221T170000Z/20250221T220000Z&location=Lausanne",
    icsLink: "https://www.bitcoinassociation.ch/roadshow-2025/2025/2/21/bas-roadshow-lausanne?format=ical",
  },
  {
    id: "bern",
    title: "BAS Roadshow – Bern",
    date: "2025-01-21",
    day: "21",
    month: "Jan",
    time12hStart: "6:00 pm",
    time12hEnd: "8:00 pm",
    time24hStart: "18:00",
    time24hEnd: "20:00",
    fullDate: "Tuesday 21 January 2025",
    description: (
      <>
        <p className="mb-4">
          <strong>The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Sunday 21 September 2025</li>
          <li>18:00 23:00</li>
        </ul>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Time: 18:00 23:00</li>
          <li>
            Location:{" "}
            <a
              href="https://maps.app.goo.gl/4JqGTXYT8Xe3ZnbR8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a7a7d] hover:underline"
            >
              (map)
            </a>
          </li>
        </ul>
        <p className="mb-4">
          The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!
        </p>
        <p className="mb-4">
          <strong>Sign up for the roadshow event in Bern </strong>
          <a
            href="https://luma.com/8tsyroom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a7a7d] hover:underline font-semibold"
          >
            here
          </a>
        </p>
        <p>
          <strong>Best regards,</strong>
          <br />
          The BAS Board
        </p>
      </>
    ),
    eventLink: "/roadshow-2025/2025/1/21/bas-roadshow-bern",
    googleCalendarLink:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Roadshow%20%E2%80%93%20Bern&dates=20250121T170000Z/20250121T190000Z",
    icsLink: "https://www.bitcoinassociation.ch/roadshow-2025/2025/1/21/bas-roadshow-bern?format=ical",
  },
];

export default function Roadshow2025Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="eventlist eventlist--past">
            {/* Past/Upcoming Divider */}
            <hr className="border-t border-gray-200 mb-8" />

            {events.map((event) => (
              <article key={event.id} className="eventlist-event mb-12 pb-12 border-b border-gray-100 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Date Column */}
                  <Link href={event.eventLink} className="eventlist-column-date shrink-0">
                    <div className="eventlist-datetag bg-[#f5f5f5] w-20 h-24 flex flex-col items-center justify-center text-center">
                      <div className="eventlist-datetag-startdate--month text-xs uppercase tracking-wider text-gray-500">
                        {event.month}
                      </div>
                      <div className="eventlist-datetag-startdate--day text-2xl font-semibold text-gray-800">
                        {event.day}
                      </div>
                      <div className="eventlist-datetag-time text-xs text-gray-500 mt-1">
                        {event.time24hStart}
                      </div>
                    </div>
                  </Link>

                  {/* Info Column */}
                  <div className="eventlist-column-info flex-1">
                    {/* Title */}
                    <h1 className="eventlist-title text-xl font-heading mb-3">
                      <Link
                        href={event.eventLink}
                        className="text-gray-800 hover:text-[#1a7a7d] transition-colors"
                      >
                        {event.title}
                      </Link>
                    </h1>

                    {/* Meta */}
                    <ul className="eventlist-meta text-sm text-gray-500 mb-4 space-y-1">
                      <li className="eventlist-meta-date">
                        <time dateTime={event.date}>{event.fullDate}</time>
                      </li>
                      <li className="eventlist-meta-time">
                        <span className="event-time-12hr">
                          <time dateTime={event.date}>{event.time12hStart}</time>
                          <span className="mx-1">–</span>
                          <time>{event.time12hEnd}</time>
                        </span>
                      </li>

                      {event.location && (
                        <li className="eventlist-meta-address">
                          {event.location}{" "}
                          <a
                            href={event.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1a7a7d] hover:underline"
                          >
                            (map)
                          </a>
                        </li>
                      )}

                      <li className="eventlist-meta-export">
                        <a
                          href={event.googleCalendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1a7a7d] hover:underline"
                        >
                          Google Calendar
                        </a>
                        <span className="mx-2">|</span>
                        <a
                          href={event.icsLink}
                          className="text-[#1a7a7d] hover:underline"
                        >
                          ICS
                        </a>
                      </li>
                    </ul>

                    {/* Description */}
                    <div className="eventlist-description text-gray-700 text-sm leading-relaxed mb-4">
                      {event.description}
                    </div>

                    {/* View Event Button */}
                    <Link
                      href={event.eventLink}
                      className="inline-block bg-[#1a7a7d] text-white text-xs uppercase tracking-wider px-6 py-2 hover:bg-[#146366] transition-colors"
                    >
                      View Event →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
