import React from 'react';
import {aboutAgency, aboutPlatform, agencyGoals, agencySoftware} from "../../img";
import Header from "../homepage/components/header/Header";


const AboutPlatform = () => {
  return (
    <div>
      <div className="about-platform">
        <div>
          <img className="image-aboutPlatform" src={aboutPlatform} alt="aboutPlatform"/>
        </div>
        <div>
          <h1 className="header-about">About the platform</h1>
          <div className="about-description">
            The rehabilitation and social guidance platform is a unified platform for developing and
            automating the services of the Rehabilitation and Social Guidance Agency. And to facilitate
            access to agency services to be a meeting point between the Ministry of Human Resources and Social
            Development and the beneficiaries.
          </div>
        </div>
      </div>

      <div className="about-Agency">
        <div>
          <h1>About the agency</h1>
          <div className="description-agency">
            The Rehabilitation and Social Guidance Agency operates according to comprehensive policies
            and offers various programs for all eligible groups based on a strategy of empowerment and
            capacity building of beneficiaries. The Agency seeks to empower the family structurally and
            functionally to participate within the perspective of sustainable development of society by
            building the capacity and empowerment of the family, individuals and institutions,
            and employing available resources. » and orientation. towards raising and employing
            their energies and initiatives and helping them acquire an increased ability to solve
            the problems they encounter and raise awareness of their lives in order to prepare
            the family to manage its life and affairs; In order for it to become a major
            element in society, to create its cohesion and stability, leading to its transformation
            into a participating family, which lays the foundations for the success of the empowerment
            plan, expanding the family's options, and building its capabilities to take over its
            affairs and build its position.


            The agency works to introduce the beneficiaries to the institutions in the community
            through which they can obtain appropriate assistance for them, as well as the
            assistance of social institutions. According to the best modern practices to achieve
            self-esteem for the family, its cohesion and protection, invest its capabilities and
            strengthen it to improve its social performance, protect it from the effects of social
            problems or limit them, help it fulfill its function and play its role in caring for its
            members, targeting support for the groups most in need of assistance and taking effective
            care that contributes to their independence and their non-reliance on government
            assistance This process is carried out with high efficiency and great effect.
          </div>
        </div>
        <div>
          <img className="img-aboutAgency" src={aboutAgency} alt="aboutAgency"/>
        </div>
      </div>


      <div className="about-Agency">
        <div>
          <img className="img-aboutAgency" src={agencyGoals} alt="agencyGoals"/>
        </div>
        <div>
          <h1>Agency goals</h1>
          <div className="description-agency">
            <ul>
              <li>
                Setting a set of goals that must be achieved through a precise and clear plan of
                action to find solutions to problems and choosing the strategy or set of strategies
                that help implement the action plan.
              </li>
              <li>
                Raising the effectiveness and efficiency of the social services provided in the agency
                and its branches using modern methods. And based on evidence, and raising the level of
                services provided to the beneficiaries, leading to a prosperous future and sustainable
                development.
              </li>
              <li>
                Developing access to those in need of agency services.
              </li>
              <li>
                Building the capacities of the beneficiaries of the agency's services and programmes,
                its employees and its affiliated branches.
              </li>
            </ul>
          </div>
        </div>
      </div>



      <div className="about-Agency">
        <div>
          <h1>Agency software</h1>
          <div className="description-agency">
            The agency provides many programs and projects that contribute to raising the economic
            and social level of the beneficiaries, taking them into their own hands and turning
            them into productive energies. It guarantees itself by sponsoring, training and
            qualifying individuals in the various social welfare homes, institutions and centers.
            Or by providing subsidies to empower people with disabilities. And orphans, the elderly,
            and the women and children. In order to achieve their proper upbringing and to
            compensate them for deprivation. Encouraging and supporting foster families to
            take in orphans and work to guide and guide pandemic juveniles and modify their
            behavior; To become useful members of society and monitor those exposed to delinquency,
            and combat beggary through the study of cases of social beggars. And the agency
            intensifies its programs towards supporting family and childhood care activities.
            As the family is the main pillar in building human society, And that is by guiding
            the family and guiding it to carry out its active role in raising its children and
            preparing them to contribute to bearing the burdens of development and realizing
            the progress of society economically and socially and through interest in activities.
            Programs for appraisal and acceptance and creating social stability for these groups,
            with the aim of re-adapting them with the external community and helping them to
            overcome social problems. The agency organizes and manages projects, programs and
            resource management, in order to achieve the strategic goals that enable the successful
            completion of the project. The agency takes into account quality, time and cost.
            By applying project management methodology and governance, the agency implements project
            and program outputs The agency organizes and manages projects, programs and resource
            management, in order to achieve the strategic goals that enable the successful
            completion of the project. The agency takes into account quality, time and cost.
            By applying project management methodology and governance, the agency implements project
            and program outputs The agency organizes and manages projects, programs and resource
            management, in order to achieve the strategic goals that enable the successful completion
            of the project. The agency takes into account quality, time and cost. By applying project
            management methodology and governance, the agency implements project and program outputs
          </div>
        </div>
        <div>
          <img className="img-aboutAgency" src={agencySoftware} alt="agencySoftware"/>
        </div>
      </div>


    </div>
  );
};

export default AboutPlatform;
