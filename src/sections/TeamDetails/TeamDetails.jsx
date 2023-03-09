import TeamDetailsStyleWrapper from "./TeamDetails.style";
import Team from "sections/Team/v1";

const TeamDetails = () => {
  return (
    <TeamDetailsStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="right_content">
              <p>
              Welcome to the Meta Arcade team, where we bring the fun and excitement of NFT gaming to the next level! We're a group of passionate individuals who come from different backgrounds, but share a common goal - to make the Meta Arcade the best NFT gaming experience out there.
              </p>
              <p>
              Who are the masterminds behind the Meta Arcade, you ask? 
              Well, first we have our head honcho, the big cheese, the top dog - the boss who keeps us all in line and on track. 
              Then we have our fearless leader, the creative genius who dreams up new game ideas and keeps us all inspired. 
              And of course, we can't forget our tech wizard who keeps the platform running like a well-oiled machine.
              </p>
              <p>
              But wait, there's more! We also have our resident comedian who keeps us laughing and our spirits high. 
              And let's not forget our social butterfly who's always buzzing around, engaging with the community and spreading the word about the Meta Arcade. 
              Last but not least, we have our numbers whiz who's always crunching the data and making sure we're on the right path.
              </p>

              <p>
              Together, we're the dream team that makes the Meta Arcade tick. 
              Connect with us on our social media channels and get to know the faces behind the games. 
              We're always up for a chat, and we'd love to hear your feedback on how we can make the Meta Arcade even better. 
              So come on over and join the fun - we'll be waiting for you!
              </p>
            </div>
            <Team />
          </div>
        </div>
      </div>
    </TeamDetailsStyleWrapper>
  );
};

export default TeamDetails;
