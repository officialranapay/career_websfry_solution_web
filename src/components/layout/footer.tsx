"use client";
import Link from "next/link";
import { APP_NAME, ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner"

export function Footer() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {

    if (!email) {
      setMessage("Please enter email");
      return;
    }

    try {

      setLoading(true);

      setMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/subscribe",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Subscription failed"
        );
      }

      setMessage("Subscribed successfully");
      toast("Stay tuned for new jobs ", { position: "bottom-right" })
      setEmail("");
      setMessage("");

    } catch (error) {

      console.error(error);

      setMessage("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border/50 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href={ROUTES.HOME} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the future of technology by connecting brilliant minds with extraordinary opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.JOBS} className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Culture</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Interview Guide</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest roles and tech news.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background" />
              <Button onClick={handleSubscribe}
                disabled={loading}>{loading
                  ? "Subscribing..."
                  : "Subscribe"}</Button>
            </div>
            {message && (
              <p className="text-sm text-muted-foreground">
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
