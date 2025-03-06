import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Cloud Bintel</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming businesses through data-driven solutions and expert training.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services#data-engineering" className="text-muted-foreground hover:text-primary">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#data-science" className="text-muted-foreground hover:text-primary">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/services#data-analytics" className="text-muted-foreground hover:text-primary">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-primary">
                  Training & Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <p>123 Data Street</p>
              <p>Tech City, TC 12345</p>
              <p className="mt-4">
                <a href="mailto:info@cloudbintel.com" className="hover:text-primary">
                  info@cloudbintel.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cloud Bintel Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

