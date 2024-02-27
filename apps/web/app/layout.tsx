import "./globals.css"
import "@enterprise-commerce/design-system/styles.css"

import Script from "next/script"

import { Modals } from "components/Modals/Modals"
import { NavigationBar } from "components/NavigationBar/NavigationBar"
import { mobileInlineScript } from "components/NavigationBar/mobileInlineScript"
import { NavItem } from "components/NavigationBar/types"
import { TopBar } from "components/TopBar/TopBar"
import { CallToAction } from "components/CallToAction"
import Footer from "components/Footer"
import { AnnouncementBar } from "views/AnnouncementBar"
import Link from "next/link"

export const revalidate = 3600

const navigationItems: NavItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Kitchen",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Women",
          items: [
            { text: "Shirts & Blouses", href: "/search" },
            { text: "Pants", href: "/sport" },
            { text: "Blazers & Vests", href: "#" },
            { text: "Cardigans & Sweaters", href: "#" },
          ],
        },
        {
          text: "Men",
          items: [
            { text: "T-shirts & Tanks", href: "#" },
            { text: "Pants", href: "#" },
            { text: "Hoodies & Sweatshirts", href: "#" },
            { text: "Blazers & Suits", href: "#" },
          ],
        },
        {
          text: "Kids",
          items: [
            { text: "Clothing", href: "#" },
            { text: "Outerwear", href: "#" },
            { text: "Activewear", href: "#" },
            { text: "Accessories", href: "#" },
          ],
        },
        {
          text: "Sport",
          items: [
            { text: "Clothing", href: "#" },
            { text: "Swimwear", href: "#" },
            { text: "Outerwear", href: "#" },
            { text: "Accessories & Equipment", href: "#" },
          ],
        },
      ],
    },
  },
  {
    text: "Fashion",
    submenu: {
      variant: "image-grid",
      items: [
        {
          href: "#",
          image:
            "https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Home",
        },
        {
          href: "#",
          image:
            "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Beauty",
        },
        {
          href: "#",
          image:
            "https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Holiday",
        },
        {
          href: "#",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Sale",
        },
        {
          href: "#",
          image:
            "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          text: "Lorem",
        },
      ],
    },
  },
  {
    text: "Electronics",
    href: "#",
  },
  {
    text: "Beauty",
    submenu: {
      variant: "text-image-grid",
      items: [
        { text: "Women", href: "#" },
        { text: "Men", href: "#" },
        { text: "Kids", href: "#" },
        { text: "Sport", href: "#" },
        { text: "T-shirts & Tanks", href: "#" },
        { text: "Pants", href: "#" },
        { text: "Hoodies & Sweatshirts", href: "#" },
        { text: "Blazers & Suits", href: "#" },
        {
          href: "#",
          image: "https://picsum.photos/seed/home/160/200",
          text: "Home",
        },
        {
          href: "#",
          image: "https://picsum.photos/seed/beauty/160/200",
          text: "Beauty",
        },
        {
          href: "#",
          image: "https://picsum.photos/seed/holiday/160/200",
          text: "Holiday",
        },
      ],
    },
  },
  {
    text: "Kids",
    href: "#",
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="mobileMegaMenuLogic" strategy="beforeInteractive">{`${mobileInlineScript}`}</Script>

        <TopBar />
        <NavigationBar items={navigationItems} />
        <AnnouncementBar />
        {children}
        <CallToAction />
        <Footer />
        <Modals />
      </body>
    </html>
  )
}
