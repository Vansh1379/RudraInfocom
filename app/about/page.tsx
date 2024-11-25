import { AboutHero } from "@/components/about-hero"
import { CompanyHistory } from "@/components/company-history"
import { OurTeam } from "@/components/our-team"
import { CoreValues } from "@/components/core-values"
import { DetailedServices } from "@/components/detailed-services"
import { Achievements } from "@/components/achievements"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <AboutHero />
        <CompanyHistory />
        <OurTeam />
        <CoreValues />
        <DetailedServices />
        <Achievements />
      </main>
    </div>
  )
}

