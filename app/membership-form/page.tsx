import { Header } from "@/components/header";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Bitcoin Association Switzerland",
};

export default function MembershipFormPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 font-body mb-6 leading-relaxed">
            We couldn&apos;t find the page you were looking for. This is either because:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700 font-body">
            <li>
              There is an error in the URL entered into your web browser. Please check the URL and try again.
            </li>
            <li>
              The page you are looking for has been moved or deleted.
            </li>
          </ul>
          <p className="text-gray-700 font-body leading-relaxed">
            You can return to our homepage by{" "}
            <Link href="/" className="text-[#1a7a7d] hover:underline">
              clicking here
            </Link>
            , or you can try searching for the content you are seeking by{" "}
            <Link href="/search" className="text-[#1a7a7d] hover:underline">
              clicking here
            </Link>
            .
          </p>
        </div>
      </main>

      <PreFooter />
      <Footer />
    </div>
  );
}
