import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to delete your LumaSleep account and associated data.",
  alternates: { canonical: abs("/delete-account/") },
};

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete Your Account"
      subtitle="LumaSleep lets you permanently delete your account and associated data at any time."
    >
      <h2>Delete Your Account in the App</h2>
      <ol>
        <li>Open the <strong>LumaSleep</strong> app</li>
        <li>Go to <strong>Settings</strong></li>
        <li>Tap <strong>Delete account</strong></li>
        <li>Confirm the deletion</li>
      </ol>
      <p>Deletion takes effect immediately and cannot be undone.</p>

      <h2>What Is Deleted</h2>
      <ul>
        <li>Your account and login credentials (email address, sign-in identity)</li>
        <li>Your profile and preferences</li>
        <li>Your sleep records</li>
        <li>Your sound drafts and private generated sound files</li>
        <li>Your subscription linkage in our systems</li>
      </ul>

      <h2>What Is Kept</h2>
      <ul>
        <li>
          Sounds you published to the Community remain available so that other users&apos; saved
          libraries keep working — they are <strong>anonymized</strong> and re-attributed to
          &ldquo;Anonymous Dreamer&rdquo;, with no link to you or your identity.
        </li>
        <li>
          Purchase records are retained by Apple, Google Play, and our subscription processor
          (RevenueCat) as required for billing and tax compliance.
        </li>
      </ul>
      <p>No additional retention period applies — everything else is removed at the time of deletion.</p>

      <h2>Delete Some of Your Data Without Deleting Your Account</h2>
      <p>
        You can delete individual sounds and drafts from your library at any time inside the app,
        without deleting your account.
      </p>

      <h2>Can&apos;t Access the App?</h2>
      <p>
        Email <a href="mailto:support@lumasleep.ai">support@lumasleep.ai</a> from the email address
        registered to your account and request deletion. We will delete your account and associated
        data within 30 days.
      </p>
    </LegalShell>
  );
}
