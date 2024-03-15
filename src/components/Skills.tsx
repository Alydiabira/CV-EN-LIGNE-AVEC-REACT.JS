import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences & Connaissance</h2>
        <Skill title="HTML" rating={5} />
        <Skill title="CSS" rating={4} />
        <Skill title="JAVASCRIPT" rating={4} />
        <Skill title="REACT" rating={4} />
        <Skill title="BOOTSTRAP" rating={3} />
        <Skill title="Python" rating={5} />
        <Skill title="MSQL" rating={5} />

        
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating={2} />
        <Skill title="Arabe" rating={2} />
      </div>
      <Interests />
    </>
  );
};

export default Skills;
