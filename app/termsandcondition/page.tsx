export default function TermsAndConditions() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pt-32 text-hackathon-beige">
      <h1 className="text-3xl font-press-start text-hackathon-lavender mb-8">
        TERMS & CONDITIONS
      </h1>

      <section className="mb-10">
        <p className="text-lg font-jetbrains">
          Welcome to the <strong>COLOSSUS Hackathon</strong>. This document
          outlines the Terms and Conditions (T&C) that govern participation in
          the event. By registering and participating in the hackathon, all
          participants agree to abide by these rules and regulations. This
          hackathon is designed to foster innovation, collaboration, and the
          development of groundbreaking ideas in a competitive yet supportive
          environment.
        </p>
      </section>

      {/* Event Participation */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          1. Event Participation
        </h2>

        <h3 className="text-xl font-press-start text-hackathon-lavender mb-2">
          Eligibility
        </h3>
        <p className="font-jetbrains">
          • Participation is open to individuals aged{" "}
          <strong>18 years and above</strong>.<br />• Those under 18 must
          provide <strong>written consent</strong> from a legal guardian.
          <br />• Open to students, professionals, and anyone interested in
          technology and innovation.
        </p>

        <h3 className="text-xl font-press-start text-hackathon-lavender mt-6 mb-2">
          Venue
        </h3>
        <p className="font-jetbrains">
          • This is an <strong>offline event</strong>, and attendance at the
          specified venue is mandatory.
          <br />
          • Details will be shared via email after registration.
          <br />• Participants are responsible for their own travel.
        </p>
      </section>

      {/* Health and Safety */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          2. Health and Safety
        </h2>
        <p className="font-jetbrains">
          • Participants must manage personal health conditions, including
          allergies.
          <br />
          • Organizers are not liable for any adverse health reactions or
          incidents.
          <br />• In case of an emergency, notify the event staff immediately.
          First aid will be available.
        </p>
      </section>

      {/* Idea Submission */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          3. Idea Submission and Evaluation
        </h2>

        <h3 className="text-xl font-press-start text-hackathon-lavender mb-2">
          Submission Format
        </h3>
        <p className="font-jetbrains">
          • All ideas must be submitted in <strong>PPT or PPTX</strong> format
          (max 30 slides).
          <br />• Required sections include: Project Title, Team Details,
          Problem Statement, Uniqueness, Key Features, Technologies Used, and
          Architecture Diagram.
        </p>
      </section>

      {/* Payment and Refunds */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          4. Payment and Refund Policy
        </h2>
        <p className="font-jetbrains">
          • Registration fee is to be paid via <strong>Razorpay</strong>.<br />•{" "}
          <strong>Refunds:</strong> If the idea is not selected, a{" "}
          <strong>90% refund</strong> will be given.
          <br />
          • No refund for late submissions or no-shows.
          <br />
          • Referral discounts: 10% refund for each successful referral.
          <br />• Refunds will be processed within 7-10 business days.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          5. Intellectual Property
        </h2>
        <p className="font-jetbrains">
          • Participants retain full ownership of their projects.
          <br />
          • Organizers have the right to showcase projects for promotional
          purposes.
          <br />• Submissions are treated as confidential.
        </p>
      </section>

      {/* General Rules */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          6. General Rules
        </h2>
        <p className="font-jetbrains">
          • All work must be original. Plagiarism results in disqualification.
          <br />
          • Organizers reserve the right to update these Terms & Conditions.
          <br />• Participants must follow all hackathon rules.
        </p>
      </section>

      {/* Code of Conduct */}
      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          7. Code of Conduct
        </h2>
        <p className="font-jetbrains">
          • Participants must maintain professionalism and respect others.
          <br />• Harassment or misconduct will result in immediate
          disqualification.
        </p>
      </section>
    </div>
  );
}