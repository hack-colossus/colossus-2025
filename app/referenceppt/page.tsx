export default function ReferencePPT() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pt-32 text-hackathon-beige">
      <h1 className="text-3xl font-press-start text-hackathon-lavender mb-8">
        REFERENCE PPT
      </h1>

      <section className="mb-10">
        <p className="text-lg font-jetbrains">
          To help you structure your project submission effectively, we have
          provided a<strong> Reference PPT</strong>. This template will guide
          you through the key sections required for submission.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          Download the Reference PPT
        </h2>

        <p className="font-jetbrains mb-6">
          Click the button below to download the official Reference PPT for the
          <strong> COLOSSUS Hackathon</strong>. This will help you structure
          your submission correctly.
        </p>

        <a
          href="https://www.canva.com/design/DAGhsgbUEbE/ntmnhZJCQS2fZ8XQp4cYeA/edit?utm_content=DAGhsgbUEbE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" // <-- REPLACE WITH ACTUAL PPT LINK
          className="bg-hackathon-purple text-hackathon-dark hover:bg-hackathon-lavender px-6 py-3 text-lg font-press-start rounded-lg transition-colors duration-300 inline-block"
          download
        >
          📄 Download PPT
        </a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          📌 What's Inside?
        </h2>
        <ul className="text-sm sm:text-base font-jetbrains list-disc list-inside">
          <li>✅ Project Title & Team Details</li>
          <li>✅ Brief About the Idea</li>
          <li>✅ What problem does your project aim to solve?</li>
          <li>✅ Key Features</li>
          <li>✅ Technologies Used</li>
          <li>✅ Architecture Diagram</li>
          <li>✅ Team Members Details</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-press-start text-hackathon-light-pink mb-4">
          ⏳ Submission Deadline
        </h2>
        <p className="font-jetbrains">
          Make sure to submit your final PPT before <strong>April 6th</strong>{" "}
          to be eligible for evaluation.
        </p>
      </section>
    </div>
  );
}
