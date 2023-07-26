import "./App.css";
import Professionalexperience from "./components/Professional Experience/professionalexperience.component";
import Objective from "./components/Objective/objective.component";
import Summary from "./components/Summary/summary.component";
import Achievements from "./components/Achievements/achievements.component";
import Certifications from "./components/Certifications/certifications.component";
import Footer from "./components/Footer/footer.component";
import Contacts from "./components/Contacts/contacts.component";
import BioImage from "./components/Bio-Image/bio-image.component";
import Header from "./components/Header/header.component";
import Education from "./components/Education/Education";
import Projects from "./components/projects/Projects"

function App() {
  return (
    <div className="Website">
      {/* Header */}
      <Header />

      {/* Contacts */}
      <Contacts />

      {/* Bio Image */}
      <BioImage />

      {/* Objective */}
      <Objective />

      {/* Summary */}
      <Summary />

      {/* Achievements */}
      <Achievements />

      {/* Certifications */}
      <Certifications />


      {/* Education */}
      <Education />

      <Projects/>
      
      {/* Professional Experience */}
      <Professionalexperience />

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
