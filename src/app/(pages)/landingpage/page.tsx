import Hero from "../../../components/landingpages/Hero";
import MintInfo from "../../../components/landingpages/Mint-Info";
import Team from "../../../components/landingpages/Team";
import Collections from "../../../components/landingpages/Collections";
import FAQ from "../../../components/landingpages/FAQ";
import Community from "../../../components/landingpages/Community";
import Navbar from "@/components/landingpages/NavbarLandingPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MintInfo />
      <Collections />
      <Team />
      <FAQ />
      <Community />
    </div>
  );
}
