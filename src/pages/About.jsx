import React from "react";

import { skills, experiences, socialLinks } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Tooltip from "../components/Tooltip";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text  font-semibold drop-shadow">
          Lauren
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am on a mission to fuse creativity with code. From the early days of
          self-discovery in web development to my current pursuit of mastery,
          I've evolved into a digital enthusiast with an insatiable appetite for
          innovation. With a diverse background in media creativity and
          analytics, I combine technical acumen with creative insight to deliver
          innovative solutions. Outside of coding, I enjoy camping, reading,
          photography, and exploring new technologies.
        </p>
        <div class="text-right">
          <a
            href="https://laurenlo-blog.netlify.app/blog/my-journey-into-web-development/"
            className="mt-4 font-bold  hover:blue-gradient_text underline hover:neo-brutalism-blue transition duration-300"
          >
            Read my full story
          </a>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <Tooltip tooltipText={skill.name}>
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />

                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Social Links</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {socialLinks.map((socialLink) => (
            <div key={socialLink.name}>
              {socialLink.hasLink ? (
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="block-container w-20 h-20">
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={socialLink.iconUrl}
                        alt={socialLink.name}
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                </a>
              ) : (
                <Tooltip tooltipText={socialLink.name}>
                  <div className="block-container w-20 h-20">
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={socialLink.iconUrl}
                        alt={socialLink.name}
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="py-16">
        <h3 className="subhead-text">Social Links</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Self-learner turned Master of Applied Computing student, I am on a
            mission to fuse creativity with code. From the early days of
            self-discovery in web development to my current pursuit of mastery,
            I've evolved into a digital enthusiast with an insatiable appetite
            for innovation.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    {" "}
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point=${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div> */}
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
