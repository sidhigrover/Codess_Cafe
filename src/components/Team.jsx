import "../ui/Team.css";
import { teamData } from "../data/team";

const Team = () => {
  return (
    <section className="team-wrapper">
      <h2 className="team-heading">
        MEET THE <span>TEAM</span>
      </h2>

      <div className="team-row">
        {teamData.map((m, i) => (
          <div className="member" key={i}>
            {/* Team Section */}
            <div className="img-frame">
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  in
                </a>
              )}

              <img src={m.img} alt={m.name} />
            </div>

            <h3>{m.name}</h3>

            <p className="role">{m.role}</p>

            {m.desc && <p className="desc">{m.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;