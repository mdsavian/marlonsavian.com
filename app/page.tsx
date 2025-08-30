import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import SocialLinks from "./components/SocialLinks";
import Divider from "./components/Divider";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col w-full relative min-h-screen max-w-6xl mx-auto px-8 items-center pt-8 pb-20 text-center">
      <Header />
      <ProfileSection />
      <SocialLinks />
      <Divider />
      <BlogSection />
    </div>
  );
}
