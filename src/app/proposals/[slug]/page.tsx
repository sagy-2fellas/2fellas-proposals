import { oilysaProposal } from '@/data/proposals/oilysa'
import { mageroProposal } from '@/data/proposals/magero'
import { ProposalData } from '@/data/types'

const proposals: Record<string, ProposalData> = {
  oilysa: oilysaProposal,
  magero: mageroProposal,
}

export function generateStaticParams() {
  return Object.keys(proposals).map((slug) => ({ slug }))
}

export default async function ProposalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proposal = proposals[slug]
  
  if (!proposal) {
    return <div className="min-h-screen flex items-center justify-center">Proposal not found</div>
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-dark-900/90 backdrop-blur-sm border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold">2 Fellas Media</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#context">Context</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-medium mb-4">Brand & Marketing Strategy Proposal</p>
          <div className="gold-badge text-2xl mb-6">{proposal.client.name}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{proposal.client.tagline}</h1>
          <p className="text-gray-400">2 Fellas Media | {proposal.date}</p>
        </div>
      </section>

      {/* Context */}
      <section id="context" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-6">Context</h2>
          <div className="section-card">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{proposal.context}</p>
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-16 px-6 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-6">The Opportunity</h2>
          <p className="text-gray-300 mb-6">{proposal.opportunity.intro}</p>
          <ul className="space-y-3 mb-6">
            {proposal.opportunity.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">→</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 italic">{proposal.opportunity.conclusion}</p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-8">Strategic Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {proposal.principles.map((principle, i) => (
              <div key={i} className="section-card">
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 px-6 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-8 text-center">Engagement Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {proposal.packages.filter(p => !p.strategyOnly).map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && (
                  <div className="text-gold text-xs font-semibold mb-2">⭐ RECOMMENDED</div>
                )}
                <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.subtitle}</p>
                <div className="text-3xl font-bold mb-4">
                  {pkg.currency}{pkg.price.toLocaleString()}
                  <span className="text-sm font-normal text-gray-500 ml-2">ex VAT</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {pkg.includes.slice(0, 6).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-gold">✓</span>
                      {item}
                    </li>
                  ))}
                  {pkg.includes.length > 6 && (
                    <li className="text-gray-500">+ {pkg.includes.length - 6} more...</li>
                  )}
                </ul>
                <button className={pkg.recommended ? 'btn-gold w-full' : 'btn-outline w-full'}>
                  Select {pkg.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      {proposal.bundles && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gold mb-8 text-center">Bundle & Save</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {proposal.bundles.map((bundle) => (
                <div key={bundle.id} className={`package-card ${bundle.recommended ? 'recommended' : ''}`}>
                  {bundle.recommended && (
                    <div className="text-gold text-xs font-semibold mb-2">⭐ BEST VALUE</div>
                  )}
                  <h3 className="font-bold text-lg mb-1">{bundle.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{bundle.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{bundle.currency}{bundle.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through ml-2">{bundle.currency}{bundle.originalPrice.toLocaleString()}</span>
                    <span className="text-green-500 text-sm ml-2">Save {bundle.currency}{bundle.savings.toLocaleString()}</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    {bundle.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className={bundle.recommended ? 'btn-gold w-full' : 'btn-outline w-full'}>
                    Select Bundle
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommendation */}
      <section className="py-16 px-6 bg-dark-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gold mb-6">Our Recommendation</h2>
          <p className="text-gray-300 leading-relaxed">{proposal.recommendation.reason}</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-8 text-center">Relevant Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proposal.caseStudies.map((study, i) => (
              <div key={i} className="text-center">
                {study.logo && (
                  <img src={study.logo} alt={study.name} className="h-12 mx-auto mb-3 object-contain filter brightness-0 invert opacity-80" />
                )}
                <p className="font-semibold text-sm">{study.name}</p>
                <p className="text-gray-500 text-xs">{study.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">We specialise in B2B, regulated, and operationally complex businesses.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-dark-800">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gold mb-2 text-center">Ready to Get Started?</h2>
          <p className="text-gray-400 text-center mb-8">Select your preferred package and we'll be in touch within 24 hours.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name *" required className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none" />
            <input type="email" placeholder="Email *" required className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none" />
            <input type="text" placeholder="Company" className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none" />
            <input type="tel" placeholder="Phone" className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none" />
            <select className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none">
              <option value="">Select package type</option>
              {proposal.formFields?.packageOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
            <textarea placeholder="Additional Message" rows={4} className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 focus:border-gold focus:outline-none" />
            <button type="submit" className="btn-gold w-full">Submit Package Selection</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2026 2 Fellas Media. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
