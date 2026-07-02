import Image from "next/image";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppWidget() {
  return (
    <a
      href={whatsappLink(
        "Hi Study Insights, I'd like to know more about studying abroad."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pr-4 pl-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95 sm:right-8 sm:bottom-8"
    >
      <Image src="/whatsapp.svg" alt="" width={28} height={28} />
      <span className="hidden text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </a>
  );
}
