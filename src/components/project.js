import React from "react"
import Styled from "@emotion/styled"

const ProjectStyles = Styled.div`
  background: #1C1C1C;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 5px;

  h3 {
    margin-top: 0;
  }
`

const project = ({ projectData }) => {
  const { name, github, link, techStack, description } = projectData
  return (
    <ProjectStyles>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        Github: <a href={`https://github.com/rhotimee/${github}`}>{github}</a>
      </p>
      {link && (
        <p>
          Web Link: <a href={`https://${link}`}>{link}</a>
        </p>
      )}
      <div>
        {techStack.map((tech, i) => (
          <span>
            {tech}
            {i <= techStack.length - 2 && <span>,&nbsp;</span>}
          </span>
        ))}
      </div>
    </ProjectStyles>
  )
}

export default project
