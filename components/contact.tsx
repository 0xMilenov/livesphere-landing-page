import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="bg-[#E97451] py-20 px-4" id="contact">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Contact us</h2>
        <p className="text-xl text-white/90 mb-8">
          Have questions? We're here to help.
        </p>
        <form className="space-y-5 bg-white p-8 rounded-lg shadow-lg">
          <Input placeholder="Name" className="w-full" />
          <Input type="email" placeholder="Email" className="w-full" />
          <Textarea placeholder="Your message" className="w-full h-32" />
          <Button
            type="submit"
            className="w-full bg-[#E97451] hover:bg-[#E97451]/90 text-white border border-black transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
