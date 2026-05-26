import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Rules and guidelines for using the LumaSleep app.",
  alternates: { canonical: abs("/terms/") },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" subtitle="Last updated: February 21, 2026">
      <h2>Acceptance of Terms</h2>
      <p>By downloading, installing, or using LumaSleep (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the App.</p>

      <h2>Service Description</h2>
      <p>LumaSleep is a mobile application designed to help improve your sleep experience through ambient sounds, AI-generated soundscapes, a creative community, sleep tracking, and bedtime reminders. The App is available on iOS and Android platforms.</p>

      <h2>User Accounts</h2>
      <p>To access certain features, you must create an account using your email address, Google, or Apple sign-in. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      <p>You agree to provide accurate and complete information when creating your account and to update your information as necessary.</p>

      <h2>Subscriptions &amp; Payments</h2>
      <p>LumaSleep offers a free tier with limited features and a premium subscription available on weekly, monthly, and annual billing options. Current pricing is shown in the App at the time of purchase and may vary by region and store.</p>
      <p>Subscriptions are billed through the Apple App Store or Google Play Store and are subject to their respective terms and refund policies. Payment is charged to your App Store or Play Store account at confirmation of purchase.</p>
      <p>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You can manage and cancel your subscription at any time through your device&apos;s subscription settings.</p>

      <h2>AI-Generated Content</h2>
      <p>LumaSleep&apos;s AI sound generation feature creates custom audio content based on your text prompts. You may use AI-generated sounds for personal, non-commercial purposes within the App.</p>
      <p>When you choose to share an AI-generated sound to the Community, you grant other users the ability to play and save it within the App. You are responsible for the prompts you submit and the content you publish, and agree not to share material that is unlawful, abusive, or infringes on others&apos; rights.</p>
      <p>AI-generated content is provided &quot;as is&quot; and we make no guarantees about the quality, accuracy, or suitability of generated sounds. We reserve the right to limit AI generation usage and to moderate or remove community content as needed.</p>

      <h2>Health Data Disclaimer</h2>
      <p>LumaSleep is <strong>not a medical device</strong> and does not provide medical advice. Sleep tracking features, including sleep scores, stage breakdowns, and insights, are for informational and wellness purposes only.</p>
      <p>The sleep data displayed in the App should not be used to diagnose, treat, or prevent any health condition. Always consult a qualified healthcare professional for medical advice regarding sleep disorders or health concerns.</p>

      <h2>Intellectual Property</h2>
      <p>All content within LumaSleep — including the app design, branding, user interface, and proprietary code — is owned by LumaSleep or its licensors and is protected by copyright and intellectual property laws.</p>
      <p>Ambient sounds sourced from Freesound.org are used under their respective Creative Commons licenses. You may not reproduce, distribute, or create derivative works from App content without written permission.</p>

      <h2>Limitation of Liability</h2>
      <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. To the maximum extent permitted by law, LumaSleep shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.</p>
      <p>We do not guarantee uninterrupted or error-free operation of the App or its features, including third-party integrations.</p>

      <h2>Termination</h2>
      <p>We reserve the right to suspend or terminate your access to the App at any time for violations of these Terms, misuse of the service, or any other reason at our discretion.</p>
      <p>You may terminate your account at any time by deleting the App and contacting us to request account deletion. Active subscriptions must be canceled separately through your device&apos;s subscription settings.</p>

      <h2>Changes to Terms</h2>
      <p>We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.</p>

      <h2>Contact</h2>
      <p>If you have questions about these Terms of Service, please contact us at <a href="mailto:support@lumasleep.ai">support@lumasleep.ai</a>.</p>
    </LegalShell>
  );
}
