'use client';

import Link from 'next/link';

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #42E100 100%)',
                color: 'white',
              }}
            >
              P
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Pix Mint
            </span>
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
            }}
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          Terms of Service
        </h1>
        <p
          className="text-sm mb-12 text-center italic"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              1. Acceptance of Terms
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              By accessing or using this app, you agree to these Terms of Service. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              2. Eligibility
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the app.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              3. Accounts and Security
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              4. Content Policy
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You agree not to upload or share content that is illegal, hateful, harassing, violent, sexually explicit, or infringes on others' rights. Do not share personal data of others without consent. Ensure people in photos consent to being photographed.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Only upload content you own or have permission to share. When using AI features, do not generate content that violates copyright, depicts illegal activities, or creates deepfakes or misleading content. You are responsible for ensuring AI-generated content complies with applicable laws and platform policies.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Do not use AI features to generate content that impersonates individuals, creates false information, or violates intellectual property rights of others.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              5. User Content and License
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You retain ownership of your uploaded content and AI-generated content created from your inputs. By uploading content or using AI features, you grant us a non-exclusive, worldwide, royalty-free license to host, store, display, and process your content solely to operate and improve the service, including processing through third-party AI services (Google Gemini, OpenAI) as necessary to provide the features you request.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI-generated content is created using third-party AI models. While you own the output, the underlying AI models and their training data are subject to the terms of the respective AI service providers.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              6. Prohibited Activities
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You may not: attempt to reverse engineer the app, interfere with the service, upload malware, spam users, scrape data without permission, abuse AI generation features (e.g., generating excessive content to overload systems), use AI features to create harmful or deceptive content, or attempt to bypass purchase limitations.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You may not use the service to generate content that violates copyright, creates deepfakes without consent, generates illegal content, or infringes on the rights of others.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              7. In-App Purchases and AI Credits
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Some AI features require AI credits, which can be purchased through in-app purchases. Purchases are managed through Apple App Store or Google Play Store and processed by RevenueCat. You are responsible for managing your purchases through your device's app store settings. Refunds are subject to Apple and Google's refund policies.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI credits are non-refundable and non-transferable. We reserve the right to modify credit pricing and features with reasonable notice. Purchased credits do not expire unless otherwise specified at the time of purchase.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              8. Intellectual Property
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              All app software, branding, and design are protected by intellectual property laws. You may not use our marks without prior consent.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              9. Termination
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We may suspend or terminate access for violations of these Terms or to protect users and the service. You may delete your account at any time.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              10. AI Service Disclaimers
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI-generated content is created using third-party AI services (Google Gemini, OpenAI) and may not always meet your expectations. We do not guarantee the quality, accuracy, or appropriateness of AI-generated content. AI services may have limitations, rate limits, or temporary unavailability.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You understand that AI-generated content may occasionally produce unexpected, inappropriate, or inaccurate results. We are not responsible for content generated by third-party AI services, though we reserve the right to remove content that violates our policies.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              11. General Disclaimers
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              The service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted operation, error-free performance, or that the service will meet all your requirements. AI features depend on third-party services that may experience outages or limitations.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              12. Limitation of Liability
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the app, including but not limited to: loss of data, loss of generated content, AI service failures, third-party service outages, or any issues related to AI-generated content quality or appropriateness.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              13. Third-Party Services
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our service relies on third-party services including Google Gemini, OpenAI, Supabase, MongoDB, DigitalOcean Spaces, RevenueCat, and app stores. Your use of these services is subject to their respective terms of service and privacy policies. We are not responsible for the actions, policies, or practices of these third-party services.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              14. Changes to Terms
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the updated Terms. We will notify you of material changes through the app or via email.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--accent)' }}
            >
              15. Contact
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              For questions about these Terms or our content policy, please contact us through the app or via email.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-6 justify-center" style={{ borderColor: 'var(--border)' }}>
          <Link
            href="/"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            Home
          </Link>
          <Link
            href="/learn-more"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            Learn More
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

