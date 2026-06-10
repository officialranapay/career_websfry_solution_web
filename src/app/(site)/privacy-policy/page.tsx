import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Database,
  Eye,
  UserCheck,
  RefreshCw,
  FileText,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black min-h-screen">
      <div className="wrapper px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}

          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 font-medium mb-5">
              <Shield size={18} />
              Your Privacy Matters
            </span>

            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>

            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-7">
              We value your trust and are committed to protecting your
              information. This Privacy Policy explains how we collect, use,
              store, and safeguard your personal data whenever you use our
              platform.
            </p>

            <div className="mt-6 inline-block px-5 py-2 rounded-lg bg-white dark:bg-gray-800 shadow">
              <span className="text-gray-500">Last Updated :</span>
              <span className="font-semibold ml-2 text-gray-900 dark:text-white">
                15 January 2028
              </span>
            </div>
          </div>

          {/* Grid */}

          <div className="grid gap-8">

            {/* Card 1 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
             <div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    1. Introduction
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    Welcome to our Hiring Portal. We value your privacy and are committed to
    protecting the personal information you share with us. This Privacy Policy
    explains how we collect, use, store, and safeguard your data when you
    register, apply for jobs, post vacancies, or use any of our services.
    By accessing or using our platform, you agree to the practices described
    in this Privacy Policy.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    2. Information We Collect
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-4">
    To provide recruitment services effectively, we may collect the following
    information from candidates and employers:
  </p>

  <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
    <li>Full Name and Contact Details</li>
    <li>Email Address and Phone Number</li>
    <li>Residential Address</li>
    <li>Resume / CV and Cover Letter</li>
    <li>Educational Qualifications</li>
    <li>Work Experience and Employment History</li>
    <li>Skills, Certifications, and Projects</li>
    <li>Profile Photograph (Optional)</li>
    <li>Company Information for Employers</li>
    <li>Device Information, IP Address, and Browser Data</li>
  </ul>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    3. How We Use Your Information
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-4">
    The information collected is used to improve your experience and provide
    recruitment-related services efficiently.
  </p>

  <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
    <li>Create and manage your account.</li>
    <li>Allow candidates to apply for jobs.</li>
    <li>Enable employers to review applications.</li>
    <li>Match suitable candidates with job opportunities.</li>
    <li>Send interview invitations and notifications.</li>
    <li>Provide customer support.</li>
    <li>Improve website performance and user experience.</li>
    <li>Prevent fraud and unauthorized activities.</li>
    <li>Comply with legal and regulatory obligations.</li>
  </ul>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    4. Resume & Profile Visibility
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    When candidates upload resumes or create profiles on our platform, that
    information may be visible to verified employers and recruiters for
    recruitment purposes. Users have the ability to update, edit, or remove
    their profiles and resumes at any time through their account settings.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    5. Sharing of Information
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-4">
    We do not sell your personal information to third parties. Your data may
    only be shared under the following circumstances:
  </p>

  <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
    <li>With verified employers when you apply for a job.</li>
    <li>With trusted service providers supporting our platform.</li>
    <li>With payment providers if premium services are used.</li>
    <li>When required by law or government authorities.</li>
    <li>To protect the rights and security of our platform.</li>
  </ul>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    6. Cookies & Tracking Technologies
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    Our platform uses cookies and similar technologies to remember your
    preferences, maintain login sessions, analyze website traffic, and improve
    overall functionality. You may disable cookies through your browser
    settings, although certain features may become unavailable.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    7. Data Security
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    We implement industry-standard security measures including SSL encryption,
    secure servers, password protection, access controls, and regular security
    monitoring to protect your information against unauthorized access,
    alteration, disclosure, or destruction.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    8. Data Retention
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    Your personal information is retained only for as long as necessary to
    provide recruitment services, comply with legal obligations, resolve
    disputes, and maintain platform security. Inactive accounts may be removed
    after a reasonable period in accordance with our internal policies.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    9. Your Rights
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-4">
    As a user of our platform, you have the following rights:
  </p>

  <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
    <li>Access your personal information.</li>
    <li>Update or correct inaccurate information.</li>
    <li>Download your stored data.</li>
    <li>Delete your account and personal information.</li>
    <li>Withdraw consent for marketing communications.</li>
    <li>Request restriction of certain data processing activities.</li>
  </ul>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    10. Employer Responsibilities
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    Employers using our platform must use candidate information solely for
    recruitment purposes. They must maintain confidentiality, avoid sharing
    applicant data without consent, and comply with all applicable data
    protection laws. Misuse of candidate information may result in suspension
    or termination of employer accounts.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    11. Third-Party Services
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    Our website may integrate with third-party services such as payment
    gateways, analytics providers, authentication services, and communication
    platforms. These providers operate under their own privacy policies, and
    we encourage users to review them separately.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    12. Changes to This Privacy Policy
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    We may update this Privacy Policy periodically to reflect changes in our
    services or legal requirements. Any modifications will be published on this
    page with an updated revision date. Continued use of the platform after
    such updates constitutes acceptance of the revised Privacy Policy.
  </p>
</div>

<div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    13. Contact Us
  </h2>

  <p className="text-gray-600 dark:text-gray-400 leading-8">
    If you have any questions regarding this Privacy Policy or the way your
    information is handled, please contact our support team through the Contact
    page or email us at <strong>support@yourcompany.com</strong>. We will make
    every reasonable effort to respond to your request promptly.
  </p>
</div>

              <p className="text-gray-600 dark:text-gray-400 leading-8">
                We respect your privacy and believe that every user deserves
                transparency regarding how their information is collected and
                processed. By accessing or using our services, you agree to the
                practices described in this Privacy Policy. We encourage every
                visitor to read this document carefully before using our
                platform.
              </p>
            </div>

            {/* Card 2 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-6">
                <Database className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  Information We Collect
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="rounded-xl border p-5 hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                  <h3 className="font-semibold mb-3 text-lg">
                    Personal Information
                  </h3>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Full Name</li>
                    <li>• Email Address</li>
                    <li>• Phone Number</li>
                    <li>• Billing Address</li>
                    <li>• Shipping Address</li>
                  </ul>
                </div>

                <div className="rounded-xl border p-5 hover:bg-primary-50 dark:hover:bg-gray-800 transition">
                  <h3 className="font-semibold mb-3 text-lg">
                    Technical Information
                  </h3>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Device Information</li>
                    <li>• Browser Details</li>
                    <li>• IP Address</li>
                    <li>• Cookies</li>
                    <li>• Usage Analytics</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Card 3 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-5">
                <Eye className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  How We Use Your Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Process orders and payments",
                  "Provide customer support",
                  "Improve website performance",
                  "Send updates and notifications",
                  "Prevent fraud and abuse",
                  "Maintain account security",
                  "Personalize user experience",
                  "Comply with legal obligations",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 hover:bg-primary-50 dark:hover:bg-gray-800 transition"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* Card 4 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-5">
                <Lock className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  Data Security
                </h2>
              </div>

              <p className="leading-8 text-gray-600 dark:text-gray-400">
                Your information is protected using industry-standard security
                technologies including SSL encryption, secure servers, access
                controls, and continuous monitoring. Payment information is
                processed through trusted third-party gateways and is never
                stored on our servers.
              </p>
            </div>

            {/* Card 5 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-5">
                <UserCheck className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  Your Rights
                </h2>
              </div>

              <ul className="space-y-4">

                {[
                  "Request access to your personal data",
                  "Request correction of inaccurate information",
                  "Request deletion of your account",
                  "Withdraw consent for marketing emails",
                  "Export your stored information",
                  "Object to unnecessary data processing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="border rounded-xl p-4 hover:border-primary-500 hover:translate-x-2 transition-all"
                  >
                    {item}
                  </li>
                ))}

              </ul>
            </div>

            {/* Card 6 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-5">
                <RefreshCw className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  Cookies Policy
                </h2>
              </div>

              <p className="leading-8 text-gray-600 dark:text-gray-400">
                Cookies help us remember your preferences, improve website
                performance, analyze visitor behavior, and provide a better
                browsing experience. You may disable cookies through your
                browser settings, although some features may no longer function
                correctly.
              </p>
            </div>

            {/* Card 7 */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

              <div className="flex items-center gap-3 mb-5">
                <FileText className="text-primary-500" />
                <h2 className="text-2xl font-bold dark:text-white">
                  Third Party Services
                </h2>
              </div>

              <p className="leading-8 text-gray-600 dark:text-gray-400">
                Some services on our platform may integrate with trusted third
                parties for payment processing, analytics, authentication, or
                communication. These providers have their own privacy policies,
                and we recommend reviewing them before using their services.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

