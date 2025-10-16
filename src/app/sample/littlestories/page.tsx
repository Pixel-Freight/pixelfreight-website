import type { Metadata } from "next";
import {
  LittleStoriesHero,
  LittleStoriesAbout,
  LittleStoriesGallery,
  LittleStoriesContact,
  LittleStoriesNav,
  LittleStoriesChromeController,
  LittleStoriesFooter,
} from "@/components/sample/littlestories";

export const metadata: Metadata = {
  title: "Little Stories Sample | Freight Pixel",
  description:
    "A sample single-page concept for Little Stories — showcasing a falling photo hero, gallery sampler, and contact capture.",
};

export default function LittleStoriesSamplePage() {
  return (
    <div>
      <LittleStoriesChromeController />
      <LittleStoriesNav />
      <LittleStoriesHero />
      <LittleStoriesAbout />
      <LittleStoriesGallery />
      <LittleStoriesContact />
      <LittleStoriesFooter />
    </div>
  );
}
