import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LumaSleep collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" subtitle="Last updated: February 21, 2026">
      <h2>Information We Collect</h2>
      <p>LumaSleep collects minimal data to provide you with a great experience. This includes:</p>
      <ul>
        <li><strong>Account information</strong> — email address and authentication credentials when you create an account.</li>
        <li><strong>App preferences</strong> — sound selections, playlists, bedtime settings, and onboarding choices, stored to personalize your experience.</li>
        <li><strong>Sleep data</strong> — if you opt in, we access sleep stage data from Apple Health (iOS) or Health Connect (Android) to display sleep insights within the app.</li>
        <li><strong>AI-generated content</strong> — text prompts you submit for AI sound generation are sent to our backend server for processing.</li>
        <li><strong>Subscription status</strong> — managed securely through Apple App Store or Google Play Store via RevenueCat.</li>
      </ul>

      <h2>How We Use Your Data</h2>
      <p>Your data is used solely to personalize your experience within the app. Specifically:</p>
      <ul>
        <li>We use your preferences to remember your sound selections and playlists.</li>
        <li>We use sleep data to compute your sleep score and display trends and insights.</li>
        <li>We use AI prompts to generate custom soundscapes via our backend service.</li>
        <li>We do <strong>not</strong> sell or share your personal data with third parties for advertising purposes.</li>
      </ul>

      <h2>Data Storage &amp; Security</h2>
      <p>Your preferences and settings are stored locally on your device and synced to your account via Supabase (a secure, hosted database). AI-generated sound files are saved locally on your device.</p>
      <p>We use industry-standard security measures including encrypted connections (HTTPS/TLS), row-level security on database tables, and secure authentication via Supabase Auth.</p>

      <h2>Third-Party Services</h2>
      <p>LumaSleep integrates with the following third-party services, each governed by its own privacy policy:</p>
      <ul>
        <li><strong>Apple Health / Health Connect</strong> — for sleep tracking (opt-in only). Data stays on your device unless you enable sync.</li>
        <li><strong>Supabase</strong> — for user authentication and cloud data storage.</li>
        <li><strong>ElevenLabs</strong> — for AI-powered sound generation. Your text prompts are sent to their API.</li>
        <li><strong>RevenueCat</strong> — for subscription and purchase management.</li>
        <li><strong>Freesound.org</strong> — for sourcing ambient sound previews (no user data is shared).</li>
        <li><strong>Unsplash</strong> — for artwork images (no user data is shared).</li>
        <li><strong>Google Sign-In / Apple Sign-In</strong> — for OAuth authentication.</li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, correct, or delete your account and associated data at any time.</li>
        <li>Revoke health data permissions through your device settings.</li>
        <li>Delete all local data by uninstalling the app.</li>
        <li>Request a copy of your data or account deletion by contacting us.</li>
      </ul>
      <p>For data requests, contact us at <a href="mailto:support@lumasleep.com">support@lumasleep.com</a>.</p>

      <h2>Children&apos;s Privacy</h2>
      <p>LumaSleep is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete such information.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Continued use of the app after changes constitutes acceptance of the updated policy. We encourage you to review this page periodically.</p>

      <h2>Contact</h2>
      <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@lumasleep.com">support@lumasleep.com</a>.</p>
    </LegalShell>
  );
}
