import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="max-w-5xl mx-auto">

          {/* Header */}

          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-primary-600 mb-2 uppercase tracking-wider">
              Legal Information
            </p>

            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>

            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-8">
              Please read these Terms of Service carefully before using our
              Hiring Portal. By accessing or using our platform, you agree to
              comply with these terms and conditions.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-primary-50 dark:bg-primary-900/20 px-5 py-2">
              <span className="text-gray-500">Last Updated :</span>
              <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                15 January 2028
              </span>
            </div>
          </div>

          {/* 1 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              By creating an account, browsing our website, posting jobs,
              applying for vacancies, or using any feature of our Hiring Portal,
              you acknowledge that you have read, understood, and agreed to
              these Terms of Service. If you do not agree with these terms,
              please discontinue the use of our platform immediately.
            </p>
          </div>

          {/* 2 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              2. User Eligibility
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8 mb-4">
              To use our platform, users must:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li>Be legally eligible to work or recruit.</li>
              <li>Provide accurate and truthful information.</li>
              <li>Maintain the confidentiality of account credentials.</li>
              <li>Use the platform only for lawful purposes.</li>
            </ul>
          </div>

          {/* 3 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              3. Account Registration
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              Users are responsible for maintaining accurate account
              information. Any activity performed using your account is your
              responsibility. We reserve the right to suspend or terminate
              accounts containing false or misleading information.
            </p>
          </div>

          {/* 4 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              4. Candidate Responsibilities
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li>Provide genuine resumes and qualifications.</li>
              <li>Do not upload misleading or fraudulent information.</li>
              <li>Apply only for suitable job opportunities.</li>
              <li>Maintain professional communication with employers.</li>
              <li>Respect interview schedules and recruitment processes.</li>
            </ul>
          </div>

          {/* 5 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              5. Employer Responsibilities
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li>Post legitimate job opportunities only.</li>
              <li>Provide accurate company information.</li>
              <li>Respect candidate privacy and confidentiality.</li>
              <li>Do not misuse applicant information.</li>
              <li>Avoid discriminatory hiring practices.</li>
            </ul>
          </div>

          {/* 6 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              6. Prohibited Activities
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li>Posting fake jobs or misleading advertisements.</li>
              <li>Uploading malicious software or harmful content.</li>
              <li>Attempting unauthorized access to the platform.</li>
              <li>Harassing or abusing other users.</li>
              <li>Using automated bots without permission.</li>
              <li>Violating intellectual property rights.</li>
            </ul>
          </div>

          {/* 7 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              7. Job Listings & Applications
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              We do not guarantee that candidates will receive employment or
              that employers will successfully hire through our platform.
              Recruitment decisions remain solely between employers and
              applicants.
            </p>
          </div>

          {/* 8 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              8. Intellectual Property
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              All website content, including logos, graphics, designs, text,
              software, and branding, belongs to the platform or its licensors
              and may not be copied, reproduced, or distributed without written
              permission.
            </p>
          </div>

          {/* 9 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              9. Payments & Subscription
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              Certain premium services may require payment. Subscription fees
              are non-transferable and subject to the pricing displayed at the
              time of purchase unless otherwise specified.
            </p>
          </div>

          {/* 10 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              10. Suspension & Termination
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              We reserve the right to suspend or permanently terminate any
              account found violating these Terms, engaging in fraudulent
              activity, or harming the integrity of the platform.
            </p>
          </div>

          {/* 11 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              11. Disclaimer
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              Our Hiring Portal provides recruitment services on an "as-is"
              basis. We make no guarantees regarding employment offers,
              candidate suitability, employer credibility, or uninterrupted
              platform availability.
            </p>
          </div>

          {/* 12 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              12. Limitation of Liability
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              We shall not be liable for indirect, incidental, or consequential
              damages arising from the use of our services, including hiring
              decisions, employment disputes, or data inaccuracies submitted by
              users.
            </p>
          </div>

          {/* 13 */}

          <div className="mb-10 rounded-2xl border bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              13. Changes to Terms
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-8">
              We may revise these Terms of Service at any time. Updated versions
              will be published on this page, and continued use of the platform
              after modifications indicates your acceptance of the revised
              terms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
