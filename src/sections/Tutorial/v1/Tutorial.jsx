import { SectionTitle, SectionTitleWrapper } from "components/sectionTitle";
import TutorialStyleWrapper from "./Tutorial.style";
import data from "assets/data/tutorial/dataV1";

const Tutorial = () => {
  return (
    <TutorialStyleWrapper>
      <div className="container">
        <SectionTitleWrapper>
          <SectionTitle title="Arcade Playground" />


        </SectionTitleWrapper>

        <div className="row">
          {data?.map((step, i) => (
            <div key={i} className="col-lg-4">
              <div className="participate-item d-flex">
                <div className="number-image">
                  <img src={step.icon} alt="Participate icon" />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">{step.title}</h4>
                  <p className="description">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TutorialStyleWrapper>
  );
};

export default Tutorial;
