import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PreFooter } from "@/components/pre-footer";
import { MembershipSidebar } from "@/components/membership-sidebar";

// Corporate Members data - 5 columns
const corporateMembers = [
  { name: "BitBox", href: "https://shiftcrypto.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png?format=300w", width: 840, height: 280 },
  { name: "Bitcoin Suisse", href: "https://www.bitcoinsuisse.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png?format=300w", width: 1018, height: 406 },
  { name: "Blockchain Source", href: "https://blockchainsource.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png?format=300w", width: 354, height: 59 },
  { name: "Crypto Finance", href: "https://www.cryptofinance.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg?format=300w", width: 2500, height: 674 },
  { name: "21 Analytics", href: "https://www.21analytics.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png?format=300w", width: 786, height: 150 },
  { name: "Tatoshi Services", href: "https://tatoshi-services.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png?format=300w", width: 165, height: 50 },
  { name: "Apps with love", href: "https://appswithlove.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png?format=100w", width: 500, height: 384 },
  { name: "HODLing", href: "https://hodling.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png?format=300w", width: 1024, height: 180 },
  { name: "Alephium", href: "https://alephium.org/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png?format=300w", width: 1400, height: 400 },
  { name: "Aktionariat", href: "https://aktionariat.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg?format=300w", width: 1920, height: 263 },
  { name: "21 Lectures", href: "https://www.21lectures.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png?format=300w", width: 1598, height: 235 },
  { name: "Incore", href: "https://incorebank.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg?format=300w", width: 2000, height: 420 },
  { name: "Pocket", href: "#", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png?format=300w", width: 1976, height: 640 },
  { name: "House of Satoshi", href: "https://www.house-of-satoshi.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg?format=300w", width: 1700, height: 1080 },
  { name: "Berglinde", href: "https://www.berglinde.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg?format=300w", width: 1536, height: 512 },
  { name: "Infinity21", href: "https://infinity21.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726921284073-GBCP6S64DOUMQOIC4OQL/Infintiy21_com.jpg?format=300w", width: 668, height: 199 },
  { name: "SayNode", href: "https://www.saynode.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png?format=100w", width: 1536, height: 1493 },
  { name: "NYM", href: "https://nymtech.net/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png?format=300w", width: 1200, height: 630 },
  { name: "Zeus ATM", href: "https://zeusatm.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png?format=300w", width: 5760, height: 3240 },
  { name: "bitcoin-schweiz.ch", href: "https://bitcoin-schweiz.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg?format=300w", width: 336, height: 38 },
  { name: "Lamassu", href: "https://lamassu.is/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png?format=300w", width: 908, height: 220 },
  { name: "Scholarium", href: "http://scholarium.at/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png?format=300w", width: 2645, height: 479 },
  { name: "House of Test", href: "https://www.houseoftest.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png?format=300w", width: 320, height: 196 },
  { name: "Relai", href: "https://relai.app/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png?format=300w", width: 2626, height: 1407 },
  { name: "Nakamochi", href: "https://nakamochi.io/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png?format=300w", width: 2462, height: 577 },
  { name: "Bittr", href: "https://getbittr.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742559399401-2H32H2A9OV1BSDEZ0MF9/Bittr+Logo+%281%29.png?format=300w", width: 1507, height: 815 },
  { name: "Unita", href: "https://unitafinance.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg?format=300w", width: 2560, height: 1119 },
  { name: "NiceHash", href: "https://www.nicehash.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png?format=300w", width: 1800, height: 300 },
  { name: "Pandora Prime", href: "https://pandoraprime.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png?format=300w", width: 300, height: 100 },
  { name: "BitVault", href: "https://www.bitvault.sv/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png?format=300w", width: 518, height: 151 },
];

// Partner Organisations data - 4 columns
const partnerOrganisations = [
  { name: "University of Basel", href: "https://cif.unibas.ch/en/home/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png?format=300w", width: 2082, height: 1246 },
  { name: "SICTIC", href: "https://www.sictic.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png?format=300w", width: 1600, height: 429 },
  { name: "Swiss Blockchain Federation", href: "https://blockchainfederation.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png?format=300w", width: 380, height: 132 },
  { name: "Avalbit", href: "https://avalbit.org/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506741-Y72G6ITZERNQ8UOVVZLZ/a.png?format=300w", width: 300, height: 144 },
  { name: "Hayek", href: "https://hayekianer.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506913-WWZRVR2S1AD9U92L462X/hayek.png?format=300w", width: 250, height: 84 },
  { name: "Swiss Finance Startups", href: "https://www.swissfinancestartups.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506935-BS73Y360VY3M5S58P3UC/sfs.png?format=300w", width: 371, height: 96 },
  { name: "Swiss Finte.ch", href: "https://swissfinte.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506110586651-SVS7P6PJWLFNRMGH85OK/sfta-logo-tiny.png?format=300w", width: 769, height: 158 },
  { name: "Blockchain for Europe", href: "https://www.blockchain4europe.eu/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1618314774016-HWBC7ALLQEVOIVV6IXOD/logo_B4E_titre_Plan+de+travail+1+%284%29.png?format=300w", width: 2040, height: 874 },
];

// Location Partners data - 3 columns
const locationPartners = [
  { name: "Trust Square", href: "https://www.trustsquare.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526644625552-BW81AAI2VT3SK71SIQPF/tr.jpg?format=300w", width: 600, height: 142 },
  { name: "CV Labs", href: "https://www.cvlabs.com/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1537969038775-2CPBS6A53NYZK5B0HW1Y/CV_Labs_Logo.png?format=300w", width: 308, height: 212 },
  { name: "Finance 2.0", href: "https://finance20.ch/", img: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1597070217402-M7RUREYX7Q9I7SLT7PVY/unnamed.jpg?format=300w", width: 1280, height: 300 },
];

// Generous Donors data
const generousDonors = [
  { name: "Daniel Gutenberg", href: "http://www.gutenberg.ch/" },
  { name: "William Taborda", href: null },
  { name: "Andre Drommershausen", href: null },
  { name: "Thierry Fragniere", href: "https://thierryfragniere.ch/" },
];

export default function OurCorporateMembersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-12">
            {/* Sidebar */}
            <MembershipSidebar />
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Corporate Members Section */}
              <section className="mb-16">
                <h1 className="text-2xl md:text-3xl font-heading text-center text-gray-800 mb-6">
                  <strong>Corporate Members</strong>
                </h1>
                <div className="max-w-2xl mx-auto text-center mb-10">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) financially, through a corporate membership.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                  </p>
                </div>
                
                {/* Corporate Members Grid - 5 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {corporateMembers.map((member) => (
                    <Link
                      key={member.name}
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-16 px-2 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={124}
                        height={70}
                        className="max-h-16 w-auto object-contain"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              </section>
              
              {/* Partner Organisations Section */}
              <section className="mb-16">
                <h1 className="text-2xl md:text-3xl font-heading text-center text-gray-800 mb-6">
                  <strong>Partner Organisations</strong>
                </h1>
                <div className="max-w-2xl mx-auto text-center mb-10">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    The following organizations have chosen to support the work of the «Bitcoin Association Switzerland« (BAS) through various means and services, other than a corporate membership..
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The listed organizations are not liable for any conduct or official messages of the BAS; nor is the BAS responsible for the conduct and/or business of the listed organizations.
                  </p>
                </div>
                
                {/* Partner Organisations Grid - 4 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {partnerOrganisations.map((partner) => (
                    <Link
                      key={partner.name}
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-20 px-2 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={partner.img}
                        alt={partner.name}
                        width={160}
                        height={90}
                        className="max-h-20 w-auto object-contain"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              </section>
              
              {/* Location Partners Section */}
              <section className="mb-16">
                <h1 className="text-2xl md:text-3xl font-heading text-center text-gray-800 mb-10">
                  <strong>Location Partners</strong>
                </h1>
                
                {/* Location Partners Grid - 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  {locationPartners.map((partner) => (
                    <Link
                      key={partner.name}
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-24 px-4 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={partner.img}
                        alt={partner.name}
                        width={227}
                        height={128}
                        className="max-h-24 w-auto object-contain"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              </section>
              
              {/* Generous Donors Section */}
              <section>
                <h1 className="text-2xl md:text-3xl font-heading text-center text-gray-800 mb-6">
                  <strong>Generous Donors</strong>
                </h1>
                <p className="text-gray-600 text-center mb-8 text-sm">
                  The following individuals donated 1 Bitcoin or more to support our mission:
                </p>
                <div className="text-center space-y-3">
                  {generousDonors.map((donor) => (
                    <p key={donor.name}>
                      {donor.href ? (
                        <Link
                          href={donor.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1a7a7d] font-semibold hover:underline"
                        >
                          {donor.name}
                        </Link>
                      ) : (
                        <span className="text-gray-800 font-semibold">{donor.name}</span>
                      )}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <PreFooter />
      <Footer />
    </div>
  );
}
