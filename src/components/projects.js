import React from "react"
import Styled from "@emotion/styled"
import Project from "./project"
import Layout from "./layout"

const projectList = [
  {
    name: "Weconnect",
    description:
      "WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.",
    github: "weconnect",
    link: "weconnect-business.herokuapp.com",
    techStack: ["Javascript", "NodeJs", "React", "PostgreSQL"],
    image: "",
  },
  {
    name: "Dog Breed Classifier",
    description:
      "As part of Udacity nanodegree, I worked on the dog breed classifier using Convolutional Neural Networks (CNN).",
    github: "dog-breed-classifier",
    link: "",
    techStack: ["Python", "Scikit learn", "Keras"],
    image: "",
  },
  {
    name: "Customer Segments",
    description:
      "As part of the Udacity nanodegree, I used unsupervised learning to segments customers.",
    github: "Customer-Segments",
    link: "",
    techStack: ["Python", "Scikit learn", "Keras"],
    image: "",
  },
  {
    name: "Openmrs Owa Orderentry",
    description:
      "I contributed to Open MRS an open-source project to develop software to support the delivery of health care in developing countries.",
    github: "openmrs-owa-orderentry",
    link: "",
    techStack: ["React", "Redux"],
    image: "",
  },
  {
    name: "Teach a Quadcopter How to Fly",
    description:
      "In this project, I designed an agent to fly a quadcopter, and then trained it using a reinforcement learning algorithm.",
    github: "RL-Quadcopter",
    link: "",
    techStack: ["React", "Redux"],
    image: "",
  },
  {
    name: "Predict Stocks Prices Using Machine Learning",
    description:
      "Capstone project for Machine Learning Engineer Nanodegree Program. This project project predicts stock proces (S&P500).",
    github: "Predict-Stocks/",
    link: "",
    techStack: ["Python", "Keras", "Scikit Learn"],
    image: "",
  },
  {
    name: "Commmint Bukka",
    description:
      "Commint buka is a web application for food ordering and delivery",
    github: "",
    link: "commintbuka.com",
    techStack: ["React", "Firebase"],
    image: "",
  },
  {
    name: "Operationalize a Machine Learning Microservice API",
    description:
      "In this project, I operationalized a Machine Learning Microservice API.",
    github: "ml-microservice-kubernetes",
    link: "",
    techStack: ["Python", "Flask", "Docker", "Kubernetes", "AWS"],
    image: "",
  },
  {
    name: "Deploy a high-availability web app using CloudFormation",
    description:
      "As part of Cloud devops nanodegree, I deployed a high availability web app using Cloudformation (IAC).",
    github: "ml-microservice-kubernetes",
    link: "",
    techStack: ["Shell", "AWS", "IAC"],
    image: "",
  },
  {
    name: "Cloud Devops Nanodegree Capstone",
    description:
      "Capstone project for Cloud DevOps Engineer Nanodegree Program.This project project uses Jenkins, Docker, Kubernetes and Cloudformation to implement CI/CD and infrastructure provisioning.As part of Cloud devops nanodegree, I deployed a high availability web app using Cloudformation (IAC).",
    github: "cloud-devops-capstone",
    link: "",
    techStack: ["Jenkins", "AWS", "Docker", "Kubernetes", "Shell", "IAC"],
    image: "",
  },
]

const ProjectStyles = Styled.div`
  width: 50rem;

  @media screen and (max-width: 768px) {
    width: calc(100% - 1.5rem);
  }
`

const projects = () => {
  return (
    <Layout>
      <ProjectStyles>
        {projectList.map(projectData => (
          <Project projectData={projectData} />
        ))}
      </ProjectStyles>
    </Layout>
  )
}

export default projects
