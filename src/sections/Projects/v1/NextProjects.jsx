import { SectionTitle, SectionTitleWrapper } from "components/sectionTitle";
import ProjectCard from "./ProjectCard/ProjectCard";
import NextProjectsStyleWrapper from "./NextProjects.style";
import data from "assets/data/projects/upcommingProjects";
import manifesto1 from "assets/images/manifesto/manifesto1.svg";
import manifesto2 from "assets/images/manifesto/manifesto2.svg";
import manifesto3 from "assets/images/manifesto/manifesto3.svg";

const NextProjects = () => {
  return (
    <NextProjectsStyleWrapper>
      <div className="container">
        <SectionTitleWrapper>
          <SectionTitle title="Manifesto" />
        </SectionTitleWrapper>

        <div className="row">
          <div className="col-6">
            <img src={manifesto1}/>
          </div>
          <div className="col-6">            
            <p>
            Once upon a time, in a world not so different from our own, there was a group of tech-savvy youngsters who loved video games more than anything in the world. They would spend hours huddled around their screens, navigating virtual worlds, slaying monsters, and saving princesses. But one day, something strange happened.
            A mysterious arcade appeared in the middle of town, beckoning the gamers inside with its neon lights and retro music. They hesitated at first, unsure if it was safe to enter, but curiosity got the better of them, and they stepped inside.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p>
            To their surprise, they found themselves in a fantastical world, filled with other gamers, flashing screens, and a dizzying array of arcade games. They quickly discovered that this was no ordinary arcade. It was a Meta Arcade Club, a place where gamers could connect with other like-minded people and explore the exciting world of web3 gaming.
            The club hosted amazing events, where gamers from all over the world would gather to compete, learn, and share their knowledge about the latest web3 games. They would battle it out in fierce tournaments, exchange tips and tricks, and even collaborate on creating their own games. There was always something new to discover at the Meta Arcade Club, and the young gamers loved it.
            </p>
          </div>
          <div className="col-6">
            <img src={manifesto2}/>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
              <img src={manifesto3}/>
          </div>
          <div className="col-6">
            <p>
            But the real magic of the Meta Arcade Club wasn't just in the games, it was in the people. The club became a hub for a vibrant and supportive community of gamers, who shared a passion for gaming and an eagerness to learn about the web3 space. They formed lasting friendships, and even started working on their own gaming projects together.
            And so, the Meta Arcade Club became more than just a place to play games, it became a place to connect with others, to learn, to grow, and to have fun. The young gamers knew they had found something special, and they couldn't wait to see what adventures lay ahead in the world of web3 gaming.        
            </p>
          </div>
        </div>
        {/* <div className="row align-items-center single-project-row">
          {data?.map((project, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <ProjectCard {...project} />
            </div>
          ))}
        </div> */}
      </div>
    </NextProjectsStyleWrapper>
  );
};

export default NextProjects;
