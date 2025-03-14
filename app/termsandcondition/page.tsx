export default function TermsAndConditions() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 pt-32 text-hackathon-beige">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-press-start text-hackathon-lavender mb-8 text-center">
        TERMS & CONDITIONS
      </h1>

      <section className="mb-10">
        <p className="text-base sm:text-lg font-jetbrains leading-relaxed">
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
        <h2 className="text-lg sm:text-xl md:text-2xl font-press-start text-hackathon-light-pink mb-4">
          1. Event Participation
        </h2>

        <h3 className="text-base sm:text-lg md:text-xl font-press-start text-hackathon-lavender mb-2">
          Eligibility
        </h3>
        <p className="text-sm sm:text-base font-jetbrains">
          • Participation is open to individuals aged{" "}
          <strong>18 years and above</strong>.<br />• Those under 18 must
          provide <strong>written consent</strong> from a legal guardian.
          <br />• Open to students, professionals, and anyone interested in
          technology and innovation.
        </p>

        <h3 className="text-base sm:text-lg md:text-xl font-press-start text-hackathon-lavender mt-6 mb-2">
          Venue
        </h3>
        <p className="text-sm sm:text-base font-jetbrains">
          • This is an <strong>offline event</strong>, and attendance at the
          specified venue is mandatory.
          <br />
          • Details will be shared via email after registration.
          <br />• Participants are responsible for their own travel.
        </p>
      </section>

      {/* Health and Safety */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-press-start text-hackathon-light-pink mb-4">
          2. Health and Safety
        </h2>
        <p className="text-sm sm:text-base font-jetbrains">
          • Participants must manage personal health conditions, including
          allergies.
          <br />
          • Organizers are not liable for any adverse health reactions or
          incidents.
          <br />• In case of an emergency, notify the event staff immediately.
          First aid will be available.
        </p>
      </section>

      {/* General Rules */}
      <section className="mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-press-start text-hackathon-light-pink mb-4">
          6. General Rules
        </h2>
        <p className="text-sm sm:text-base font-jetbrains">
          • All work must be original. Plagiarism results in disqualification.
          <br />
          • Organizers reserve the right to update these Terms & Conditions.
          <br />• Participants must follow all hackathon rules.
        </p>
      </section>
    </div>
  );
}
