import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="pp-page">
      <header className="pp-header">
        <button className="pp-back" onClick={onClose}>
          ← Back
        </button>
        <span className="pp-brand">PALARITY.DEV</span>
      </header>

      <article className="pp-content">
        <div className="pp-hero">
          <p className="pp-label">Legal</p>
          <h1 className="pp-title">Privacy Policy</h1>
          <p className="pp-date">Last updated March 01, 2026</p>
        </div>

        <div className="pp-body">
          <p>
            This Privacy Notice for Palarity AB (doing business as Palarity) ("we," "us," or "our") describes
            how and why we might access, collect, store, use, and/or share ("process") your personal information
            when you use our services ("Services"), including when you visit our website or engage with us in
            other related ways, including any marketing or events.
          </p>
          <p>
            Questions or concerns? Contact us at{' '}
            <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.
          </p>

          {/* Summary */}
          <section>
            <h2>Summary of Key Points</h2>
            <ul>
              <li><strong>Personal information we process:</strong> Information you provide when interacting with our Services.</li>
              <li><strong>Sensitive information:</strong> We do not process sensitive personal information.</li>
              <li><strong>Third-party sources:</strong> We may collect information from public databases, marketing partners, and social media platforms.</li>
              <li><strong>How we process it:</strong> To provide, improve, and administer our Services, communicate with you, and for security and fraud prevention.</li>
              <li><strong>Your rights:</strong> Depending on your location, you may have rights regarding your personal information.</li>
              <li><strong>How to exercise your rights:</strong> Contact us at <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.</li>
            </ul>
          </section>

          {/* TOC */}
          <section>
            <h2>Table of Contents</h2>
            <ol className="pp-toc">
              <li>What Information Do We Collect?</li>
              <li>How Do We Process Your Information?</li>
              <li>What Legal Bases Do We Rely On?</li>
              <li>When and With Whom Do We Share Your Personal Information?</li>
              <li>Do We Use Cookies and Other Tracking Technologies?</li>
              <li>How Do We Handle Your Social Logins?</li>
              <li>How Long Do We Keep Your Information?</li>
              <li>How Do We Keep Your Information Safe?</li>
              <li>Do We Collect Information From Minors?</li>
              <li>What Are Your Privacy Rights?</li>
              <li>Controls for Do-Not-Track Features</li>
              <li>Do United States Residents Have Specific Privacy Rights?</li>
              <li>Do We Make Updates to This Notice?</li>
              <li>How Can You Contact Us About This Notice?</li>
              <li>How Can You Review, Update, or Delete the Data We Collect?</li>
            </ol>
          </section>

          {/* 1 */}
          <section>
            <h2>1. What Information Do We Collect?</h2>
            <h3>Personal information you disclose to us</h3>
            <p><em>In Short: We collect personal information that you provide to us.</em></p>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest
              in obtaining information about us or our products and Services, when you participate in activities
              on the Services, or otherwise when you contact us.
            </p>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Names</li>
              <li>Email addresses</li>
              <li>Usernames</li>
            </ul>
            <p>We do not process sensitive information.</p>

            <h3>Information automatically collected</h3>
            <p><em>In Short: Some information is collected automatically when you visit our Services.</em></p>
            <p>
              We automatically collect certain information when you visit, use, or navigate the Services.
              This includes device and usage information such as your IP address, browser and device
              characteristics, operating system, language preferences, referring URLs, device name, country,
              location, and information about how and when you use our Services. This information is primarily
              needed to maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </p>
            <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. How Do We Process Your Information?</h2>
            <p><em>In Short: We process your information to provide, improve, and administer our Services.</em></p>
            <p>We process your personal information for the following purposes:</p>
            <ul>
              <li><strong>Deliver services:</strong> To provide you with the requested service.</li>
              <li><strong>Support:</strong> To respond to your inquiries and solve any potential issues.</li>
              <li><strong>Administrative communications:</strong> To send details about our products, services, and policy changes.</li>
              <li><strong>Order fulfillment:</strong> To fulfill and manage your orders, payments, returns, and exchanges.</li>
              <li><strong>User communications:</strong> To enable communication between users if applicable.</li>
              <li><strong>Feedback:</strong> To request feedback about your use of our Services.</li>
              <li><strong>Marketing:</strong> To send marketing and promotional communications in accordance with your preferences.</li>
              <li><strong>Advertising:</strong> To deliver targeted advertising tailored to your interests.</li>
              <li><strong>Analytics:</strong> To determine the effectiveness of our marketing campaigns.</li>
              <li><strong>Vital interests:</strong> To save or protect an individual's vital interest, such as to prevent harm.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2>3. What Legal Bases Do We Rely On?</h2>
            <p><em>In Short: We only process your personal information when we have a valid legal reason to do so.</em></p>

            <h3>EU and UK residents (GDPR)</h3>
            <ul>
              <li><strong>Consent:</strong> We may process your information if you have given us permission. You can withdraw consent at any time.</li>
              <li><strong>Performance of a Contract:</strong> When necessary to fulfill our contractual obligations to you.</li>
              <li><strong>Legitimate Interests:</strong> When reasonably necessary to achieve our legitimate business interests, including sending special offers, developing personalized advertising, and understanding user experience.</li>
              <li><strong>Legal Obligations:</strong> When necessary for compliance with our legal obligations.</li>
              <li><strong>Vital Interests:</strong> When necessary to protect your vital interests or those of a third party.</li>
            </ul>

            <h3>Canada residents</h3>
            <p>
              We may process your information if you have given us express or implied consent. You can withdraw
              your consent at any time. In some exceptional cases, we may be legally permitted to process your
              information without consent as permitted by applicable law.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2>4. When and With Whom Do We Share Your Personal Information?</h2>
            <p><em>In Short: We may share information in specific situations with the following third parties.</em></p>
            <ul>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of our business.</li>
              <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Do We Use Cookies and Other Tracking Technologies?</h2>
            <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to gather
              information when you interact with our Services. Some online tracking technologies help us
              maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and
              assist with basic site functions.
            </p>
            <p>
              We also permit third parties and service providers to use online tracking technologies on our
              Services for analytics and advertising purposes. Specific information about how we use such
              technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. How Do We Handle Your Social Logins?</h2>
            <p><em>In Short: If you log in using a social media account, we may have access to certain information about you.</em></p>
            <p>
              Our Services offer you the ability to register and log in using your third-party social media
              account details. We will receive certain profile information from your social media provider,
              such as your name, email address, and profile picture. We will use this information only for
              the purposes described in this Privacy Notice.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2>7. How Long Do We Keep Your Information?</h2>
            <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this notice.</em></p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes
              set out in this Privacy Notice, unless a longer retention period is required by law. When we
              have no ongoing legitimate business need to process your personal information, we will either
              delete or anonymize it.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. How Do We Keep Your Information Safe?</h2>
            <p><em>In Short: We aim to protect your personal information through organizational and technical security measures.</em></p>
            <p>
              We have implemented appropriate and reasonable technical and organizational security measures
              to protect any personal information we process. However, no electronic transmission over the
              Internet or information storage technology can be guaranteed to be 100% secure. You should
              only access the Services within a secure environment.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Do We Collect Information From Minors?</h2>
            <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
            <p>
              We do not knowingly collect, solicit data from, or market to children under 18 years of age.
              By using the Services, you represent that you are at least 18 years old. If we learn that
              personal information from users under 18 has been collected, we will deactivate the account
              and delete such data. If you become aware of any data we may have collected from children
              under 18, please contact us at{' '}
              <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. What Are Your Privacy Rights?</h2>
            <p><em>In Short: Depending on your location, you have rights that allow you greater access to and control over your personal information.</em></p>
            <p>
              In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under
              applicable data protection laws, including the right to:
            </p>
            <ul>
              <li>Request access and obtain a copy of your personal information</li>
              <li>Request rectification or erasure</li>
              <li>Restrict the processing of your personal information</li>
              <li>Data portability (if applicable)</li>
              <li>Not be subject to automated decision-making</li>
            </ul>
            <p>
              If you are in the EEA or UK and believe we are unlawfully processing your personal information,
              you have the right to complain to your Member State data protection authority. If you are in
              Switzerland, you may contact the Federal Data Protection and Information Commissioner.
            </p>
            <h3>Withdrawing your consent</h3>
            <p>
              You have the right to withdraw your consent at any time by contacting us using the details
              in Section 14. This will not affect the lawfulness of processing before its withdrawal.
            </p>
            <h3>Opting out of marketing</h3>
            <p>
              You can unsubscribe from marketing communications at any time by clicking the unsubscribe
              link in our emails or by contacting us at{' '}
              <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2>11. Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology
              standard for recognizing and implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals. If a standard is adopted that we must follow in the
              future, we will inform you in a revised version of this Privacy Notice.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2>12. Do United States Residents Have Specific Privacy Rights?</h2>
            <p><em>In Short: If you are a US resident, you may have the right to request access to and details about your personal information.</em></p>

            <h3>Categories of Personal Information We Collect</h3>
            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A. Identifiers</td>
                    <td>Name, alias, postal address, phone, IP address, email, account name</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>B. California Customer Records</td>
                    <td>Name, contact info, education, employment, financial information</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>C. Protected classification characteristics</td>
                    <td>Gender, age, race, ethnicity, national origin, marital status</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>D. Commercial information</td>
                    <td>Transaction info, purchase history, financial details</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>E. Biometric information</td>
                    <td>Fingerprints and voiceprints</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>F. Internet or network activity</td>
                    <td>Browsing history, search history, online behavior</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>G. Geolocation data</td>
                    <td>Device location</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>H. Audio, electronic, sensory</td>
                    <td>Images, audio, video, or call recordings</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>I. Professional information</td>
                    <td>Business contact details, job title, work history</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>J. Education information</td>
                    <td>Student records and directory information</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>K. Inferences</td>
                    <td>Inferences drawn to create a profile about an individual</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>L. Sensitive personal information</td>
                    <td>—</td>
                    <td>NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Your Rights</h3>
            <ul>
              <li>Right to know whether or not we are processing your personal data</li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request deletion of your personal data</li>
              <li>Right to obtain a copy of personal data you previously shared with us</li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>Right to opt out of targeted advertising, the sale of personal data, or profiling</li>
            </ul>

            <h3>How to Exercise Your Rights</h3>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.
            </p>

            <h3>Appeals</h3>
            <p>
              If we decline to take action regarding your request, you may appeal our decision by emailing
              us at <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>. If your appeal is
              denied, you may submit a complaint to your state attorney general.
            </p>

            <h3>California "Shine The Light" Law</h3>
            <p>
              California Civil Code Section 1798.83 permits California residents to request, once a year
              and free of charge, information about categories of personal information we disclosed to
              third parties for direct marketing purposes. Submit such requests in writing using the
              contact details in Section 14.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2>13. Do We Make Updates to This Notice?</h2>
            <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            <p>
              We may update this Privacy Notice from time to time. The updated version will be indicated
              by an updated date at the top of this notice. We encourage you to review this Privacy Notice
              frequently to be informed of how we are protecting your information.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2>14. How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may email us at{' '}
              <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a> or contact us by post at:
            </p>
            <address className="pp-address">
              Palarity AB<br />
              Kungsgatan 91B<br />
              Uppsala 75318<br />
              Sweden
            </address>
          </section>

          {/* 15 */}
          <section>
            <h2>15. How Can You Review, Update, or Delete the Data We Collect?</h2>
            <p>
              Based on the applicable laws of your country or state of residence, you may have the right
              to request access to the personal information we collect from you, correct inaccuracies, or
              delete your personal information. To make such a request, please contact us at{' '}
              <a href="mailto:palarity.ab@gmail.com">palarity.ab@gmail.com</a>.
            </p>
          </section>

          <p className="pp-generator-note">
            This Privacy Policy was created using Termly's{' '}
            <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener noreferrer">
              Privacy Policy Generator
            </a>.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
